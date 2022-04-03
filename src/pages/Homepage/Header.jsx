import React from "react"
import { useTranslation } from "react-i18next"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, AspectRatio } from '@chakra-ui/react'
import Swiper from '../../components/Swiper'
import CasinoGrid from './CasinoGrid'



const Header = () => {
  const { t } = useTranslation()

  return (
    <Tabs isFitted isLazy >
      <TabList
        borderBottom={0}
        bg="#2C5282"
        color="white">
        <Tab
          borderBottom={0}
          _active={{ backgroundColor: 'transparent' }}
          _focus={{ outline: 'none' }}
          _selected={{
            bg: '#B83280',
            borderColor: '#B83280',
            fontWeight: 'bold',
          }}
        >
          {t('casino')}
        </Tab>
        <Tab
          borderBottom={0}
          _active={{ backgroundColor: 'transparent' }}
          _focus={{ outline: 'none' }}
          _selected={{
            bg: '#B83280',
            borderColor: '#B83280',
            fontWeight: 'bold',
          }}
        >
          {t("livecasino")}
        </Tab>
        <Tab
          borderBottom={0}
          _active={{ backgroundColor: 'transparent' }}
          _focus={{ outline: 'none' }}
          _selected={{
            bg: '#B83280',
            borderColor: '#B83280',
            fontWeight: 'bold',
          }}
        >
          {t("sport")}
        </Tab>
      </TabList>
      <TabPanels >
        <TabPanel p="0">
          <Box p="8">
            <Swiper />
            <CasinoGrid />
          </Box>
        </TabPanel>
        <TabPanel p="0">
          <Box bg="#1A365D" p="8">
            <Swiper live={true} />
            <CasinoGrid live={true} />
          </Box>
        </TabPanel>
        <TabPanel p="0">
          <Box><AspectRatio w="full" h="full" ratio={1}>
            <iframe
              title="liveScore"
              src='https://www.livescore.com/en/'
              allowFullScreen
            />
          </AspectRatio></Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Header