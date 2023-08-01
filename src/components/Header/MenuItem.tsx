import { ListItem } from '@chakra-ui/react'
import { Link } from 'react-scroll'

interface MenuItemProps {
  title: string
  to: string
}

export function MenuItem({ title, to }: MenuItemProps) {
  const handleClick = () => {
    gtag('event', 'toggle_menu', {
      event_label: 'Toggle Menu',
      event_category: to
    })
  }

  return (
    <Link
      activeClass="active"
      to={to}
      offset={-100}
      smooth={true}
      duration={1000}
      onClick={() => handleClick()}
    >
      <ListItem
        fontSize={'lg'}
        color="whiteAlpha.700"
        _hover={{
          color: 'white'
        }}
      >
        {title}
      </ListItem>
    </Link>
  )
}
