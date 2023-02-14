import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';
import '../App.css';
import '../Components/AditionalCss/testimonials.css'
import Raiting from "./Subcomp/Raiting";

const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
  };

  const TestimonialContent = ({ children }) => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  };

  const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  };

  const TestimonialText = ({ children }) => {
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'sm'}>
        {children}
      </Text>
    );
  };

  const TestimonialAvatar = ({
    src,
    name,
    title,
  }) => {
    return (
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar src={src} alt={name} mb={2} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };

function Reviews() {
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.700')}>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading className="testim">What our customers say!</Heading>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading className="testim1">Responsive staff</TestimonialHeading>
                <TestimonialText className="testim2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
                <Raiting />
              </TestimonialContent>
              <TestimonialAvatar
                src={'https://i.ibb.co/qJHm4v2/image-1.jpg'}
                name={'Fabian'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Very tasty food</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
                <Raiting />
              </TestimonialContent>
              <TestimonialAvatar
                src={'https://i.ibb.co/Gc1hQP0/image-2.jpg'}
                name={'Fletcher'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Excellent service</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
                <Raiting />
              </TestimonialContent>
              <TestimonialAvatar
                  src={'https://i.ibb.co/y5V2WKh/image.jpg'}
                  name={'Beatrice'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>I love this place</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
                <Raiting />
              </TestimonialContent>
              <TestimonialAvatar
                src={'https://i.ibb.co/YXwdLFb/image-3.jpg'}
                name={'Darcie'}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    );
  }
export default Reviews;