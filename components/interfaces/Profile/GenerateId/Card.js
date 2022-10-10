import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
// import { CheckIcon } from '@chakra-ui/icons';

const Card = ({ learnerId, form }) => {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'#23464f'}
            rounded={'full'}>
            Grow 1.0
          </Text>
          <Stack direction={'column'} align={'center'} justify={'center'}>
            <Text color={'gray.500'}>#Student ID</Text>
            {/* <Text fontSize={'3xl'}>$</Text> */}
            <Text fontSize={'2xl'} fontWeight={800}>
              {learnerId}
            </Text>
          </Stack>
        
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <div>
              <Text fontSize={'md'} fontWeight={600} >Name:</Text>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                {
                  form.firstname ?
                `${form.firstname} ${form.lastname}`
                  :
                null
              }
              </ListItem>
            </div>
            <div>
              <Text fontSize={'md'} fontWeight={600} >Program:</Text>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                {form.program ? form.program : null}
              </ListItem>
            </div>
            <div>
              <Text fontSize={'md'} fontWeight={600} >Level:</Text>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                {form.level ? form.level : null}
              </ListItem>
            </div>
          </List>

          {/* <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
            Start your trial
          </Button> */}
        </Box>
      </Box>
    </Center>
  );
}

export default Card;