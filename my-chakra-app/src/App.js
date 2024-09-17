// src/App.js
import { Heading, Button, Input, VStack } from '@chakra-ui/react'

function App() {
  return (
    <VStack spacing={4} padding={4}>
      <Heading as="h1" size="xl" textAlign="center">
        My Chakra UI App
      </Heading>
      <Input placeholder="Enter some text" size="md" />
      <Button colorScheme="teal" size="md">
        Click Me
      </Button>
    </VStack>
  )
}

export default App
