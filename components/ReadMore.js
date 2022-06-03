import Link from 'next/link'
import { Box } from '@chakra-ui/react'

export default function ReadMore({arg}) {
  return (
    <Box
      py='1rem'
      align='end'
    >
      <Link href={'/' + arg}>
        もっと見る&nbsp;⇒
      </Link>
    </Box>
  )
}