import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";


const Form = ({ setForm, form, onGenerateId }) => {
  // const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <>
      <Stack>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          borderRadius="lg"
          p={8}
          color={useColorModeValue("gray.700", "whiteAlpha.900")}
          shadow="base"
        >
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                {/* <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  placeholder="Your Email"
                /> */}
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                placeholder="Your Email"
                />
              </InputGroup>
            </FormControl>
            {/* <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  name="name"
                  value={form.firstname}
                  onChange={(event) =>
                    setForm({ ...form, firstname: event.target.value })
                  }
                  placeholder="Your first name"
                />
              </InputGroup>
            </FormControl> */}
            <input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={(event) =>
                  setForm({ ...form, firstname: event.target.value })
                }/>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <InputGroup>
                {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
                <Input
                  placeholder="Your last name"
                  value={form.lastname}
                  onChange={(event) =>
                    setForm({ ...form, lastname: event.target.value })
                  }
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Program</FormLabel>
              <InputGroup>
                {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
                <Select
                  placeholder="Select program"
                  value={form.option}
                  onChange={(event) =>
                    setForm({ ...form, program: event.target.value })
                  }
                >
                  <option value="Full-stack development">Full-stack development</option>
                  <option value="Android Development">Android Development</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="DevOps Development">DevOps Development</option>
                </Select>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Level</FormLabel>
              <InputGroup>
                {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
                <Select
                  placeholder="Select level"
                  value={form.level}
                  onChange={(event) =>
                    setForm({ ...form, level: event.target.value })
                  }
                >
                  <option value="Entry">Entry</option>
                  <option value="Junior">Junior</option>
                  <option value="Intermediate">Intermediate</option>
                </Select>
              </InputGroup>
            </FormControl>
            <Button
              colorScheme="blue"
              bg="#66cee8"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
              isFullWidth
              type="submit"
              onClick={onGenerateId}
            >
              Generate Learner&apos;s ID
            </Button>
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default Form;
