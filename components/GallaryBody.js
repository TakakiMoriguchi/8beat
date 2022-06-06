import React, { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  Image,
  Text
} from '@chakra-ui/react'


export default function GallaryBody({ props }) {

  // clientWidth
  const [ clientWidth, setClientWidth ] = useState()
  const getWidth = () => {
    setClientWidth = document.body.clientWidth * .8
  }
  useEffect(getWidth, [])

  return (
    <Box
      overflow='hidden'
      width={ clientWidth }
    >

      <Stack
        direction='row'
      >
        {props.map((val) => (
          <>
            <Image
              src={ val.image.url }
              width='200px'
              height='200px'
            ></Image>
            <Text>{ val.title }</Text>
          </>
        ))}
      </Stack>

    </Box>
  )
}