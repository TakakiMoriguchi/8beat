import Layout from '../layout/Layout.js'
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

export default function Home() {
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
        <GallaryBody />
        <ReadMore arg='gallary' />
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
