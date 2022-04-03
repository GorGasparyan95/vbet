import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useLocalStorage } from "../../hooks"
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


const ModalForm = ({ isOpen, onClose, onOpenLogin }) => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { put, get } = useLocalStorage()
  const { t } = useTranslation()
  const [user] = useState(get("users") || [])
  const toast = useToast()

  const submit = (data) => {
    setLoading(true)
    if (user.length === 0) {
      user.push(data)
      put("users", user)
      onClose()
      onOpenLogin()
    } else if (user.filter((item) => item.email === data.email).length > 0) {
      toast({
        title: "an email is already registered",
        status: 'error',
        duration: 2000,
        position: 'bottom',
      })
    } else {
      user.push(data)
      put("users", user)
      onClose()
      onOpenLogin()
    }
    setLoading(false)
    reset()
  }



  return (
    <>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#2A4365">
          <ModalHeader color='white'>{t("register")}</ModalHeader>
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
                  placeholder={t("name")}
                  isInvalid={!!errors.name}
                  {...register("name", { required: true })}
                  color="white" />
                <Input
                  color="white"
                  placeholder={t("surname")}
                  isInvalid={!!errors.surname}
                  {...register("surname", { required: true })} />
                <Input
                  color="white"
                  placeholder={t("age")}
                  isInvalid={!!errors.age}
                  {...register("age", { required: true, valueAsNumber: true, })}
                  type="number"
                  pattern="[0-9]*" />
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
                    {t("signup")}
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

export default ModalForm;
