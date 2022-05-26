import Head from "next/head";
import Link from "next/link";

// Chakra
import {
  Container,
  Box
} from '@chakra-ui/react'

const title = '8beat - バンドマン御用達のサポートサイト'
const description = 'バンド活動におけるロゴ・CDジャケット・グッズ・HPに至るまでトータルでサポート致します。'

function Layout() {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ description } />
      </Head>
      <Container>
        <header>
          <Box className="jumbotron">
            <h1>8&nbsp;beat</h1>
            <h2>バンドマン御用達のサポートメディア</h2>
          </Box>
        </header>
      </Container>
    </div>
  );
}

export default Layout;