import Layout from '/layout/Layout.js'
import { client } from '../libs/client'

import {
  Container,
  Box,
  Stack,
  Center,
  Grid,
  GridItem,
  Image,
  Text
} from '@chakra-ui/react'

export default function Gallary({ gallaryData }) {
  return (
    <Layout>
      <Container>

        <Center>

          <Grid
            templateColumns='repeat(3, 1fr)'
            gap={6}
          >
            { gallaryData.map((val) => (
              <GridItem
                key={ val.id }
                maxWidth={ val.image.width }
                maxHeight={ val.image.height }
              >
                <Image
                  src={ val.image.url }
                />
                <Text>{ val.title }</Text>
              </GridItem>
            ))}
          </Grid>

        </Center>

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