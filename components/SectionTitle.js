import {
  Box,
  Heading
} from '@chakra-ui/react'

export default function SectionTitle({ arg }) {
  return (
    <Box
      align='center'
      py={16}
    >
      <Heading
        as='h3'
        fontSize='2rem'
      >
        { arg }
      </Heading>
    </Box>
  )
}