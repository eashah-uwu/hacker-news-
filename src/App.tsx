import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FilteredPage from "./Pages/FilteredPage";
import { getIDs, Story, getStories } from "./Api/stories";

function App() {
  const [ids, setIDs] = useState<number[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [batch, setBatch] = useState(0);
  const [currentStories, setCurrentStories] = useState<Story[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    fetchIDs();
  }, []);

  useEffect(() => {
    if (ids.length === 0) return;
    fetchStories();
  }, [ids]);

  useEffect(() => {
    if (ids.length === 0) return;
    if (batch <= 500 / 30) fetchAllStories(batch);
  }, [ids, batch]);

  const fetchIDs = async () => {
    const storyIDs = await getIDs();
    setIDs(storyIDs);
  };

  const fetchAllStories = async (batch: number) => {
    console.log("fetching all em sotries", batch);
    const fetchedStories = await getStories(ids, batch);
    console.log(fetchedStories);
    setStories((s) => [...s, ...fetchedStories]);
    setBatch((b) => b + 1);
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
