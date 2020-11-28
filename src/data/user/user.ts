export type User = {
  username: string;
  email: string;
  password: string;
}

export type UserProfile = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: string;
  image: string;
  token: string;
}