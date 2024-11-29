import { Card, Group, Image, SimpleGrid, Text, Container, Title } from '@mantine/core';
import classes from './realisation.module.css';

const mockdata = [
    {
      title: 'Colonie Tour Europe',
      image: '/public/realisation.jpg',
      pepole: 30,
      date: '07 mai 2023',
      dateFin: '10 juillet 2023',
    },
    {
      title: 'Colonie Tour Europe',
      image: '/public/realisation4.jpg',
      pepole: 30,
      date: '07 mai 2023',
      dateFin: '10 juillet 2023',
    },
    {
      title: 'Colonie Tour Europe',
      image: '/public/realisation2.jpg',
      pepole: 30,
      date: '07 mai 2023',
      dateFin: '10 juillet 2023',
    },
    {
      title: 'Colonie Tour Europe',
      image: '/public/realisation3.jpg',
      pepole: 30,
      date: '07 mai 2023',
      dateFin: '10 juillet 2023',
    },
  ];                                                                            
  


export function Realisation() {
  const cards = mockdata.map((article, index) => (
    <Card key={index} withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" align='flex-start'>
        <Image
          src={article.image}
          height={160}
        />
        <div className={classes.body}>
          <Text className={classes.title} tt="uppercase" c="dimmed" fw={700} size="xs">
            {article.pepole} personnes
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {article.title}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Text size="xs">{article.date}</Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {article.dateFin}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  ));
//   const cards = mockdata.map((article) => (
//     <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
//       <AspectRatio ratio={1920 / 1080}>
//         <Image src={article.image} />
//       </AspectRatio>
//       <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
//         {article.date}
//       </Text>
//       <Text className={classes.title} mt={5}>
//         {article.title}
//       </Text>
//     </Card>
//   ));

  return (
    <Container py="xl" mb={60} mt={60}>
      <Title className={classes.title}>Nos realisations.</Title>
      <SimpleGrid 
        mt={60}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
        cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}