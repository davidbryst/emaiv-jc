import { useState } from 'react';
import { Anchor, Box, Burger, Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './header.module.css'

const userLinks = [
  { link: '#', label: 'Vie privée et sécurité' },
  { link: '#', label: 'Connexion' },
//   { link: '#', label: 'Paramètres du compte' },
//   { link: '#', label: 'Options de Support' },
];

const mainLinks = [
  { link: '#', label: 'Emaiv jc' },
  { link: '#', label: 'Services' },
  { link: '#', label: 'Prendre rendez-vous' },
  { link: '#', label: 'Contacts' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={34} /> */}
        <Image radius="sm" h={60} src="https://github.com/davidbryst/emaiv-jc/blob/main/public/logo.png"/>
        <Box className={classes.links} visibleFrom="sm">
          <Group justify="flex-end">{secondaryItems}</Group>
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </header>
  );
}
