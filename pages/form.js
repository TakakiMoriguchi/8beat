import Layout from '../layout/Layout.js'
import Link from 'next/link';

import { useForm, ValidationError } from '@formspree/react'
import FormHeader from '/components/FormHeader'

import {
  Container,
  Box,
  FormLabel,
  Input,
  Button,
  Textarea,
  Alert,
  AlertIcon,
  Text
} from '@chakra-ui/react'

export default function Form() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE)

  if (state.succeeded) {
    return (
      <Layout>
        <Container>
          <FormHeader />

          <Alert
            status='success'
            mb={5}
          >
            <AlertIcon />
            <Text>お問合せありがとうございます！</Text>
          </Alert>
          <Box align="right">
            <Link href="/">
              <Text _hover={{ color: '#3182CE', cursor: 'pointer' }}>
                トップページへ
              </Text>
            </Link>
          </Box>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>

        <FormHeader />
        <form onSubmit={handleSubmit}>

          <Box pb={5}>
            <FormLabel>名前</FormLabel>
            <Input
              id="name"
              name="name"
            />
          </Box>

          <Box pb={5}>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
            />
          </Box>

          <Box pb={5}>
            <FormLabel>お問合せ内容</FormLabel>
            <Textarea
              id="contents"
              name="contents"
            />
          </Box>

          <Box align='right'>
            <Button
              colorScheme='blue'
              type="submit"
              disabled={state.submitting}
            >送信</Button>
          </Box>

          <ValidationError
            errors={state.errors}
          />

        </form>
      </Container>
    </Layout>
  )
}