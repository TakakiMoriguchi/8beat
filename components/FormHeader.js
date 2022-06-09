import {
  Box,
  Heading
} from '@chakra-ui/react'

export default function FormHeader() {
  return(
    <>
      <Box
        bgImage="url('/images/contact_bg.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        minH="15rem"
        borderLeftRadius="10"
        mb={5}
        color="white"
        p={5}
        display="flex"
        alignItems="flex-end"
      >
        <Heading size="md">
          お問合せフォーム
        </Heading>
      </Box>
    </>
  )
}