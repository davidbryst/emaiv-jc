import { Button, Container, Group, Image, Text, Title } from '@mantine/core';
import image from '../../../public/gg.png';
import classes from './hero.module.css';

export function About() {
  return (
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Qui somme <span className={classes.highlight}> nous </span> <br />
            </Title>
            <Text c="dimmed" mt="md">
              le cabinet conseil immigration & it emaiv-jc est l'interlocuteur qui vous accompagne dans la concrétisation de vos projets.
              vos aspirations sont une priorité pour nous.
              <br />
              ainsi, pour répondre à vos besoins, nous vous accompagnons en faisons preuve constante de professionnalisme jour après jour.
              nos valeurs
              <br />
            </Text>

            {/* <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>L'ECOUTE</b> – L'ECOUTE
Une oreille attentive, un rendu sur-mesure.
Nous vous écoutons attentivement afin de comprendre vos besoins. Nous vous proposons ainsi des solutions adéquates a chaque besoin exprimé.
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                keyboard
              </List.Item>
            </List> */}

            <Group mt={30}>
              {/* <Button radius="xl"  size="md" className={classes.control}>
                Voir nos services
              </Button> */}
              <Button
                variant="gradient"
                gradient={{ to: 'pink', from: 'yellow' }}
                size="xl"
                className={classes.control}
                mt={40}
              >                
                Voir nos services
              </Button>
              {/* <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button> */}
            </Group>
          </div>
          <Image h={400} src={image} className={classes.image} />
        </div>
      </Container>
  );
}