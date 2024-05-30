import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="3">
          <VStack align="start" spacing={4}>
            <Text fontSize="3xl" fontWeight="bold">Latest News</Text>
            <Box bg="gray.100" p={4} borderRadius="md" w="full">
              <Text fontSize="xl" fontWeight="bold">Article 1</Text>
              <Text>Summary of the latest news article...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" w="full">
              <Text fontSize="xl" fontWeight="bold">Article 2</Text>
              <Text>Summary of the latest news article...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" w="full">
              <Text fontSize="xl" fontWeight="bold">Article 3</Text>
              <Text>Summary of the latest news article...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" bg="gray.50" p={4} borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold">Trending</Text>
          <VStack align="start" spacing={4} mt={4}>
            <Box>
              <Text fontSize="lg" fontWeight="bold">Trending Article 1</Text>
              <Text>Summary of the trending article...</Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold">Trending Article 2</Text>
              <Text>Summary of the trending article...</Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold">Trending Article 3</Text>
              <Text>Summary of the trending article...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;