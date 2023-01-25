import React from "react";
import { ListItem } from "@react-native-material/core";

export const List = ({ notes }: any) => {
  console.log("==", notes);
  return (
    <>
      {notes.map((note: any, i: number) => (
        <ListItem key={i} title={note.title}></ListItem>
      ))}
    </>
  );
};
