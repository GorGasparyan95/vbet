import React, { useEffect, useState } from 'react'
import i18next from 'i18next'
import { Flex, Button, Select, Image, useDisclosure } from '@chakra-ui/react'
import { useUser, useLocalStorage } from "../../hooks"
import { useTranslation } from "react-i18next"
import ModalForm from '../ModalRegister'
import ModalLogin from '../ModalLogin'
import i18n from '../../i18n'



const Navbar = () => {
  const [loading, setLoading] = useState(false)
  const { getLng } = useLocalStorage()
  const [Lng, setLng] = useState(getLng("i18nextLng"))
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { authUser, setUser } = useUser()

  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin } = useDisclosure()
  const { clear } = useLocalStorage()

  const signOut = () => {
    setLoading(true)
    clear("user")
    setUser()
    setLoading(false)
  }

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
    setLng(e.target.value)
  }

  useEffect(() => {
    if (getLng("i18nextLng")) {
      i18next.changeLanguage(getLng("i18nextLng"))
    }
  }, [])

  return (
    <Flex justifyContent="space-between" bg="#1A365D" w="full" h="60px">
      <ModalLogin
        isOpenLogin={isOpenLogin}
        onCloseLogin={onCloseLogin}
      />
      <ModalForm
        isOpen={isOpen}
        onClose={onClose}
        onOpenLogin={onOpenLogin} />
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Image w="250px" h="60px" src="assets/vivaro.png" /></Flex>
      <Flex justifyContent="center" alignItems="center" mr="5">
        {!authUser &&
          < Button
            onClick={onOpenLogin}
            variant="login"
            height={{ base: '20px', sm: '25px', md: "33px" }}
            width={{ base: "50px", sm: "75px", md: "100px" }}
            fontSize={{ base: "8px", sm: "12px", md: "14px" }}>
            {t("signin")}
          </Button>}
        {!authUser && <Button
          onClick={onOpen}
          height={{ base: '20px', sm: '25px', md: "33px" }}
          width={{ base: "50px", sm: "75px", md: "100px" }}
          fontSize={{ base: "8px", sm: "12px", md: "14px" }}
          variant="green">
          {t("register")}
        </Button>}
        {authUser &&
          <Button
            isLoading={loading}
            onClick={signOut}
            height={{ base: '20px', sm: '25px', md: "33px" }}
            width={{ base: "50px", sm: "75px", md: "100px" }}
            fontSize={{ base: "8px", sm: "12px", md: "14px" }}
            variant="green">
            {t("signout")}
          </Button>}
        <Select
          value={Lng}
          onChange={changeLanguage}
          height={{ base: '20px', sm: '25px', md: "33px" }}
          width={{ base: "65px", sm: "70px", md: "75px" }}
          fontSize={{ base: "8px", sm: "12px", md: "14px" }}
          borderColor='green.600'
          borderRadius={0}
          color="#E2E8F0"
          _focus={{
            boxShadow: 'none'
          }}
          mx="4"
        >
          <option value='en'>{t("en")}</option>
          <option value='hy'>{t("hy")}</option>
        </Select>
      </Flex>
    </Flex >

  )
}

export default Navbar