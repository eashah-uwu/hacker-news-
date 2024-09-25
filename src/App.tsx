import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FilteredPage from "./Pages/FilteredPage";
import { getIDs, Story, getAllStories, getStories } from "./Api/stories";

function App() {
  const [ids, setIDs] = useState<number[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [currentStories, setCurrentStories] = useState<Story[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    fetchIDs();
  }, []);

  useEffect(() => {
    if (ids.length === 0) return;
    fetchStories();
    fetchAllStories();
  }, [ids]);

  const fetchIDs = async () => {
    const storyIDs = await getIDs();
    setIDs(storyIDs);
  };

  const fetchAllStories = async () => {
    console.log("fetching all em sotries");
    const Stories = await getAllStories(ids);
    setStories(Stories);
  };

  const fetchStories = async () => {
    const stories = await getStories(ids, pageNumber);
    setCurrentStories(stories);
  };

  const loadMore = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage currentStories={currentStories} loadMore={loadMore} />
        }
      />
      <Route path="/filtered" element={<FilteredPage stories={stories} />} />
    </Routes>
  );
}

export default App;
