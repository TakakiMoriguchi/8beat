import Layout from '../layout/Layout.js'
import { client } from '../libs/client'

import Image from 'next/image'
import NextLink from 'next/link'

import SectionTitle from '/components/SectionTitle'
import AboutBody from '/components/AboutBody'
import PriceBody from '/components/PriceBody'
import GallaryBody from '/components/GallaryBody'
import OrderFlowBody from '/components/OrderFlowBody'
import ReadMore from '/components/ReadMore'

import {
  Container,
  Button,
  OrderedList,
  ListItem,
} from '@chakra-ui/react'

export default function Home({ gallaryData }) {
  return (
    <Layout parent>

      {/* About */}
      <Container>
        <SectionTitle arg='ABOUT' />
        <AboutBody />
      </Container>

      {/* Gallary */}
      <Container>
        <SectionTitle arg='GALLARY' />
      </Container>
        <GallaryBody props={gallaryData} />
      <Container>
        <ReadMore arg='gallary/page/1' />
      </Container>

      {/* Price */}
      <Container>
        <SectionTitle arg='PRICE' />
        <PriceBody />
        <ReadMore arg='price' />
      </Container>

      {/* OrderFlow */}
      <Container>
        <SectionTitle arg='ORDER&nbsp;FLOW' />
        <OrderFlowBody />
      </Container>

      {/* Button */}
      <Container align='center' p='2rem'>
        <NextLink href='/form' passHref>
          <Button
            colorScheme='grey'
            variant='outline'
          >お問合せ</Button>
        </NextLink>
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