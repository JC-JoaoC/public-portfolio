import { Text } from '@chakra-ui/react'

export const PromptBreadcrumb = () => {
  return (
    <>
    <br />
      <Text as="span" fontWeight={""} color="#f8f8f2">Portfólio Terminal </Text> <br />
      <Text as="span" fontWeight={"bold"} color="#f8f8f2">João Carlos © | Todos os direitos reservados. </Text> <br />
      {/* #f1fa8c #f8f8f2 #8be9fd */}
    </>
  )
}

export const PromptResult = ({ promptResult }) => {
  return (
    <div
      style={{ color: "#f8f8f2" }}
      dangerouslySetInnerHTML={{ __html: promptResult }}
    />
  )
}