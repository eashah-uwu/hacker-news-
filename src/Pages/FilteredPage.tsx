import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Stories from "../Components/Stories";
import { Story } from "../Api/stories";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface FilteredPageProps {
  stories: Story[];
}

function FilteredPage({ stories }: FilteredPageProps) {
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const [searchParams] = useSearchParams();
  const domain = searchParams.get("domain");

  useEffect(() => {
    if (domain) {
      filterStories();
    }
  }, [domain]);

  const filterStories = async () => {
    const filtered = stories.filter((story) => {
      const storyDomain = story.url ? new URL(story.url).hostname : "";
      return storyDomain === domain;
    });
    setFilteredStories(filtered);
  };

  return (
    <div className="w-full md:w-10/12 md:mt-2 mb-2 mx-auto bg-[#f6f6ef] min-h-screen text-sm flex flex-col">
      <Navbar />
      <Stories stories={filteredStories} />

      <Footer />
    </div>
  );
}

export default FilteredPage;
