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
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <>
      <Stack
        // spacing={{ base: 4, md: 8, lg: 20 }}
        // direction={{ base: "column", md: "row" }}
      >
        <Stack
          // align="center"
          // justify="space-around"
          // direction={{ base: "row", md: "column" }}
        >
          {/* <Tooltip
            label={hasCopied ? "Email Copied!" : "Copy Email"}
            closeOnClick={false}
            hasArrow
          >
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              //   icon={<MdEmail />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              onClick={onCopy}
              isRound
            />
          </Tooltip> */}
          {/* <Link href="#">
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          fontSize="3xl"
                          icon={<BsGithub />}
                          _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                          }}
                          isRound
                        />
                      </Link>
                      <Link href="#">
                        <IconButton
                          aria-label="twitter"
                          variant="ghost"
                          size="lg"
                          icon={<BsTwitter size="28px" />}
                          _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                          }}
                          isRound
                        />
                      </Link>
                      <Link href="#">
                        <IconButton
                          aria-label="linkedin"
                          variant="ghost"
                          size="lg"
                          icon={<BsLinkedin size="28px" />}
                          _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                          }}
                          isRound
                        />
                      </Link> */}
        </Stack>
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
                <InputLeftElement children={<BsPerson />} />
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  placeholder="Your first name"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
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
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="You last name"
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
            {/* <FormControl isRequired>
              <FormLabel>Profile picture</FormLabel>
              <InputGroup>
                <input type="file" />
              </InputGroup>
            </FormControl> */}
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
              Generate Learner's ID
            </Button>
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default Form;
