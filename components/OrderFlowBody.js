import {
  Box,
  OrderedList,
  ListItem,
  Stack,
  Divider,
  Text
} from '@chakra-ui/react'

export default function OrderFlowBody() {

  const data = [
    { title:'注文受付', contents: 'オーダーフォームよりご注文をお願い致します。確認次第、メールまたは折り返しのお電話を致します。' },
    { title:'打ち合わせ', contents: '基本的にはZoomもしくはGoogleMeetにて事前打ち合わせを行います。神戸阪神間ですと対面での打ち合わせも可能です。ラフやイメージがある場合はこの時に提案して下さい。' },
    { title:'制作', contents: '頂いた案や制作されている楽曲をもとにラフ制作をし、ベクターデータに落とし込みます。納期は約１週間程度を見積もっています。' },
    { title:'確認・修正', contents: '出来上がったデザインをご確認いただきます。微修正を何度か行いますが、当初の予定より大幅に変更される場合は追加料金がかかる場合があります。' },
    { title:'入稿', contents: '印刷物の場合は印刷会社に入稿します。品数や納期によって値段が変わってきますので、事前打ち合わせにて取り決めを行います。' },
    { title:'完成', contents: '完成したデータはメールにて送付致します。pdf/jpgを予定していますが、他のファイル形式が必要な場合はお申し付けください。' }
  ]

  return (
    <>

      { data.map( (val, i) => (

        <Stack direction='row' h='100%' py={5} key={i}>
          <Text
            fontSize='2.5rem'
            color='RGBA(0, 0, 0, 0.48)'
          >{ 'F0' + i }</Text>
          <Divider size='1rem' orientation='vertical' />
          <Box>
            <Text
              fontWeight='bold'
              pb='.25rem'
            >{ val.title }</Text>
            <Text>{ val.contents }</Text>
          </Box>
        </Stack>

      ))}

    </>
  )
}