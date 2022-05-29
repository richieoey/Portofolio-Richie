import "@fontsource/quicksand"
import React from 'react';
import { Box, Button, ChakraProvider, Flex, Grid, GridItem, Heading, Hide, Spacer, Text } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import C from './asset/C.png'
import css from './asset/css.png'
import html from './asset/html5.png'
import js from './asset/js.png'
import java from './asset/java.png'
import figma from './asset/figma.png'
import R from './asset/R.png'
import laravel from './asset/laravel.png'
import python from './asset/python.png'
import richie from './asset/richie.png'
import php from './asset/php.png'
import cineplex from './asset/cineplex.png'
import hotel from './asset/hotel.png'
import kerja from './asset/kerja.jpg'
import kofika from './asset/kofika.png'
import mySQL from './asset/mySQL.png'
import myumn from './asset/myumn.jpg'


function App() {
  const theme = extendTheme({
    fonts: {
      heading: `"Quicksand", sans-serif;`,
      body: `"Quicksand", sans-serif;`,
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <Box bg='#1B262C' w="100%" h="100px" position="fixed" zIndex="1" px={{ sm: '5%', md: '18%' }} boxShadow='md' >
        <Flex alignItems='center' h="100%">
          <Flex alignItems='center' h='60px' bg='transparent' >
            <Heading color='#BBE1FA' size='2xl'>Richie.</Heading>
          </Flex>
          <Spacer />
          <Hide below='md'>
            <Flex h='60px' bg='transparent' gap='10px'>
              <a href='#profile'>
                <Button h='100%' color='#BBE1FA' bg='transparent' _focus={{ borderColor: 'transparent' }} px="30px" fontSize={'lg'}>
                  Profile
                </Button>
              </a>
              <a href='#skill'>
                <Button h='100%' color='#BBE1FA' bg='transparent' _focus={{ borderColor: 'transparent' }} px="30px" fontSize={'lg'}>
                  Skill
                </Button>
              </a>
              <a href='#project'>
                <Button h='100%' color='#BBE1FA' bg='transparent' _focus={{ borderColor: 'transparent' }} px="30px" fontSize={'lg'}>
                  Project
                </Button>
              </a>
            </Flex>
          </Hide>
        </Flex>
      </Box>

      <Box w="100%" px={{ sm: '5%', md: '18%' }} py='280px' bg='#1B262C' id='profile'>
        <Flex direction={{ sm: "column", md: "column", lg: "row" }} alignItems='center' w="100%" gap='75px'>
          <img src={richie} width='400px' height='400px' alt='richie' />
          <Box w='100%'>
            <Heading color='#BBE1FA' size='3xl' mb='10px'>Hello I&apos;m </Heading>
            <Heading color='#BBE1FA' size='3xl' mb='40px'><b style={{ color: '#3282B8' }}>Richie Darmawan Oey</b></Heading>
            <Text color='#BBE1FA' fontSize='lg'>
              Currently I&apos;m studying at Multimedia Nusantara University. I&apos;m seeking an opportunity to learn and challenge myself to become a world class <b style={{ color: '#3282B8' }}>Apple Developer</b>. I&apos;m avid apple user and I&apos;m extremely motivated to learn about <b style={{ color: '#3282B8' }}>Apple Development Environment</b>
            </Text>
            <Text color='#BBE1FA' fontSize='lg' mt='20px' fontWeight='bold'>
              Email : richie.oey88@gmail.com
            </Text>
            <Text color='#BBE1FA' fontSize='lg' mt='20px' fontWeight='bold'>
              Mobile : +62 811-7810-138
            </Text>
          </Box>
        </Flex>
      </Box>

      <Flex direction='column' justifyContent='center' bg='#1B262C' px={{ sm: '5%', md: '18%' }} pb='120px' id='skill' w='100%'>
        <Heading color='#BBE1FA' size='3xl' pb='175px' textAlign='center'>Skill</Heading>
        <Grid templateColumns={{ sm: 'repeat(8, 1fr)', md: 'repeat(10, 1fr)' }} w='100%' gap='50px'>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={C} alt='C' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>C</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={css} alt='css' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>CSS</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={figma} alt='figma' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>Figma</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={html} alt='html5' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>HTML 5</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={java} alt='C' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>Java</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={laravel} alt='C' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>Laravel</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={mySQL} alt='C' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>My SQL</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={php} alt='C' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>PHP</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={python} alt='C' width='100px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>Python</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={R} alt='C' width='150px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>R</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction='column' justifyContent='center' alignItems='center'>
              <img src={js} alt='C' width='150px' height='100px' />
              <Text fontSize='xl' color='#BBE1FA' fontWeight='extrabold' mt='10px'>Javascript</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      <Box bg='#1B262C' px={{ sm: '5%', md: '18%' }} id='project' w='100%' py='200px'>
        <Heading color='#BBE1FA' size='3xl' pb='150px' textAlign='center'>Project</Heading>
        <Grid templateColumns={{ sm: 'repeat(6, 1fr)', lg: 'repeat(12, 1fr)' }} w='100%' gap='30px'>
          <GridItem colSpan={6} overflow='hidden' _hover={{ bg: 'rgb(15, 76, 117, 0.1)' }} cursor='pointer'>
            <a href={"https://kofika.site/"}>
              <Flex direction='column' justifyContent='center' w='100%'>
                <img src={kofika} alt='project1' style={{ width: "100%", height: "350px" }} />
                <Heading px='20px' color='#3282B8' size='xl' mt='30px'>Kofika&apos;s Coffee Shop</Heading>
                <Text fontWeight='semibold' px='20px' color='#BBE1FA' py='20px'>Kofika.site is company profile website requested by kofika.id which sold variant of coffee</Text>
              </Flex>
            </a>
          </GridItem>
          <GridItem colSpan={6} overflow='hidden' _hover={{ bg: 'rgb(15, 76, 117, 0.1)' }} cursor='pointer'>
            <a href={"https://github.com/richieoey/Hotel-Booking-Website"}>
              <Flex direction='column' justifyContent='center' w='100%'>
                <img src={hotel} alt='project1' style={{ width: "100%", height: "350px" }} />
                <Heading px='20px' color='#3282B8' size='xl' mt='30px'>Hotel Transylvania</Heading>
                <Text fontWeight='semibold' px='20px' color='#BBE1FA' py='20px'>Hotel Translyvania is a final exam website project to book a hotel</Text>
              </Flex>
            </a>
          </GridItem>
          <GridItem colSpan={6} overflow='hidden' _hover={{ bg: 'rgb(15, 76, 117, 0.1)' }} cursor='pointer'>
            <a href={"https://github.com/richieoey/Cinema-Program-With-C"}>
              <Flex direction='column' justifyContent='center' w='100%'>
                <img src={cineplex} alt='project1' style={{ width: "100%", height: "350px" }} />
                <Heading px='20px' color='#3282B8' size='xl' mt='30px'>Cineplex</Heading>
                <Text px='20px' fontWeight='semibold' color='#BBE1FA' py='20px'>CINEPLEX is a cinema program for user to book a seat and an administration needs using C language</Text>
              </Flex>
            </a>
          </GridItem>
          <GridItem colSpan={6} overflow='hidden' _hover={{ bg: 'rgb(15, 76, 117, 0.1)' }} cursor='pointer'>
            <a href={"https://www.figma.com/proto/8tqxOjPdkqxVNghEg93pM9/KERJA-BORONGAN?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"}>
              <Flex direction='column' justifyContent='center' w='100%'>
                <img src={kerja} alt='project1' style={{ width: "100%", height: "350px" }} />
                <Heading px='20px' color='#3282B8' size='xl' mt='30px'>Kerja Borongan</Heading>
                <Text px='20px' fontWeight='semibold' color='#BBE1FA' py='20px'>Kerja borongan is a final exam project which sells website templates</Text>
              </Flex>
            </a>
          </GridItem>
          <GridItem colSpan={6} overflow='hidden' _hover={{ bg: 'rgb(15, 76, 117, 0.1)' }} cursor='pointer'>
            <a href={"https://www.figma.com/proto/sSKylXX017iwWUgIWVcxHr/AI?node-id=8%3A3&starting-point-node-id=8%3A3"}>
              <Flex direction='column' justifyContent='center' w='100%' boxShadow='xl'>
                <img src={myumn} alt='project1' style={{ width: "100%", height: "350px" }} />
                <Heading px='20px' color='#3282B8' size='xl' mt='30px'>MY UMN</Heading>
                <Text px='20px' fontWeight='semibold' color='#BBE1FA' py='20px'>MyUMN is a Human Computer Interaction final project to redesign MyUMN website</Text>
              </Flex>
            </a>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
