import { Button, Container, Flex, Text, Title } from '@mantine/core';
import classes from './hero.module.css';

export function Hero() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
            Rejoignez-nous pour{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                explorer de nouveaux horizons
              </Text>{' '}
              malgré les obstacles
            </Title>

            <Text className={classes.description} mt={30}>
              {/* Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation */}
            </Text>

            <Flex gap="md">
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Prendre rende vous
              </Button>
              <Button
                variant="gradient"
                gradient={{ to: 'pink', from: 'yellow' }}
                size="xl"
                className={classes.control}
                mt={40}
              >                
                Voir nos services
              </Button>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
}