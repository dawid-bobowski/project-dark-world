export type User = {
  id: string;
  name: string;
  email: string;
};
export type Users = User[];

export type Character = {
  id: string;
  name: string;
  class: string;
  level: number;
};
export type Characters = Character[];

export type ResponseData = { message: string } | User;
