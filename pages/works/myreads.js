import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title='MyReads'>
    <Container>
      <Title>
        MyReads <Badge>2021-</Badge>
      </Title>
      <P>
        <code>
          A bookshelf application that organizes the user&apos;s books into
          shelves which are the books you are currently reading, you have read ,
          and want to read. The application is written in React.js and uses an
          API for books provided by udacity.
        </code>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://my-reads-wa.herokuapp.com/'>
            https://my-reads-wa.herokuapp.com/ <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href='https://github.com/FearTheBeard95/myReadApp-udacity-project1'>
            https://github.com/FearTheBeard95/myReadApp-udacity-project1{' '}
            <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>

      <WorkImage src='/images/works/myreads.png' alt='Inkdrop' />
      <WorkImage src='/images/works/myreads02.png' alt='Inkdrop' />
    </Container>
  </Layout>
);

export default Work;
