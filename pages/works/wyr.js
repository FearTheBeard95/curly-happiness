import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title='Would You Rather'>
    <Container>
      <Title>
        Would You Rather <Badge>2021-</Badge>
      </Title>
      <P>
        <code>
          An application that allows users to answer would you rather questions,
          it also give the users the ability to create to polls that other users
          can then answer. It shows the results of each polls after the user
          answers a poll and displays a leaderboard to show who the champion of
          ask and answering polls is. The application was created using React.js
          and Redux.
        </code>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://would-u-rather-wa.herokuapp.com/'>
            https://would-u-rather-wa.herokuapp.com/{' '}
            <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href='https://github.com/FearTheBeard95/friendly-memory'>
            https://github.com/FearTheBeard95/friendly-memory{' '}
            <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux</span>
        </ListItem>
      </List>

      <WorkImage src='/images/works/wyr.png' alt='Inkdrop' />
      <WorkImage src='/images/works/wyr02.png' alt='Inkdrop' />
    </Container>
  </Layout>
);

export default Work;
