import React, { useRef } from 'react'
import { Image, Box, Flex, Button } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, A11y } from 'swiper'
import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/right.svg'
import { ReactComponent as LeftWhite } from '../../assets/leftWhite.svg'
import { ReactComponent as RightWhite } from '../../assets/rightWhite.svg'
import { slides } from '../../constants'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


SwiperCore.use([Navigation, Autoplay, A11y])


export default ({ live }) => {
  const navPrevButton = useRef(null)
  const navNextButton = useRef(null)

  const onBeforeInit = (Swiper) => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation
      navigation.prevEl = navPrevButton.current
      navigation.nextEl = navNextButton.current
    }
  }
  return (
    <Flex direction="column">
      <Flex alignItems="space-between" mb="5">
        <Button
          w="full"
          borderRadius="none"
          h="full"
          ref={navPrevButton}
        >
          {!live ? <Left /> : <LeftWhite />}
        </Button>
        <Button
          w="full"
          borderRadius="none"
          h="full"
          ref={navNextButton}

        >
          {!live ? <Right /> : <RightWhite />}
        </Button>
      </Flex>
      <Flex justifyContent='center' alignItems="center">
        <Swiper
          onBeforeInit={onBeforeInit}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((src, i) =>
            <SwiperSlide key={i} >
              <Flex px="8" justifyContent="center" alignItems="center">
                <Box w="full" h={{ base: "150px", sm: "250px", md: "400px" }}  >
                  <Image src={src} />
                </Box>
              </Flex>
            </SwiperSlide>)}
        </Swiper >
      </Flex>
    </Flex>
  );
};
