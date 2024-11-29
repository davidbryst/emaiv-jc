import { Button, Container, Text, TextInput, Title } from '@mantine/core';
import classes from './newsletter.module.css';

export function Newsletter() {
  return (
    <Container size={"md"} bg={"dark"} className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Attendez une minute...</Title>
        <Text fw={500} c="orange" fz="lg" mb={5}>
          S&apos;abonner à notre lettre d&apos;information !
        </Text>
        <Text fz="sm"  c="dimmed">
        pour recevoir les dernières nouvelles avant tout le monde.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button bg={'orange'} className={classes.control}>Subscribe</Button>
        </div>
      </div>
    </Container>
  );
}