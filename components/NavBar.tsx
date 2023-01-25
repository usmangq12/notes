import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const NavBar = () => {
  return (
    <AppBar
      title="Notes"
      trailing={(props) => (
        <HStack>
          <IconButton
            icon={(props) => <Icon name="magnify" {...props} />}
            {...props}
          />
          <IconButton
            icon={(props) => <Icon name="dots-vertical" {...props} />}
            {...props}
          />
        </HStack>
      )}
    />
  );
};
