import { Link, ListItem } from '@chakra-ui/react'

interface MenuItemProps {
  title: string
}

export function MenuItem({ title }: MenuItemProps) {
  return (
    <ListItem
      fontSize={'lg'}
      color="whiteAlpha.700"
      _hover={{
        color: 'white'
      }}
    >
      <Link>{title}</Link>
    </ListItem>
  )
}
