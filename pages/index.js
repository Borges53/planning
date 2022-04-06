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
  Paper,
  Text,
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
        <Text align='center'>ROOM ID: #dawddad2</Text>
        <Center style={{ width: '100%', height: 750 }}>
        <Box
            sx={{
              position: 'absolute',
              transform: `translate(0px,-140px)`,
            }}
          >
            <Paper shadow="xl" style={{ width: 50, height: 100 }} component={Center} radius="lg">1</Paper>
            <Text align='center'>names</Text>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              transform: `translate(100px,-140px)`,
            }}
          >
            <Paper shadow="xl" style={{ width: 50, height: 100 }} component={Center} radius="lg">5</Paper>
            <Text align='center'>names</Text>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              transform: `translate(-100px,-140px)`,
            }}
          >
            <Paper shadow="xl" style={{ width: 50, height: 100 }} component={Center} radius="lg">5</Paper>
            <Text align='center'>names</Text>
          </Box>
          <Box>
            <Paper shadow="xl" p="xl" style={{ width: 300, height: 100 }} component={Center} radius="xl"></Paper>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              transform: `translate(0px,140px)`,
            }}
          >
            <Paper shadow="xl" style={{ width: 50, height: 100 }} component={Center} radius="lg">2</Paper>
            <Text align='center'>names</Text>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              transform: `translate(100px,140px)`,
            }}
          >
            <Paper shadow="xl" component={Center} style={{ width: 50, height: 100 }} radius="lg">9</Paper>
            <Text align='center'>names</Text>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              transform: `translate(-100px,140px)`,
            }}
          
          >
            <Paper component={Center} shadow="xl" style={{ width: 50, height: 100 }} radius="lg">1</Paper>
            <Text align='center'>names</Text>
          </Box>
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
