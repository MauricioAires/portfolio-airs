import React from 'react'
import { Box, Button, Flex, Hide, Link, Text } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import Image from 'next/image'
import { GithubLogo } from 'phosphor-react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      direction="column"
      justify="flex-start"
      paddingX={10}
    >
      <Header />
      <Flex
        gap={10}
        width="100%"
        justifyContent={{
          base: 'center',
          lg: 'space-between'
        }}
        maxW={1440}
        align="center"
      >
        <Flex
          maxW={{
            base: '90%',
            lg: 650
          }}
          textAlign={{
            base: 'center',
            lg: 'left'
          }}
          flexDir="column"
          align={{
            base: 'center',
            lg: 'flex-start'
          }}
        >
          <Text fontSize="4xl">
            Ajudando empresas a construírem
            <Text
              as="span"
              display="inline"
              marginInline={3}
              color="purple.300"
            >
              produtos digitais
            </Text>
            de forma moderna e de alta qualidade.
          </Text>
          <Text fontSize="xl" color="gray.200">
            Uma combinação única de design, desenvolvimento frontend e
            habilidades profissionais que impulsionarão seu produto a se
            destacar no mercado.
          </Text>
          <Link
            target="_blank"
            textDecoration="dashed"
            href="https://github.com/MauricioAires"
            isExternal
            mt={20}
          >
            <Button
              w={300}
              h={14}
              bg="purple.700"
              _hover={{
                bg: 'purple.800'
              }}
              gap={2}
            >
              <GithubLogo weight="bold" size={20} /> Github
            </Button>
          </Link>
        </Flex>

        <Hide below="lg">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w={600}
          >
            <Image
              priority
              src="/assets/code.png"
              style={{
                objectFit: 'cover'
              }}
              alt=""
              width={500}
              height={500}
            />
          </Box>
        </Hide>
      </Flex>
    </Flex>
  )
}
