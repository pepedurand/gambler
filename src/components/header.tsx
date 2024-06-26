import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { primaryColor } from "@/types/colors";
import { HamburgerIcon } from "@chakra-ui/icons";
import { signOutUser } from "@/api/auth";

export default function Header({ isHome = false }) {
  async function logout() {
    await signOutUser();
  }
  return (
    <Flex width="100%" padding="20px" justify="space-between">
      {!isHome ? (
        <Link href="/">
          <ArrowBackIcon sx={{ color: primaryColor, fontSize: 40 }} />
        </Link>
      ) : (
        <Box></Box>
      )}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList backgroundColor="#000" _hover={{ backgroundColor: "#001" }}>
          <MenuItem
            onClick={logout}
            backgroundColor="#000"
            _hover={{ backgroundColor: "#001" }}
          >
            Sair
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
