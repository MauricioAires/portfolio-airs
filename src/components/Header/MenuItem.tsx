import { ListItem } from '@chakra-ui/react'
import { Link } from 'react-scroll'

interface MenuItemProps {
  title: string
  to: string
  handleClick?: () => void
}

export function MenuItem({ title, to, handleClick }: MenuItemProps) {
  const handleClickMenuItem = () => {
    gtag('event', 'toggle_menu', {
      event_label: 'Toggle Menu',
      event_category: to
    })

    handleClick && handleClick()
  }

  return (
    <Link
      activeClass="active"
      to={to}
      offset={-100}
      smooth={true}
      duration={1000}
      onClick={() => handleClickMenuItem()}
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
