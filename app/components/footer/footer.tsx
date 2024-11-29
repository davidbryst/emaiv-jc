import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Image, Text } from '@mantine/core';
import classes from './footer.module.css';

const data = [
  {
    title: 'Products',
    links: [
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
      { label: 'Lorem ipsum dolor sit', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
            <Image radius="sm" src="../../../public/logo.png"/>
          {/* <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text> */}
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © emaiv-jc.com, tout les droits reserver.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}