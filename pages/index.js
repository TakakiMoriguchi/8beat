import Layout from '../layout/Layout.js'
import Image from 'next/image'
import NextLink from 'next/link'

import SectionTitle from '/components/SectionTitle'
import OrderFlowBody from '/components/OrderFlowBody'

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
        <p>
          We are Glowing up now<br />
          stage1: support Graphic & Web site<br />
          stage2: create indies community<br />
          stage3: Live Streaming Service
        </p>
      </Container>

      {/* Gallary */}
      <Container>
        <SectionTitle arg='GALLARY' />
        <Image
          src="/images/sample_logo.jpg"
          width={150}
          height={150}
        />
      </Container>

      {/* Price */}
      <Container>
        <SectionTitle arg='PRICE' />
        <table>
          <tbody>
            <tr>
              <td>
                バンドロゴ制作<br />
                バンド活動において一番必要となるロゴ（文字）を作成します。<br />
                元イメージがある場合は￥5,000割引・修正２回迄・パターン出し１案につき＋￥10,000
              </td>
              <td>
                ￥20,000 / 1w
              </td>
            </tr>
            <tr>
              <td>
                バンドシンボル制作<br />
                バンド活動において一番必要となるシンボル（絵）を作成します。<br />
                元イメージがある場合は￥5,000割引・修正２回迄・パターン出し１案につき＋￥10,000。
              </td>
              <td>
                ￥20,000 / 1w
              </td>
            </tr>
            <tr>
              <td>
                フライヤー制作<br />
                企画ライブなどに使用するフライヤーを制作致します。
              </td>
              <td>
                ￥30,000 / 1w
              </td>
            </tr>
            <tr>
              <td>
                ミニアルバムジャケットデザイン<br />
                スリムCD用の面裏１枚のジャケットを制作致します。（参考イメージ⇨）<br />
                価格を抑えてCDを制作したい方におすすめ。
              </td>
              <td>
                ￥20,000 / 1w
              </td>
            </tr>
            <tr>
              <td>
                フルアルバムジャケットデザイン<br />
                フルアルバム用のジャケットを制作致します。<br />
                ページ数や折り方など自由にお決めください。
              </td>
              <td>
                ￥ASK / 1m
              </td>
            </tr>
            <tr>
              <td>
                タペストリー制作<br />
                バンドロゴやイメージを全面にプリントした垂れ幕を制作します
              </td>
              <td>
                ￥ASK / 1w
              </td>
            </tr>
            <tr>
              <td>
                ノベルティグッズ制作<br />
                キーホルダー・スマホケース・Tシャツなどを制作致します。
              </td>
              <td>
                ￥ASK / 1w
              </td>
            </tr>
          </tbody>
        </table>
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
