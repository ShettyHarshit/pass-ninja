"use client";

import AddPassword from "@/components/AddPassword";
import PasswordList from "@/components/PasswordList";
import { fetchPasswords } from "@/services/encryption";
import { ChakraProvider, Container, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const passwordList = fetchPasswords();
    setPasswords(passwordList);
  }, []);

  const refreshPasswordList = () => {
    const passwordList = fetchPasswords();
    setPasswords(passwordList);
  };

  return (
    <ChakraProvider>
      <main>
        <Container>
          <br />
          <center>Pass Ninja</center>
          <br />
          <AddPassword refreshPasswordList={refreshPasswordList} />
          <br />
          <Divider />
          <br />
          <PasswordList passwords={passwords} />
        </Container>
      </main>
    </ChakraProvider>
  );
}
