import {
  Box,
  Button,
  UnorderedList,
  useBreakpointValue,
  useDisclosure,
  Flex
} from '@chakra-ui/react'
import Image from 'next/image'

import { MenuItem } from './MenuItem'
import { List } from 'phosphor-react'
import { useCallback, useEffect } from 'react'

export function Header() {
  const isWebHeader = useBreakpointValue({
    base: false,
    lg: true
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCloseMenu = useCallback(() => {
    gtag('event', 'toggle_btn_menu', {
      event_label: 'Toggle Button Menu Mobile'
    })

    onClose()
  }, [onClose])

  const handleOpenMenu = () => {
    gtag('event', 'toggle_btn_menu', {
      event_label: 'Toggle Button Menu Mobile'
    })

    onOpen()
  }

  useEffect(() => {
    if (isWebHeader) {
      handleCloseMenu()
    }
  }, [isWebHeader, handleCloseMenu])

  return (
    <Flex
      w="100%"
      position="sticky"
      bg="Black"
      zIndex="sticky"
      top={0}
      minW="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW={1440}
        w="100%"
        height={100}
        display="flex"
        justifyContent="center"
        alignItems="center"
        as="header"
      >
        <Box
          paddingX={{
            base: 4,
            md: 10
          }}
          as="nav"
          w="100%"
          display="flex"
          justifyContent="space-between"
        >
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
              <MenuItem title="Inicio" to="s-home" />
              <MenuItem title="Quem sou" to="s-about" />
              <MenuItem title="Experiências" to="s-experience" />
              <MenuItem title="Projetos" to="s-projects" />
              <MenuItem title="Conhecimentos" to="s-skills" />
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
              onClick={isOpen ? handleCloseMenu : handleOpenMenu}
            >
              <List />
            </Button>
          )}
        </Box>

        {isOpen && (
          <UnorderedList
            flexDir="column"
            listStyleType="none"
            display="flex"
            gap={12}
            bg="Black"
            top={100}
            position="absolute"
            width="100%"
            margin={0}
            paddingX={4}
          >
            <MenuItem
              handleClick={handleCloseMenu}
              title="Inicio"
              to="s-home"
            />
            <MenuItem
              handleClick={handleCloseMenu}
              title="Quem sou"
              to="s-about"
            />
            <MenuItem
              handleClick={handleCloseMenu}
              title="Experiências"
              to="s-experience"
            />
            <MenuItem
              handleClick={handleCloseMenu}
              title="Projetos"
              to="s-projects"
            />
            <MenuItem
              handleClick={handleCloseMenu}
              title="Conhecimentos"
              to="s-skills"
            />
          </UnorderedList>
        )}
      </Box>
    </Flex>
  )
}
