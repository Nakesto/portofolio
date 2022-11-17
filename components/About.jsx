import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const About = ({ colorMode }) => {
    return (
        <>
            <Text fontSize='6xl' fontWeight='bold' textAlign='center'>About Me</Text>
            <Flex w='100%' alignItems='center' mt='100px' gap='100px' pb='75px'>
                <Image src='dark-3d.png' alt='finger' width='600px' />
                <Box flex='1' display='flex' gap='25px'>
                    <Stack>
                        <Box w='100%' px='15px' py='15px' bg='transparent' h='100%' color={colorMode == 'light' ? "black" : "white"} _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ border: 'transparent' }}>
                            <Text fontSize='lg' fontWeight="medium" letterSpacing={1}>
                                Education
                            </Text>
                        </Box>
                        <Box w='100%' px='15px' py='15px' bg='transparent' h='100%' color={colorMode == 'light' ? "black" : "white"} _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ border: 'transparent' }}>
                            <Text fontSize='lg' fontWeight="medium" letterSpacing={1}>
                                Hobby
                            </Text>
                        </Box>
                        <Box w='100%' px='15px' py='15px' bg='transparent' h='100%' color={colorMode == 'light' ? "black" : "white"} _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ border: 'transparent' }}>
                            <Text fontSize='lg' fontWeight="medium" letterSpacing={1}>
                                Skills
                            </Text>
                        </Box>
                    </Stack>
                    <Stack>
                        <Text fontSize='4xl' fontWeight='semibold' color='primary' mb='30px'>Education</Text>

                        <Text fontSize='xl' fontWeight='medium' color='white'><strong style={{ color: '#7D869C' }}>2014-2017</strong>&nbsp;&nbsp;&nbsp;&nbsp;SMP Xaverius Maria Palembang</Text>
                        <Text fontSize='xl' fontWeight='medium' color='white'><strong style={{ color: '#7D869C' }}>2017-2020</strong>&nbsp;&nbsp;&nbsp;&nbsp;SMA Xaverius 1 Palembang</Text>
                        <Text fontSize='xl' fontWeight='medium' color='white'><strong style={{ color: '#7D869C' }}>2020 to present</strong>&nbsp;&nbsp;&nbsp;&nbsp;Universitas Multimedia Nusantara</Text>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}

export default About