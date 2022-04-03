import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useLocalStorage, useUser } from "../../hooks"
import { useTranslation } from "react-i18next"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  Flex,
  Image,
  useToast
} from '@chakra-ui/react'

const ModalLogin = ({ isOpenLogin, onCloseLogin }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [loading, setLoading] = useState(false)
  const { put, get } = useLocalStorage()
  const { t } = useTranslation()
  const toast = useToast()
  const { setUser } = useUser()



  const submit = (data) => {
    setLoading(true)
    const authenticatedUser = get("users") && get("users").filter((item) => item.email === data.email && item.password === data.password)[0]
    if (authenticatedUser) {
      put("user", authenticatedUser.email)
      setUser(authenticatedUser)
      onCloseLogin()
    } else {

      toast({
        title: "an email or password is wrong",
        status: 'error',
        duration: 2000,
        position: 'bottom',
      })
    }
    setLoading(false)
    reset()
  }



  return (
    <>
      <Modal size="md" isOpen={isOpenLogin} onClose={onCloseLogin}>
        <ModalOverlay />
        <ModalContent bg="#2A4365">
          <ModalHeader color='white'>{t("login")}</ModalHeader>
          <Flex
            justifyContent="center"
            alignItems="center"
          >
            <Image w="250px" src="assets/vivaro.png" /></Flex>
          <ModalCloseButton color='white' />
          <ModalBody>
            <form noValidate onSubmit={handleSubmit(submit)}>
              <VStack spacing="8">
                <Input
                  color="white"
                  placeholder={t("email")}
                  isInvalid={!!errors.email}
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                />
                <Input
                  color="white"
                  placeholder={t("password")}
                  type="password"
                  isInvalid={!!errors.passswod}
                  {...register("password", { required: true })} />
                <Flex justifyContent="center" alignItems="center">
                  <Button color='white' type="submit" isLoading={loading} >
                    {t("signin")}
                  </Button>
                </Flex>
              </VStack>
            </form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalLogin;
