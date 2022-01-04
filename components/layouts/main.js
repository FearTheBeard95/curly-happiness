import Head from 'next/head';
import NavBar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Carlos's homepage" />
        <meta name='author' content='Carlos Sibalatani' />
        <meta name='author' content='Carlos Sibalatani' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='/images/profile.jpeg' />
        <meta property='og:site_name' content="Carlos's Homepage" />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/images/profile.jpeg' />
        <title>Carlos Sibalatani - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        <br />
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
