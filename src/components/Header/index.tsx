import {
  Box,
  Text,
  Button,
  UnorderedList,
  useBreakpointValue
} from '@chakra-ui/react'
import Image from 'next/image'

import { MenuItem } from './MenuItem'
import { List } from 'phosphor-react'

export function Header() {
  const isWebHeader = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box
      maxW={1440}
      w="100%"
      height={100}
      display="flex"
      justifyContent="center"
      alignItems="center"
      as="header"
    >
      <Box as="nav" w="100%" display="flex" justifyContent="space-between">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={150}
          maxW={150}
          h={30}
          maxH={30}
        >
          <Image
            priority
            src="/assets/logo.svg"
            style={{
              objectFit: 'cover'
            }}
            alt="Mauricio Aires"
            width={150}
            height={30}
          />
        </Box>

        {isWebHeader && (
          <UnorderedList listStyleType="none" display="flex" gap={12}>
            <MenuItem title="Inicio" />
            <MenuItem title="Quem sou" />
            <MenuItem title="Experiências" />
            <MenuItem title="Projetos" />
            <MenuItem title="Serviços" />
            <MenuItem title="Conhecimentos" />
          </UnorderedList>
        )}

        {!isWebHeader && (
          <Button
            fontSize={{
              base: '2xl'
            }}
            bg="transparent"
            _hover={{
              bg: 'gray.800'
            }}
          >
            <List />
          </Button>
        )}
      </Box>
    </Box>
  )
}
