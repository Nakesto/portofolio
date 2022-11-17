import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Hero({ colorMode }) {
    return (
        <>
            <Flex w='100%' alignItems='center' h='100vh'>
                <Box w='52%'>
                    <Flex mb='50px' >
                        <Avatar size='2xl' name='Vincent Gunawan' src='https://bit.ly/dan-abramov' mr='50px' />
                        <Flex flex='1' direction='column'>
                            <Text fontSize='5xl' fontWeight='bold' color={colorMode === 'dark' ? 'white' : 'black'}>Vincent Gunawan</Text>
                            <Text fontSize='xl' fontWeight='bold' color={colorMode === 'dark' ? 'primary' : 'quaternary'}>Full Stack Developer (FrontEnd / BackEnd / Devops)</Text>
                        </Flex>
                    </Flex>
                    <Flex direction='column' mb='28px' alignItems='end' >
                        <Text fontSize='lg' fontWeight='bold' color={colorMode === 'dark' ? 'white' : 'black'} mb='5px'>Description</Text>
                        <Divider w='85px' borderColor={colorMode === 'dark' ? 'primary' : 'quaternary'} border='5px' />
                    </Flex>
                    <Text textAlign='justify' fontSize='lg' fontWeight='semibold' mb='25px' color={colorMode === 'dark' ? 'tertiary' : 'black'}>Vincent is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He publishes content for marketing his products and his YouTube channel called &quot;Dev as Life&quot; has more than 100k subscribers.</Text>
                    <Button bg={colorMode === 'dark' ? 'primary' : 'quaternary'} color='black' size='lg'>My Portofolio</Button>
                </Box>
                <Box w='48%' mt='100px'>
                    <Image src="Programmer3.png" alt='programmer' w='100%' />
                </Box>
            </Flex>
        </>
    )
}

export default Hero