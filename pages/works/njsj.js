import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title='NJSJ'>
    <Container>
      <Title>
        NJSJ <Badge>2021-</Badge>
      </Title>
      <P>
        A web application created for Namibia&apos;s Social Justice Journal, the
        app allows the users to upload volumes with articles to the web app.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://namsocialjustice.org/'>
            https://namsocialjustice.org/ <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express, HTML,</span>
        </ListItem>
      </List>

      <WorkImage src='/images/works/njsj.jpeg' alt='NJSJ' />
      <WorkImage src='/images/works/njsj02.png' alt='NJSJ' />
    </Container>
  </Layout>
);

export default Work;
