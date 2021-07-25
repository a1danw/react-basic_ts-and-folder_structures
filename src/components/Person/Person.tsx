import React, { FC, ChangeEvent, useState } from "react";
import { HairColor } from "../../Enums";
import { PersonProps } from "../../Interfaces";

export const PersonComponent: FC<PersonProps> = ({
  name,
  age,
  email,
  hairColor,
}) => {
  const [country, setCountry] = useState<string | null>(null);

  // posibly used when needing to create a smaller enum
  type NameType = "Aidan" | "Charles" | "Bob";
  const nameForType: NameType = "Aidan";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.nodeValue);
  };

  // interface should define some sort of object
  // enum defines a set of different options
  return (
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{age}</h2>
      <input placeholder="Write down your country..." onChange={handleChange} />
      {country} <br />
      {/* {HairColor.Blonde} */}
      {hairColor}
    </div>
  );
};

// export const PersonComponent = ({ name, age, email }: Props) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h2>{email}</h2>
//       <h2>{age}</h2>
//     </div>
//   );
// };
