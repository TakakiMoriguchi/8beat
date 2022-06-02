import Head from "next/head";
import Link from "next/link";

// Components
import ParentHeader from "/components/ParentHeader"
import ChildHeader from "/components/ChildHeader"

// Chakra
import {
  Container,
  Box
} from '@chakra-ui/react'

const title = '8beat - バンドマン御用達のサポートメディア'
const description = 'バンド活動におけるロゴ・CDジャケット・グッズ・HPに至るまでトータルでサポート致します。'

function Layout({ children, parent }) {
  return (
    <Box bg='RGBA(0, 0, 0, 0.04)'>

      <Head>
        <title>{ title }</title>
        <meta name="description" content={ description } />
      </Head>

      <header>
        { parent ? (
            <>
              {/* ParentLayout */}
              <ParentHeader />
            </>
          ) : (
            <>
              {/* ChildLayout */}
              <ChildHeader />
            </>
          )
        }
      </header>

      <main>
        { children }
      </main>

      <Box
        bg='RGBA(0, 0, 0, 0.64)'
        color='white'
        w='100%'
        position="relative"
        bottom='0'
      >
        <Container>
          運営会社：エンターサイト<br />
          〒650-0033 兵庫県神戸市中央区江戸町104
        </Container>
      </Box>

    </Box>
  );
}

export default Layout;