import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbNjsj from '../public/images/works/njsj.jpeg';
import thumbViva from '../public/images/works/vivaworkers.jpeg';
import thumbWyr from '../public/images/works/wyr.png';
import thumbMyRead from '../public/images/works/myreads.png';

const Works = () => (
  <Layout title='Works'>
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id='njsj'
            title='Namibia Journal for Social Justice'
            thumbnail={thumbNjsj}
          >
            Web application created for Namibia&apos;s Social Justice Journal.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id='vivaworkers'
            title='Viva Workers'
            thumbnail={thumbViva}
          >
            Web appplication for the writer of viva workers
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id='wyr' title='Would You Rather' thumbnail={thumbWyr}>
            An application that allows users to answer would you rather
            questions, it also gives the users the ability to create polls that
            other user can then answer.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id='myreads' thumbnail={thumbMyRead} title='My Reads'>
            This a bookshelf application that organizes the user&apos;s books
            into shelves which are the books you are currently reading, you have
            read and want to read.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
