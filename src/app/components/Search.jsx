"use client";
import React, { useState } from 'react';
import { Button, Input, useToast } from '@/app/chakra';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query) return;

        try {
            const res = await axios.get(`https://api.github.com/users/${query}`);
            const data = await res.data;
            console.log("User Github Data: ", data);
            if (data.message) {
                return toast({
                    title: "Error",
                    description: data.message === "Not Found" ? "User Not Found" : data.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                })
            }
        } catch (error) {
            toast({
                title: "Error",
                description: error.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                variant={"outline"}
                placeholder={"Type a UserName (i.e. Yuvadi29)"}
                focusBorderColor='green.500'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button
                size="md"
                type='submit'
                colorScheme='whatsapp'
                mt={4}
                disabled={!query}
                opacity={!query ? 0.5 : 1}
            >
                Search
            </Button>
        </form>
    )
}

export default Search