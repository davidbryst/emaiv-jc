import { IconCookie, IconGauge, IconLock, IconMessage2, IconUser } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './features.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam vero, ullam tempora corporis, nisi reprehenderit.'
  },
  {
    icon: IconUser,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam vero, ullam tempora corporis, nisi reprehenderit.'
  },
  {
    icon: IconCookie,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam vero, ullam tempora corporis, nisi reprehenderit.'
  },
  {
    icon: IconLock,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam vero, ullam tempora corporis, nisi reprehenderit.'
  },
  {
    icon: IconMessage2,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam vero, ullam tempora corporis, nisi reprehenderit.'
  },
  // {
  //   icon: IconGauge,
  //   title: 'Extreme performance',
  //   description:
  //     'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  // },
  // {
  //   icon: IconUser,
  //   title: 'Privacy focused',
  //   description:
  //     'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  // },
  // {
  //   icon: IconCookie,
  //   title: 'No third parties',
  //   description:
  //     'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
  // },
  // {
  //   icon: IconLock,
  //   title: 'Secure by default',
  //   description:
  //     'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
  // },
  // {
  //   icon: IconMessage2,
  //   title: '24/7 Support',
  //   description:
  //     'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  // },
];

// interface FeatureProps {
//   icon: React.FC<{size:number, stroke:number}>;
//   title: React.ReactNode;
//   description: React.ReactNode;
// }

// export function Feature({ icon: Icon, title, description }: FeatureProps) {
//   return (
//     <div>
//       <ThemeIcon variant="light" size={40} radius={40}>
//         <Icon size={18} stroke={1.5} />
//       </ThemeIcon>
//       <Text mt="sm" mb={7}>
//         {title}
//       </Text>
//       <Text size="sm" c="dimmed" lh={1.6}>
//         {description}
//       </Text>
//     </div>
//   );
// }

export function Features() {
  const features = MOCKDATA.map((feature, index) => (
    <div key={index}>
      <ThemeIcon variant="light" size={40} radius={40}>
        <feature.icon size={18} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {feature.title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {feature.description}
      </Text>
    </div> 
  ));

  return (
    <div className={classes.bg}>
      <Container className={classes.wrapper}>
      <Title className={classes.title}>Nos services.</Title>

      {/* <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container> */}

      <SimpleGrid
        mt={100}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
    </div>
  );
}