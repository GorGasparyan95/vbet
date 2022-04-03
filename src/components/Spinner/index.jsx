import React from "react"
import { Spinner, Flex } from "@chakra-ui/react"

const Download = () => {
  return (
    <Flex
      w="100wh"
      h="100vh"
      justifyContent="center"
      alignItems="center">
      <Spinner size='xl' />
    </Flex>
  )
}


export default Download