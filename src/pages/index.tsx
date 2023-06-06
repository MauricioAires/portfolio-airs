import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      direction="column"
      justify="flex-start"
    >
      <Header />
      <Flex
        gap={10}
        width="100%"
        justifyContent="space-between"
        maxW={1440}
        align="center"
      >
        <Flex maxW={650} flexDir="column">
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
        </Flex>

        <Box />
      </Flex>
    </Flex>
  )
}
