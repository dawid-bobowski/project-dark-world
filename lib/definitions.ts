export type User = {
  id: string;
  name: string;
  email: string;
  characters: Character[];
};

export type Character = {
  id: number;
  name: string;
  class: string;
  level: number;
  experience: number;
  activeExpedition: number | null;
  expeditionStart: Date | null;
};

export type LayoutProps = {
  children?: React.ReactNode;
};
