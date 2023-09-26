export type PostsResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostRequest = {
  start: number;
};
