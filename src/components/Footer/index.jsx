import React from "react"
import { Flex, Box, Image, Grid } from '@chakra-ui/react'
import { logos } from "../../constants"

const Footer = () => {
  return (
    <Flex w="full" bg="#1A365D" p="8" justifyContent="center">
      <Grid
        templateColumns='repeat(5, 1fr)'
        gap={10}>
        {logos.map((logo, i) =>
          <Box key={i}>
            <Image h={{ base: "40px", sm: "100px" }} w={{ base: "40px", sm: "120px" }} src={logo} />
          </Box>)}
      </Grid>
    </Flex>
  )
}

export default Footer