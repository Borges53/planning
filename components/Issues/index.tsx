import {
  Navbar,
  ScrollArea,
  Box,
  Text,
  Group,
  ActionIcon,
  Anchor,
  Button,
  Container,
} from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { DotsHorizontalIcon } from '@modulz/radix-icons';

export default function Demo() {
  const items = ['s', 's', 's', 's', 's'];

  return (
    <Navbar height={'94vh'} p="xs" width={{ base: 600 }}>
      <Navbar.Section mt="xs">
        <ColorSchemeToggle />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} px="md" mt={"xl"}>
        {items.map((item, index) => (
          <Box
            my={'xl'}
            p={'xl'}
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
              borderRadius: theme.radius.lg,
            })}
          >
            <Group position="apart">
              <Text>ABP-512</Text>
              <ActionIcon
                onClick={() => alert('clicked')}
                size="xl"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark : theme.colors.gray[0],
                  color:
                    theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
              >
                <DotsHorizontalIcon width={20} height={20} />
              </ActionIcon>
            </Group>
            <Anchor href="#" size="lg">
              https://vi-datec.atlassian.net/browse/ABP-512
            </Anchor>
            <br></br>
            <Button color="yellow" radius="md" size="md" mt="lg">
              Vote again
            </Button>
          </Box>
        ))}
      </Navbar.Section>

      <Navbar.Section p={'xl'}>
        <Button variant="subtle" color="dark" radius="md" size="md">
          <Text size="xl">+ ADD ISSUE</Text>
        </Button>
      </Navbar.Section>
    </Navbar>
  );
}
