import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <code>
          Hi There, I&apos;m a front-end developer based in Namibia 🇳🇦 !
        </code>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Carlos Sibalatani
          </Heading>
          <p>Developer ( React / Node.js / Mongo )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        >
          <Image
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='100px'
            display='inline-block'
            borderRadius='full'
            src='/images/profile.jpeg'
            alt='Profile image'
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          About me
        </Heading>
        <Paragraph>
          <code>
            Carlos is a front-end and freelance developer based in Windhoek with
            an itch for digitalzing and resolving Earth&apos;s issues through
            code. He spends most of his type on a keyboard learning and coding,
            when relaxing he plays bunch of games (Team Xbox) and watches a alot
            of baskball. He is currently employed as Software developer but he
            makes a living of freelance projects. To work with him click the
            button below{' '}
          </code>
        </Paragraph>
        <Box align='left' my={4}>
          <NextLink href='/works'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              <code>My portfolio</code>
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <code>
          <Heading as='h3' variant='section-title'>
            <code>Bio</code>
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Katima Mulilo, Namibia.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Completed the Bachelor&apos;s Program in the Graduate School of
            Computer Science at Namibia&apos;s university if science and
            technology (Best student)
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked at Elev8
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked at SILNAM IT Solutions
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Works as a freelance
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            CDC Employee at MOHSS Namibia
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            React Nano Degree (Udacity)
          </BioSection>
        </code>
        <Box align='left' my={4}>
          <NextLink href='/Resume.pdf'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              <code>My resume</code>
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          My Stack 🚀
        </Heading>
        <Paragraph>Mongo | Express | React.js | Node.js </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/FearTheBeard95' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @FearTheBeard95
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href='https://www.linkedin.com/in/carlos-sibalatani-106963160/'
              target='_blank'
            >
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Carlos Sibalatani
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href='https://www.instagram.com/fearthebeard_95/'
              target='_blank'
            >
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @FearTheBeard_95
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
