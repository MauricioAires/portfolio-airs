import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'

export function About() {
  return (
    <Flex
      id="s-about"
      as="section"
      maxW={1440}
      width="100%"
      align="center"
      marginTop={20}
    >
      <RevealWrapper distance="100px" className="load-hidden">
        <Flex
          direction={{
            base: 'column',
            lg: 'row'
          }}
          alignItems="center"
          justifyContent="center"
          gap={10}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius="full"
            overflow="hidden"
            minW={300}
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
              Meu nome é Mauricio Aires e sou desenvolvedor frontend pleno.
              Tenho formação técnica em informática e atualmente estou cursando
              análise e desenvolvimento de sistemas. Desde o meu primeiro
              contato com o desenvolvimento durante o ensino médio em 2016, me
              apaixonei pela criação de interfaces frontend performáticas e
              responsivas.
            </Text>
          </Flex>
        </Flex>
      </RevealWrapper>
    </Flex>
  )
}
