"use client";
import { Container, Text } from '@/app/chakra';
import Navbar from './components/Navbar';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import { useState } from 'react';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userData, setUserData] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  return (
    <Container maxW='container.lg'>
      <Navbar />
      <Text fontSize={"2xl"} textAlign={"center"} my={4}>
        Search Users on GitHub
      </Text>
      <Search setUserData={(res) => setUserData(res)} setLoading={setLoading} />
      {userData && <UserProfile userData={userData} />}
    </Container>
  )
}

export default page