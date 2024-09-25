import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Stories from "../Components/Stories";
import { Story } from "../Api/stories";

interface HomePageProps {
  currentStories: Story[];
  loadMore: () => void;
}

function HomePage({ currentStories, loadMore }: HomePageProps) {
  return (
    <div className="w-full md:w-10/12 md:mt-2 mb-2 mx-auto bg-[#f6f6ef] min-h-screen text-sm flex flex-col">
      <Navbar />
      <Stories stories={currentStories} />
      <button onClick={loadMore}>More</button>
      <Footer />
    </div>
  );
}

export default HomePage;
