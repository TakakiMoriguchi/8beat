import "@fontsource/righteous"

import {
  Box,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

export default function ParentHeader() {
  return (
    <>
      <Box
        bgImage="url('/images/hero.jpg')"
        bgPosition="bottom"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={["50vh", "50vh", "60vh", "70vh"]}
      >
        <Flex
          textAlign='center'
          justify='center'
          align='center'
          h='100%'
        >
          <Box>
            <Heading
              as='h1'
              size='4xl'
              fontFamily='"Righteous", cursive'
            >
              8beat
            </Heading>
            <Text>バンドマン御用達のサポートメディア</Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}