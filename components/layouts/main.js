import Head from 'next/head'
//import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
//import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rahul's Porfolio" />
        <meta name="author" content="Rahul Arepaka" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Rahul Arepaka Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Rahul Arepaka</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        

        {children}

      </Container>
    </Box>
  )
}

export default Main
