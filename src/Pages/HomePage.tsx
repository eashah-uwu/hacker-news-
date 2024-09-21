import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getStories, Story } from "../Api/stories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);


function HomePage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentBatch, setCurrentBatch] = useState<number>(0);

  useEffect(() => {
    fetchStories(currentBatch);
  }, [currentBatch]);

  const fetchStories = async (batch: number) => {
    const storiesData = await getStories(batch);
    setStories(storiesData);
  };

  const loadMore = () => {
    setCurrentBatch((prevBatch) => prevBatch + 1);
  };


  return (
    <>
      <div className="w-full md:w-10/12 md:mt-2 mb-2 mx-auto bg-[#f6f6ef] min-h-screen text-sm flex flex-col">
        <Navbar />
        <ul className="flex flex-col flex-grow space-y-2 m-2 mt-4 font-verdana text-sm">
          {stories.map(({url, title, by, descendants,score,id, time}, index) => (
            <li key={id} className="flex items-start space-x-2 text-sm">
              <span className="text-gray-500">
                {index + 1 + currentBatch * 30}.
              </span>

              <div className="flex-grow">
                <div className="flex items-end">
                  <FontAwesomeIcon
                    className="w-auto h-4 mr-1"
                    icon={faCaretUp}
                  />
                  <a href={url}>
                    {title}{" "}
                    <span className="text-gray-500">
                    {url ? new URL(url).hostname : "N/A"} 
                    </span>
                  </a>
                </div>
                <p className="text-gray-500">
                  {score} points by {by} |{" "}
                  {dayjs(time * 1000).fromNow()} |{" "} |
                  {descendants} comments
                </p>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={loadMore}>More</button>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
