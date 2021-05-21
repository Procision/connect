import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button } from "bumbag";
import Logo from "../components/Logo";

interface prop {
    children: any,
    isLast: boolean,
    to: string
}
const MenuItem = ({ children, isLast, to = "/" }: prop) => {
  return (
    <Text
      marginBottom={{ base: (isLast ? 0 : 8).toString(), sm: "0" }}
      marginRight={{ base: "0", sm: (isLast ? 0 : 8).toString() }}
      
      display="block"
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
        fill="white"
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const Header = () => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      use="nav"
      alignSelf="center"
      justifySelf="space-between"
      flexWrap="wrap"
      width="100%"
      marginBottom={8}
      padding={8}
      backgroundColor={"primary"} //["primary.500", "primary.500", "transparent", "transparent"]
      color={"white"}//["white", "white", "primary.700", "primary.700"]
    >
      <Flex alignContent="center">
        <Logo
          w="100px"
          color={"white"}//["white", "white", "primary.500", "primary.500"]
        />
      </Flex>

      <Box 
      display={"block"}
      //{ base: "block", md: "none" }
      onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={show ? "block" : "none"}
        flexBasis={"100%"}//{ base: "100%", md: "auto" }
      >
        <Flex
          alignSelf="center"
          justifySelf={"center"} //["center", "space-between", "flex-end", "flex-end"]
          direction={"column"}//["column", "row", "row", "row"]
          paddingTop={4}//[4, 4, 0, 0]
        >
          <MenuItem to="/" isLast={false}>Home</MenuItem>
          <MenuItem to="/how" isLast={false}>How it works </MenuItem>
          <MenuItem to="/features" isLast={false}>Features </MenuItem>
          <MenuItem to="/features" isLast={false}>Features </MenuItem>
          <MenuItem to="/signup" isLast={true}>
            <Button
              size="sm"
              borderRadius="md" // fix
              color={"primary"} //["primary.500", "primary.500", "white", "white"]
              backgroundColor={"white"}//["white", "white", "primary.500", "primary.500"]
              _hover={{
                backgroundColor: "primary" //"primary.100", "primary.100", "primary.600", "primary.600"
              }}
            >
              Create Account
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;