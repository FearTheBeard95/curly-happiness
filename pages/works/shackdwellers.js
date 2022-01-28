import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title='Shack dwellers federation of Namibia'>
    <Container>
      <Title>
        Shack Dwellers Federation of Namibia <Badge>2022-</Badge>
      </Title>
      <P>
        <code>
          The Shack Dwellers Federation of Namibia (SDFN), is a community-based
          network of housing saving schemes, aiming to improve the living
          conditions of urban and rural poor, while promoting women’s
          participation. This is web application created for the federation to
          promote the work and documents to the pubic. this was developed using
          React.js and Next.js.
        </code>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://www.shackdwellersnamibia.com/partners'>
            https://www.shackdwellersnamibia.com/partners{' '}
            <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Node.js, Next.js</span>
        </ListItem>
      </List>

      <WorkImage src='/images/works/shackdwellers1.png' alt='shackdwellers' />
      <WorkImage src='/images/works/shackdwellers2.png' alt='shackdwellers' />
      <WorkImage src='/images/works/shackdwellers3.png' alt='shackdwellers' />
    </Container>
  </Layout>
);

export default Work;
