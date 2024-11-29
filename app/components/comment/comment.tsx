import { Avatar, Container, Group, Paper, SimpleGrid, Text, Title, TypographyStylesProvider } from '@mantine/core';
import classes from './comment.module.css';

const mockdata = [
    {
      image: '/public/realisation.jpg',
      text: '— Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, optio dicta. Totam vitae voluptatum consequuntur fugit sit, facere illum tempora culpa nulla enim mollitia quo maiores delectus doloremque aliquam eum. —',
      name: 'David abraham',
      info: 'Visa visiteur Canada',
    },
    {
      image: '/public/realisation.jpg',
      text: '— Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, optio dicta. Totam vitae voluptatum consequuntur fugit sit, facere illum tempora culpa nulla enim mollitia quo maiores delectus doloremque aliquam eum. —',
      name: 'David abraham',
      info: 'Visa visiteur Canada',
    },
    {
      image: '/public/realisation.jpg',
      text: '— Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, optio dicta. Totam vitae voluptatum consequuntur fugit sit, facere illum tempora culpa nulla enim mollitia quo maiores delectus doloremque aliquam eum. —',
      name: 'David abraham',
      info: 'Visa visiteur Canada',
    },
  ];                                                                            

export function Comment() {
  const comments = mockdata.map((comment, index) => (
    <Paper key={index} withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text fz="sm">{comment.name}</Text>
          <Text fz="xs" c="dimmed">
            {comment.info}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        {index == 1 ? <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
          }}
        /> : comment.text}
      </TypographyStylesProvider>
    </Paper>
  ));
  return (
    <div className={classes.bg}>
    <Container  py="xl" my={60}>
      <Title className={classes.title}>Nos Ne nous croyez pas sur parole.</Title>
      <SimpleGrid 
        mt={60}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
        cols={{ base: 1, sm: 2 }}>{comments}</SimpleGrid>
    </Container>
    </div>
  );
}