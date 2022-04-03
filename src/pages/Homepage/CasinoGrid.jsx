import React from 'react'
import { Box, Image, Grid, Flex } from "@chakra-ui/react"
import { images } from '../../constants'



const CasinoGrid = ({ live }) => {
  return (
    <Flex px="8" my="8">
      {!live ? (<Grid templateColumns={{ base: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(5, 1fr)' }} gap={0}>
        {images.map((image, i) =>
          <Box border="1px solid gray" key={i}>
            <Image src={image} />
          </Box>)}
      </Grid>) :
        (<Grid templateColumns={{ base: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(5, 1fr)' }} gap={6}>
          {images.map((image, i) =>
            <Box border="1px solid gray" key={i}>
              <Image src={image} />
            </Box>)}
        </Grid>)}
    </Flex>
  )
}

export default CasinoGrid