import { Box, Button, Container, Flex, Spacer, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useEffect } from 'react';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isNav, setIsNav] = React.useState(false)

    const onScroll = () => {
        if (window.scrollY >= 80) {
            setIsNav(true)
        } else {
            setIsNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    return (
        <>
            <Box w='100%' bg={isNav ? "rgb(125, 134, 126, 0.2)" : "transparent"} css={{ backdropFilter: 'blur(10px)' }} h="100px" position="fixed" zIndex="1">
                <Container display='flex' alignItems='center' h="100%" maxWidth='75%' >
                    <Text fontSize='3xl' fontWeight="bold" color={colorMode == 'light' ? "black" : "white"} letterSpacing={3}>
                        Vincent Gunawan.
                    </Text>
                    <Spacer />
                    <Flex h='60px' bg='transparent' gap='20px'>
                        <Button bg='transparent' h='100%' color={colorMode == 'light' ? "black" : "white"} _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ border: 'transparent' }}>
                            <Text fontSize='lg' fontWeight="medium" letterSpacing={1}>
                                Contact
                            </Text>
                        </Button>
                        <Button bg='transparent' h='100%' color={colorMode == 'light' ? "black" : "white"} _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ border: 'transparent' }}>
                            <Text fontSize='lg' fontWeight="medium" letterSpacing={1}>
                                Projects
                            </Text>
                        </Button>
                        <Button bg='transparent' h='100%' onClick={toggleColorMode} _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ border: 'transparent' }}>
                            {colorMode === 'light' ?
                                (
                                    <Flex justifyContent='center' bg='quaternary' alignItems='center' h='100%' borderRadius='lg' px='18px'>
                                        <MoonIcon color='white' fontSize='20px' />
                                    </Flex>
                                ) :
                                (
                                    <Flex justifyContent='center' bg='primary' alignItems='center' h='100%' borderRadius='lg' px='18px'>
                                        <SunIcon color='black' fontSize='20px' />
                                    </Flex>
                                )}
                        </Button>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default Navbar