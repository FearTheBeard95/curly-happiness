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
        Hi There, I&apos;m a front-end developer based in Namibia 🇳🇦 !
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
          Carlos is a front-end and freelance developer based in Windhoek with
          an itch for digitalizing and resolving Earth&apos;s issues through
          code. He spends most of his time on a keyboard learning and coding,
          when relaxing he plays a bunch of games (Team Xbox) and watches a lot
          of basketball. He is currently employed as a Software developer but he
          also makes a living on freelance projects. To work with him click the
          button below{' '}
        </Paragraph>
        <Box align='left' my={4}>
          <NextLink href='mailto:sibalatanics@outlook.com'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              Hire me
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Katima Mulilo, Namibia.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Completed the Bachelor&apos;s Program in the Graduate School of
          Computer Science at Namibia&apos;s university of science and
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
          Works as a freelance developer
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          CDC Employee at MOHSS Namibia
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          React Nano Degree (Udacity)
        </BioSection>

        <Box align='left' my={4}>
          <NextLink href='/Resume.pdf'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              My resume
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
