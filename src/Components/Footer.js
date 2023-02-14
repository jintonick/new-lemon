import React from "react";
import '../App.css';
import { ReactNode } from 'react';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = () => {
    return (
        <img src="https://i.ibb.co/kh8SrHk/Asset-20-4x.png" alt="Asset-20-4x" border="0"  className="image4"/>
    );
  };

  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'40'} mb={2} color="#f4cf14b4">
        {children}
      </Text>
    );
  };

function Footer() {
    return (
        <div className="footer">
            <div className="footer2">
                <div className="footer4">
                    <Stack spacing={5}>
                        <Box>
                            <Logo color={useColorModeValue('gray.700', 'white')} />
                        </Box>
                        <Text fontSize={'sm'} color="#495E57">© 2023 Little Lemon. All rights reserved</Text>
                    </Stack>
                </div>
                <div className="footer4">
                    <Stack align={'flex-start'}>
                        <ListHeader className="footerheader">Product</ListHeader>
                        <Link href={'#'} className="footerlink">Overview</Link>
                        <Link href={'#'} className="footerlink">Features</Link>
                        <Link href={'#'} className="footerlink">Tutorials</Link>
                        <Link href={'#'} className="footerlink">Pricing</Link>
                        <Link href={'#'} className="footerlink">Releases</Link>
                    </Stack>
                </div>
                <div className="footer4">
                    <Stack align={'flex-start'}>
                        <ListHeader className="footerheader">Company</ListHeader>
                        <Link href={'#'} className="footerlink">About</Link>
                        <Link href={'#'} className="footerlink">Press</Link>
                        <Link href={'#'} className="footerlink">Careers</Link>
                        <Link href={'#'} className="footerlink">Contact</Link>
                        <Link href={'#'} className="footerlink">Partners</Link>
                    </Stack>
                </div>
                <div className="footer4">
                    <Stack align={'flex-start'}>
                        <ListHeader className="footerheader">Support</ListHeader>
                        <Link href={'#'} className="footerlink">Help Center</Link>
                        <Link href={'#'} className="footerlink">Terms of Service</Link>
                        <Link href={'#'} className="footerlink">Legal</Link>
                        <Link href={'#'} className="footerlink">Privacy Policy</Link>
                        <Link href={'#'} className="footerlink">Status</Link>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Footer;