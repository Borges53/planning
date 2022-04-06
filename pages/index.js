import React, { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import {
  Grid,
  AppShell,
  Navbar,
  Header,
  Container,
  Center,
  Group,
  Box,
  Button,
} from '@mantine/core';
import Issues from '../components/Issues';
export default function HomePage() {
  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?'];
  const [selected, setSelected] = React.useState(null);

  return (
    <AppShell
      padding="md"
      navbar={<Issues />}
      header={
        <Header height={60} p="xs">
          PLANNING HECHA POR GALOs company
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Container>
        <Center style={{ width: '100%', height: 800 }}>
          <div>All elements inside Center are centered</div>
        </Center>
        <Group position="center">
          {fibonacci.map((item, index) => (
            <Button
              key={index}
              color={index === selected ? '' : 'gray'}
              mb={index === selected ? '' : 'sm'}
              size="md"
              onClick={() => setSelected(index)}
            >
              {item}
            </Button>
          ))}
        </Group>
      </Container>
    </AppShell>
  );
}
