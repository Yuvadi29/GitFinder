import { Container, Text } from '@/app/chakra';
import Navbar from './components/Navbar';
import Search from './components/Search';

const page = () => {
  return (
    <Container maxW='container.lg'>
      <Navbar />
      <Text fontSize={"2xl"} textAlign={"center"} my={4}>
        Search Users on GitHub
      </Text>
      <Search />
    </Container>
  )
}

export default page