import React, { FC, createContext } from "react";
import "./App.css";
import { Person } from "./components/Person";
import { HairColor } from "./Enums";
import { Todos } from "./components/Todos";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const name: string = "Aidan";
  const age: number = 26;
  const isMarried: boolean = false;

  const getName = (name: string): number => {
    if (name === "Aidan") {
      return 26;
    } else {
      return 0;
    }
  };

  const contextValue: AppContextInterface = {
    name: "Aidan",
    age: 26,
    country: "United Kingdom",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Person
        name="Aidan"
        age={26}
        email="aidan@gmail.com"
        hairColor={HairColor.Blonde}
      />
      <Todos />
    </AppContext.Provider>
  );
};

export default App;
