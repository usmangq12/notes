import { ListItem } from "@react-native-material/core";
import React from "react";

// const array = ["item 1", "item 2", "item 3", "item 4", "item 5"];
const array: { id: string; title: string }[] = [
  { id: "title1", title: "item 1" },
  { id: "title2", title: "item 2" },
  { id: "title3", title: "item 3" },
  { id: "title4", title: "item 4" },
  { id: "title5", title: "item 5" },
];

export const List = () => {
  return (
    <>
      {array.map(({ id, title }) => (
        <ListItem key={`${id}`} title={title} />
      ))}
    </>
  );
};
