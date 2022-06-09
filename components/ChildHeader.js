import "@fontsource/righteous"
import NextLink from 'next/link'

import {
  Flex,
  Box,
  Container,
  Text,
  Spacer
} from '@chakra-ui/react'

export default function ChildHeader() {
  return (
    <>
      <Flex
        bg='RGBA(0, 0, 0, .64)'
        color='white'
        w='100%'
        p={2}
      >

        <Container maxW='container.lg'>
          <Box>
            <NextLink href='/'>
              <Text
                fontFamily='"Righteous", cursive'
                fontSize={32}
                _hover={{ color: '#76E4F7', cursor: 'pointer' }}
              >
                8beat
              </Text>
            </NextLink>
          </Box>

          <Box>
          </Box>
        </Container>
      </Flex>
    </>
  )
}