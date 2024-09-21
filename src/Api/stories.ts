export type Story = {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export type Stories = Story[];

export const getStories = async (batch: number): Promise<Stories> => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const data = await response.json();

  const start = batch * 30;
  const end = start + 30;

  const stories = await Promise.all(
    data.slice(start, end).map(async (id: number) => {
      const storyResponse = await fetch(
        `${import.meta.env.VITE_BASE_URL}/item/${id}.json?print=pretty`
      );
      const storyData = await storyResponse.json();
      return storyData;
    })
  );
  return stories;
};
