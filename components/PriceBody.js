import {
  Table,
  Tbody,
  Tr,
  Td,
  Heading,
  Text
} from '@chakra-ui/react'

export default function PriceBody() {

  const list = [
    { name: 'バンドロゴ制作', discription: 'バンド活動において一番必要となるロゴ（文字）を作成します。<br />元イメージがある場合は￥5,000割引・修正２回迄・パターン出し１案につき＋￥10,000', price: '20,000', delibary: '1w' },
    { name: 'バンドシンボル制作', discription: 'シンボル（紋章）を作成します。<br />元イメージがある場合は￥5,000割引・修正２回迄・パターン出し１案につき＋￥10,000。ロゴも同時制作の場合は￥10,000割引します。', price: '20,000', delibary: '1w' },
    { name: 'ミニアルバムジャケットデザイン', discription: 'スリムCD用の面裏１枚のジャケットを制作致します。（参考イメージ⇨）<br />価格を抑えてCDを制作したい方におすすめ。', price: '30,000', delibary: '2w' },
    { name: 'タペストリー制作', discription: 'バンドロゴやイメージを全面にプリントした垂れ幕を制作します', price: 'ASK', delibary: '-' },
    { name: 'ノベルティグッズ制作', discription: 'キーホルダー・スマホケース・Tシャツなどを制作致します。', price: 'ASK', delibary: '-' },
  ]

  return (
    <>

      <Table>
        <Tbody>

          { list.map((val, i) =>
            <Tr key={i} >
              <Td>
                <Heading as='h4' size='sm'>{ val.name }</Heading>
                <Text dangerouslySetInnerHTML={{ __html: val.discription }} />
              </Td>
              <Td>
                <Text>{ '￥' + val.price }</Text>
                <Text align='end'>{ val.delibary }</Text>
              </Td>
            </Tr>
          )}

       </Tbody>
      </Table>

    </>
  )
}