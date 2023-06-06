import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'

export function About() {
  return (
    <RevealWrapper distance="100px" className="load-hidden" reset={true}>
      <Flex
        maxW={1440}
        gap={20}
        direction={{
          base: 'column',
          lg: 'row'
        }}
        alignItems="center"
        justifyContent="center"
        marginTop={20}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          overflow="hidden"
          w={{
            base: 300,
            lg: 800
          }}
        >
          <Image
            priority
            src="https://github.com/MauricioAires.png"
            alt="Mauricio Aires"
            style={{
              objectFit: 'cover'
            }}
            width={600}
            height={600}
            quality={100}
          />
        </Flex>
        <Flex direction="column" gap={4}>
          <Text color="purple.300">Quem sou</Text>
          <Text fontSize="5xl" fontWeight="bold">
            Mauricio Aires
          </Text>
          <Text fontSize="xl">Front-end Pleno</Text>
          <Text fontSize="lg" color="gray.200">
            Meu nome é Mauricio Aires e sou desenvolvedor frontend pleno. Tenho
            formação técnica em informática e atualmente estou cursando análise
            e desenvolvimento de sistemas. Desde o meu primeiro contato com o
            desenvolvimento durante o ensino médio em 2016, me apaixonei pela
            criação de interfaces frontend performáticas e responsivas.
          </Text>
        </Flex>
      </Flex>
    </RevealWrapper>
  )
}
