import Head from "next/head"
import Image from 'next/image'
import Link from "next/link"

// Components
import ParentHeader from "/components/ParentHeader"
import ChildHeader from "/components/ChildHeader"

// Chakra
import {
  Container,
  Box,
  Text
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
        bg='RGBA(0, 0, 0, .64)'
        color='white'
        w='100%'
        position="absolute"
        bottom='0'
      >
        <Container
          py='3rem'
        >

          <Box py='1rem'>
            運営会社：エンターサイト<br />
            〒650-0033 兵庫県神戸市中央区江戸町104
          </Box>

          <Box py='1rem'>
            <Text>支払い方法</Text>
            <Image src={'/images/card_brand/master.png'} width={56} height={56} />
            <Image src={'/images/card_brand/visa.png'} width={56} height={56} />
            <Image src={'/images/card_brand/amex.png'} width={56} height={56} />
          </Box>

        </Container>
      </Box>

    </Box>
  );
}

export default Layout;