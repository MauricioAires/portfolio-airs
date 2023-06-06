import {
  Box,
  Flex,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import Image from 'next/image'

export function Header() {
  return (
    <Box
      maxW={1440}
      w="100%"
      height={100}
      display="flex"
      justifyContent="center"
      alignItems="center"
      as="header"
      margin={4}
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
        <UnorderedList listStyleType="none" display="flex" gap={12}>
          <ListItem
            fontSize={'lg'}
            color="whiteAlpha.700"
            _hover={{
              color: 'white'
            }}
          >
            <Link>Inicio</Link>
          </ListItem>
          <ListItem
            fontSize={'lg'}
            color="whiteAlpha.700"
            _hover={{
              color: 'white'
            }}
          >
            <Link>Quem sou</Link>
          </ListItem>
          <ListItem
            fontSize={'lg'}
            color="whiteAlpha.700"
            _hover={{
              color: 'white'
            }}
          >
            <Link>Experiências</Link>
          </ListItem>
          <ListItem
            fontSize={'lg'}
            color="whiteAlpha.700"
            _hover={{
              color: 'white'
            }}
          >
            <Link>Projetos</Link>
          </ListItem>
          <ListItem
            fontSize={'lg'}
            color="whiteAlpha.700"
            _hover={{
              color: 'white'
            }}
          >
            <Link>Serviços</Link>
          </ListItem>
          <ListItem
            fontSize={'lg'}
            color="whiteAlpha.700"
            _hover={{
              color: 'white'
            }}
          >
            <Link>Conhecimentos</Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  )
}
