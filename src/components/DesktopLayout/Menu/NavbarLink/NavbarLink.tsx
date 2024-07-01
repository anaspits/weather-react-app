import {
  Tooltip,
  UnstyledButton,
  Text,
  Flex,
} from "@mantine/core";

import classes from "./navbarLink.module.css";

interface NavbarLinkProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Flex
          mih={50}
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <i className={`${Icon} text-2xl`}></i>
          <Text size="xs" c="white">
            {label}
          </Text>
        </Flex>
      </UnstyledButton>
    </Tooltip>
  );
}

export default NavbarLink;
