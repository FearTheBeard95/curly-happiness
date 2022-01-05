import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title='Viva Workers'>
    <Container>
      <Title>
        Viva Workers <Badge>2021-</Badge>
      </Title>
      <P>
        <code>
          A web application for the author of viva workers papers to upload
          their work.
        </code>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://www.vivaworkers.org/'>
            https://www.vivaworkers.org/ <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express, HTML</span>
        </ListItem>
      </List>

      <WorkImage src='/images/works/vivaworkers.jpeg' alt='vivaworkers' />
      <WorkImage src='/images/works/vivaworkers02.png' alt='vivaworkers' />
    </Container>
  </Layout>
);

export default Work;
