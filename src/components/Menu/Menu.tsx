import { useState } from "react";
import {
  Center,
  Avatar,
  Flex,
} from "@mantine/core";
import NavbarLink from "./NavbarLink/NavbarLink";

import classes from "./menu.module.css";

const mockMenuData = [
  { icon: "icon-rain-sun", label: "weather" },
  { icon: "icon-navigation", label: "explore" },
  { icon: "icon-pin", label: "cities" },
  { icon: "icon-setting", label: "settings" },
];

function Menu() {
  const [active, setActive] = useState(-1);

  const links = mockMenuData.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={`${classes.navbar} bg-white bg-opacity-20 p-4 rounded-3xl`}>
      <Center>
        <Avatar src="/user1.png" radius="xl" size="lg" />
      </Center>

      <div className={classes.navbarMain}>
        <Flex
          gap="md"
          justify="center"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          {links}
        </Flex>
      </div>
    </nav>
  );
}

export default Menu;
