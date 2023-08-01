import { BoxProps, Flex } from '@chakra-ui/react'
import { Box, Button, Text } from '@chakra-ui/react'
import React, { forwardRef, useLayoutEffect, useState } from 'react'

interface Props extends BoxProps {
  textContent: React.ReactNode
  noOfLines: number
}

export const ExpandableText = forwardRef<HTMLDivElement, Props>(
  ({ textContent, noOfLines, ...rest }, ref) => {
    const [expandedCount, setExpandedCount] = useState<number | undefined>(
      noOfLines
    )
    const [isClicked, setIsClicked] = useState(false)
    const handleToggle = () => {
      setIsClicked(true)
      setExpandedCount(expandedCount ? undefined : noOfLines)
    }
    const [isTextClamped, setIsTextClamped] = useState(false)

    const inputRef = React.useRef<HTMLInputElement>(null)

    useLayoutEffect(() => {
      let textClamped = false
      if (inputRef.current && inputRef.current.clientHeight) {
        textClamped =
          (inputRef.current?.scrollHeight as number) >
            (inputRef.current?.clientHeight as number) || isClicked
        setIsTextClamped(textClamped)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setIsTextClamped])

    return (
      <Box ref={ref} {...rest}>
        <Box ref={inputRef} noOfLines={expandedCount}>
          {textContent}
        </Box>
        <Flex>
          <Button
            display={isTextClamped ? 'block' : 'none'}
            size="sm"
            variant="link"
            onClick={handleToggle}
            mt="2"
          >
            <Text>{!expandedCount ? 'ver menos' : 'ver mais'}</Text>
          </Button>
        </Flex>
      </Box>
    )
  }
)

ExpandableText.displayName = 'ExpandableText'
