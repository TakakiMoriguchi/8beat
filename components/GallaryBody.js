import React, { useEffect, useState } from 'react'

import {
  Box,
  Stack,
  Image,
  Text
} from '@chakra-ui/react'

export default function GallaryBody({ props }) {
  return (
    <Box>

      <Box
        className='loop_wrap'
        display="flex"
        overflow="hidden"
        width="100%"
      >
        <ul>
          {props.map((val) => (
            <li key={ val.id }>
              <Image
                src={ val.image.url }
                width='200px'
                height='200px'
              />
            </li>
          ))}
        </ul>
        <ul>
          {props.map((val) => (
            <li key={ val.id } >
              <Image
                src={ val.image.url }
                width='200px'
                height='200px'
              />
            </li>
          ))}
        </ul>
      </Box>

    </Box>
  )
}

/* tips
  css animation
  https://chocolat5.com/tips/loop-image-animation/
*/