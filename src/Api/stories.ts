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

export const getStories = async (
  data: number[],
  page_number: number
): Promise<Stories> => {
  const page_size = 30;
  const start = page_number * page_size;
  const end = start + page_size - 1;

  const fetches = await Promise.all(
    data
      .slice(start, end)
      .map(async (id: number) =>
        fetch(`${import.meta.env.VITE_BASE_URL}/item/${id}.json`)
      )
  );

  const stories = await Promise.all(fetches.map((f) => f.json()));

  return stories;
};

export const getAllStories = async (data: number[]): Promise<Stories> => {
  const fetches = await Promise.all(
    data.map(async (id: number) =>
      fetch(`${import.meta.env.VITE_BASE_URL}/item/${id}.json`)
    )
  );

  const stories = await Promise.all(fetches.map((f) => f.json()));

  return stories;
};

export const getIDs = async (): Promise<number[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}`);
  const data = await response.json();

  return data;
};
