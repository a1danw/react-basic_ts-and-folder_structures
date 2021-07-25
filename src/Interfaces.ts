import { HairColor } from "./Enums";

export type EventType = React.ChangeEvent<HTMLInputElement>;

export interface PersonProps {
  name: string;
  age: number;
  email: string;
  getName?: (name: string) => string;
  hairColor: HairColor;
}

export interface ITodo {
  id?: string;
  description?: string;
  isCompleted?: boolean;
}
