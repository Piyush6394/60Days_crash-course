import { Box, Button, Grid, GridItem, Heading, VStack } from '@chakra-ui/react'

function App() {
  return (
    <Box p={5}>
      {/* Responsive Navbar */}
      <Heading as="h1" size="xl" mb={5}>
        Responsive UI with Chakra UI
      </Heading>

      {/* Responsive Grid Layout */}
      <Grid
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
       
      >
        <GridItem>
          <Box bg="teal.500" height="200px" borderRadius="md" />
        </GridItem>
        <GridItem>
          <Box bg="blue.500" height="200px" borderRadius="md" />
        </GridItem>
        <GridItem>
          <Box bg="orange.500" height="200px" borderRadius="md" />
        </GridItem>
      </Grid>

      {/* Responsive Buttons */}
      <VStack mt={5} spacing={4} align="center">
        <Button colorScheme="teal" size={['sm', 'md', 'lg']}>
          Click Me
        </Button>
        <Button colorScheme="blue" size={['sm', 'md', 'lg']}>
          Learn More
        </Button>
      </VStack>
    </Box>
  )
}

export default App
