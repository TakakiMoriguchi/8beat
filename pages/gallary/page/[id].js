import Layout from '../../../layout/Layout.js'
import { client } from '../../../libs/client'
import { Pagination } from '../../../components/Pagination'

import {
  Container,
  Center,
  Grid,
  GridItem,
  Image,
  Text
} from '@chakra-ui/react'

const PER_PAGE = 9

export default function GallaryPageId({ gallaryData, totalCount }) {
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

        <Pagination totalCount={totalCount} />

      </Container>
    </Layout>
  )
}

// 動的なページ作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "gallary" });
  const pageNumbers = [];
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/gallary/page/${repo}`)

  return { paths, fallback: false }
};

// データ取得
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "gallary",
    queries: { offset: (id - 1) * 9, limit: 9 }
  })

  return {
    props: {
      gallaryData: data.contents,
      totalCount: data.totalCount,
    },
  };
};