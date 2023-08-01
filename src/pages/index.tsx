import React from 'react'
import { Box, Button, Flex, Hide, Link, Text } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import Image from 'next/image'
import { GithubLogo } from 'phosphor-react'
import { About } from '@/components/About'
import { RevealWrapper } from 'next-reveal'
import { WorkExperiences } from '@/components/WorkExperiences'
import { NextSeo } from 'next-seo'

export default function Home() {
  const handleClickViewGithubProfile = () => {
    gtag('event', 'toggle_github_profile', {
      event_label: 'View Github Profile'
    })
  }
  return (
    <>
      <NextSeo
        title="Portfolio // Mauricio Aires"
        description="Meu nome é Mauricio Aires, desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'sites, web, desenvolvimento, frontend, Mauricio Aires, ui designer, programador, front-end, designer, ui, freelancer, freela, website, portfólio">'
          }
        ]}
      />

      <Flex
        minH="100vh"
        align="center"
        direction="column"
        justify="flex-start"
        paddingX={{
          base: 4,
          md: 10
        }}
        paddingBottom={100}
      >
        <Header />

        <Flex
          id="s-home"
          as="section"
          gap={10}
          maxW={1440}
          width="100%"
          justifyContent={{
            base: 'center',
            lg: 'space-between'
          }}
          align="center"
          overflow="hidden"
        >
          <RevealWrapper duration={1000} origin="left">
            <Flex
              maxW={{
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
              gap={6}
            >
              <Text
                fontSize={{
                  base: '2xl',
                  md: '4xl'
                }}
              >
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
              <Text
                fontSize={{
                  base: 'md',
                  md: 'xl'
                }}
                color="gray.200"
              >
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
                onClick={() => handleClickViewGithubProfile()}
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
          </RevealWrapper>
          <Hide below="lg">
            <RevealWrapper duration={1000} origin="right">
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
            </RevealWrapper>
          </Hide>
        </Flex>

        <About />
        <WorkExperiences />
      </Flex>
    </>
  )
}
