import "@fontsource/righteous"
import NextLink from 'next/link'

import {
  Box,
  Container,
  Text
} from '@chakra-ui/react'

export default function ChildHeader() {
  return (
    <>
      <Box bg='tomato' w='100%' p={2} color='white'>
        <Container>

          <NextLink href='/'>
            <Text
              fontFamily='"Righteous", cursive'
              fontSize={32}
            >
              8beat
            </Text>
          </NextLink>

        </Container>
      </Box>
    </>
  )
}