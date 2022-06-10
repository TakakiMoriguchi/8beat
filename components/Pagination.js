import Router from 'next/router'
import Link from 'next/link'

import {
  Container,
  HStack,
  Box,
  Text
} from '@chakra-ui/react'

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 9
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <Container p='1rem'>

      <HStack justify='center'>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <Box
            key={index}
            spacing='.5rem'
          >
            <Link href={ `/gallary/page/${number}`}>
              <Text
                color='white'
                bg='RGBA(0, 0, 0, 0.64)'
                p='.5rem'
                borderRadius={3}
                _hover={{ bg: 'RGBA(0, 0, 0, 0.24)', color: 'black', cursor: 'pointer' }}
              >{number}</Text>
            </Link>
          </Box>
        ))}
      </HStack>

    </Container>
  )
}

/*
  pagination
  https://blog.microcms.io/next-pagination/
*/