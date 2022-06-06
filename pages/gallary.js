import Layout from '/layout/Layout.js'
import { client } from '../libs/client'

import {
  Container,
  Box,
  Stack,
  Image
} from '@chakra-ui/react'

export default function Gallary({ gallaryData }) {
  return (
    <Layout>
      <Container>

        <Box

          dipslay='flex'
        >
          { gallaryData.map((val) => (
            <Stack
              key={ val.id }
            >
              <Image
                src={ val.image.url }
                width={ val.image.width }
                height={ val.image.height }
              />
            </Stack>
          ))}
        </Box>

      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const gallary = await client.get({
    endpoint: 'gallary',
    queries: { limit: 9 }
  })

  return {
    props: {
      gallaryData: gallary.contents
    }
  }
}