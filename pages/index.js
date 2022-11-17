import { Avatar, Box, Button, Container, Divider, Flex, Image, Text, useColorMode, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'

export default function Home() {
  const { colorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>Vincent | Portofolio</title>
        <meta name="description" content="My life, My Advanture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack>
        <Container maxW='75%'>
          <Hero colorMode={colorMode} />
          <About colorMode={colorMode} />
        </Container>
      </VStack>

    </ >
  )
}
