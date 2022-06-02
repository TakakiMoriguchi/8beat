import {
  Box,
  OrderedList,
  ListItem,
  Text
} from '@chakra-ui/react'

export default function OrderFlowBody() {

  const data = [
    { title:'注文受付', contents: 'オーダーフォームよりご注文をお願い致します。確認次第折り返しのお電話を致します。' },
    { title:'打ち合わせ', contents: '基本的にはZoomもしくはGoogleMeetにて打ち合わせを行います。神戸阪神間ですと対面での打ち合わせも可能です。' },
    { title:'制作', contents: 'ラフ制作をし、ベクターデータに落とし込みます。' },
    { title:'確認・修正', contents: '出来上がったデザインをご確認いただきます。微修正を何度か行いますが、当初の予定より大幅に変更される場合は追加料金がかかる場合があります。' },
    { title:'入稿', content: '印刷物の場合は入稿' },
    { title:'完成', contents: '' },
  ]

  return (
    <>

      { data.map( (val, i) => (

        <Box
          display='flex'
        >
          <Box
            p='1rem'
            fontSize='3rem'
            color='RGBA(0, 0, 0, 0.48)'
          >
            { 'F0' + i }
          </Box>
       		<Box>
            <Text>{ val.title }</Text>
            <Text>{ val.contents }</Text>
          </Box>
        </Box>

      ))}

      {/* OrderFlowBody
      F01
      F02 */}

    </>
  )
}