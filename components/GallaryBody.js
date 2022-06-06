import {
  Box,
  Stack,
  Image,
  Text
} from '@chakra-ui/react'

export default function GallaryBody({ props }) {



  return (
    <Box
      display='flex'
      overflow='hidden'
      width='100%'
    >

      {props.map((val) => (
        <Stack
          mr='1rem'
          key={ val.id }
        >
          <Image
            src={ val.image.url }
            width={200}
            height={200}
          />
          <Text>{ val.title }</Text>
        </Stack>
      ))}

    </Box>
  )
}