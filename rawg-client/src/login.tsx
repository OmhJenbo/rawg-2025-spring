// src/Login.tsx
import { Box, Button, Input, Heading } from "@chakra-ui/react";

function Login() {
  return (
    <Box maxW="sm" margin="0 auto" mt="50px">
      <Heading mb="4">Login</Heading>
      <Input placeholder="Username" mb="4" />
      <Input placeholder="Password" mb="4" type="password" />
      <Button colorScheme="blue">Login</Button>
    </Box>
  );
}

export default Login;
