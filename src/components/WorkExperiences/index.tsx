import { Box, Flex, Text } from '@chakra-ui/react'
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'
import { ExpandableText } from './ExpandableText'

export function WorkExperiences() {
  return (
    <Box
      as="section"
      id="s-experience"
      maxW={1440}
      w="100%"
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection={{
        base: 'column',
        lg: 'row'
      }}
      paddingY={24}
    >
      <RevealWrapper distance="100px" className="load-hidden">
        <Flex justifyContent="flex-end" gap={1}>
          <Text as="h3" fontSize="5xl">
            Experiências
          </Text>
          <Text as="span" fontSize="5xl" color="purple.800">
            .
          </Text>
        </Flex>
      </RevealWrapper>

      <Flex
        marginLeft={{
          base: 0,
          lg: 10
        }}
        marginTop={{
          base: 10,
          lg: 6
        }}
        flexDir="column"
        gap={4}
      >
        <Flex gap={4}>
          <Box flexShrink={0}>
            <Image
              width={40}
              height={40}
              src="https://media.licdn.com/dms/image/C4D0BAQFszK2MGQUCUA/company-logo_200_200/0/1668687290829?e=1697068800&v=beta&t=yurHQwtTXWB1lSJMQMJSvTCcbCSWJNUvlmn19eKJ9Bk"
              alt="DBC Company"
            />
          </Box>
          <Flex flexDir="column">
            {/*  HEADER GROUP EXPERIENCES */}
            <Flex flexDirection="column">
              <Text fontWeight="semibold">DBC Company</Text>
              <Text fontWeight="normal" fontSize="sm">
                Tempo integral • 1 a
              </Text>

              <Flex fontSize="sm" fontWeight="thin" color="gray.200">
                <Text>Remota</Text>
              </Flex>
            </Flex>

            <Flex flexDirection="column" position="relative" paddingTop={4}>
              <Box
                position="absolute"
                display="flex"
                justifyContent="center"
                w={2}
                height={2}
                background="gray.600"
                left="calc(calc(20px + 1rem) * -1)"
                transform="translateX(-50%)"
                top="37px"
                borderRadius="full"
              ></Box>

              <Flex
                paddingY={4}
                flexDirection="column"
                _before={{
                  content: `""`,
                  position: 'absolute',
                  width: '2px',
                  height: 'calc(100% - 25px)',
                  bg: 'gray.600',
                  left: 'calc(calc(20px + 1rem) * -1)',
                  transform: 'translateX(-50%)',
                  top: '55px'
                }}
              >
                <Text fontWeight="semibold">Fullstack Pleno</Text>

                <Flex
                  flexDir="column"
                  fontSize="sm"
                  fontWeight="thin"
                  color="gray.200"
                >
                  <Text>jul de 2023 - o momento · 2 meses</Text>
                  <Text>Rio Grande do Sul, Brazil</Text>
                </Flex>
              </Flex>

              <ExpandableText
                noOfLines={2}
                textContent={`Atuando como desenvolvedor backend com NodeJS e como frontend utilizando React em uma aplicação do segmento bancário`}
              />
            </Flex>

            <Flex flexDirection="column" position="relative" paddingY={4}>
              <Box
                position="absolute"
                display="flex"
                justifyContent="center"
                w={2}
                height={2}
                background="gray.600"
                left="calc(calc(20px + 1rem) * -1)"
                transform="translateX(-50%)"
                top="37px"
                borderRadius="full"
              ></Box>

              <Flex paddingY={4} flexDirection="column">
                <Text fontWeight="semibold">Frontend Pleno</Text>

                <Flex
                  flexDir="column"
                  fontSize="sm"
                  fontWeight="thin"
                  color="gray.200"
                >
                  <Text>set de 2022 - jul de 2023 · 11 meses</Text>
                  <Text>Rio Grande do Sul, Brazil</Text>
                </Flex>
              </Flex>

              <ExpandableText
                noOfLines={2}
                textContent={`Fui responsável pela arquitetura de micro front-end de um software de gerenciamento de sugestões geradas a partir do Smart Assortment. Atuei em uma equipe ágil, trabalhando no desenvolvimento e manutenção do software. Além disso, desempenhei o papel de referência técnica em front-end e forneci apoio diário às equipes responsáveis por criar e validar Pull Requests (PRs).

                  Durante o desenvolvimento, utilizei RTL e Jest para garantir uma cobertura de testes de 80%. Mantive um alto padrão de qualidade nos testes e assegurei que a maioria dos cenários estivesse coberta.`}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex gap={4}>
          <Box flexShrink={0}>
            <Image
              width={40}
              height={40}
              src="https://media.licdn.com/dms/image/C4D0BAQE2MwR_Ma-kDg/company-logo_100_100/0/1675263611948?e=1698883200&v=beta&t=Ad2EJmWMgTrUA_o4cymQjVhbHgQZhNYygLYMRO6b5QE"
              alt="Brisanet Telecomunicações"
            />
          </Box>
          <Flex flexDir="column">
            {/*  HEADER GROUP EXPERIENCES */}
            <Flex flexDirection="column">
              <Text fontWeight="semibold">Brisanet Telecomunicações</Text>
              <Text fontWeight="normal" fontSize="sm">
                Tempo integral • 3 a 2 m
              </Text>

              <Flex fontSize="sm" fontWeight="thin" color="gray.200">
                <Text>Presencial</Text>
              </Flex>
            </Flex>

            <Flex flexDirection="column" position="relative" paddingTop={4}>
              <Box
                position="absolute"
                display="flex"
                justifyContent="center"
                w={2}
                height={2}
                background="gray.600"
                left="calc(calc(20px + 1rem) * -1)"
                transform="translateX(-50%)"
                top="37px"
                borderRadius="full"
              ></Box>

              <Flex
                paddingY={4}
                flexDirection="column"
                _before={{
                  content: `""`,
                  position: 'absolute',
                  width: '2px',
                  height: 'calc(100% - 25px)',
                  bg: 'gray.600',
                  left: 'calc(calc(20px + 1rem) * -1)',
                  transform: 'translateX(-50%)',
                  top: '55px'
                }}
              >
                <Text fontWeight="semibold">Frontend Júnior II</Text>

                <Flex
                  flexDir="column"
                  fontSize="sm"
                  fontWeight="thin"
                  color="gray.200"
                >
                  <Text>set de 2021 - set de 2022 · 1 a 1 m</Text>
                  <Text>Pereiro, Ceará, Brasil</Text>
                </Flex>
              </Flex>

              <ExpandableText
                noOfLines={2}
                textContent={`Fui responsável pelo desenvolvimento de componentes e páginas do principal CRM da empresa utilizando Angular e Ant Design. Todos os componentes foram testados utilizando Jest.`}
              />
            </Flex>

            <Flex flexDirection="column" position="relative" paddingY={4}>
              <Box
                position="absolute"
                display="flex"
                justifyContent="center"
                w={2}
                height={2}
                background="gray.600"
                left="calc(calc(20px + 1rem) * -1)"
                transform="translateX(-50%)"
                top="37px"
                borderRadius="full"
              ></Box>

              <Flex paddingY={4} flexDirection="column">
                <Text fontWeight="semibold">Frontend Júnior I</Text>

                <Flex
                  flexDir="column"
                  fontSize="sm"
                  fontWeight="thin"
                  color="gray.200"
                >
                  <Text>ago de 2019 - set de 2022 · 2 a 2 m</Text>
                  <Text>Pereiro, Ceará, Brasil</Text>
                </Flex>
              </Flex>

              <ExpandableText
                noOfLines={2}
                textContent={`Fui responsável pelo desenvolvimento completo de um SPA utilizando AngularJS no frontend e PHP no backend para as principais regras de negócio do sistema. Também implementei um sistema de notificação em tempo real utilizando NodeJS e Websocket. Nesse sistema, foi possível gerenciar uma base de clientes para realizar pesquisas de satisfação para a maior empresa de telecomunicações do Nordeste do Brasil.

                A implementação desse sistema foi fundamental para reduzir a dependência de planilhas, consequentemente diminuindo o trabalho manual e a quantidade de erros nos processos. Após a implementação bem-sucedida desse sistema, a empresa obteve o selo RA1000 do Reclame AQUI, o que comprova a qualidade do serviço prestado.`}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex gap={4}>
          <Box flexShrink={0}>
            <Image
              width={40}
              height={40}
              src="https://media.licdn.com/dms/image/C510BAQFeE9WQPo4hOg/company-logo_100_100/0/1519882731101?e=1698883200&v=beta&t=7hqL6JS00c_pXMxxHsCX8noaL82awmvc0BYCda2V2AQ"
              alt="EVOCORP"
            />
          </Box>
          <Flex flexDir="column">
            {/*  HEADER GROUP EXPERIENCES */}
            <Flex flexDirection="column">
              <Text fontWeight="semibold">EVOCORP</Text>
              <Text fontWeight="normal" fontSize="sm">
                Estágio • 5 m
              </Text>

              <Flex fontSize="sm" fontWeight="thin" color="gray.200">
                <Text>Presencial</Text>
              </Flex>
            </Flex>

            <Flex flexDirection="column" position="relative" paddingTop={4}>
              <Flex paddingY={4} flexDirection="column">
                <Text fontWeight="semibold">Trainee</Text>

                <Flex
                  flexDir="column"
                  fontSize="sm"
                  fontWeight="thin"
                  color="gray.200"
                >
                  <Text>ago de 2018 - dez de 2018 · 5 m</Text>
                  <Text>São Miguel, Rio Grande do Norte, Brasil</Text>
                </Flex>
              </Flex>

              <ExpandableText
                noOfLines={1}
                textContent={`Realizei um estágio na EVOCORP, uma empresa de consultoria e assessoria empresarial, onde tive minha primeira experiência com o React. Além de trabalhar no desenvolvimento frontend, também fui responsável pelo design da nova plataforma de comércio eletrônico básico para aprimorar meu conhecimento em React e SEO.`}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
