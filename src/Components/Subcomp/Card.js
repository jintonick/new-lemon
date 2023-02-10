import React from "react";
import '../../App.css'
import '../AditionalCss/card.css'
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Button, HStack } from "@chakra-ui/react";
import {FontAwesomeIcon} from  '@fortawesome/fontawesome-svg-core'



const CardSec = (props) => {
    return (
        <Card width={320} className="thecard1">
            <CardBody padding={0}>
                <Image
                src={props.src}
                alt='Green double couch with wooden legs'
                className="cardimage"
                />
                <HStack mt='6' className="cardheading">
                    <Heading size='md' className="headingname">{props.name}</Heading>
                    <Text color='blue.600' fontSize='2xl' className="price">{props.price}</Text>
                </HStack>
                <Stack>
                    <Text className="discription">{props.discription}</Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='ghost' colorScheme='black' fontSize={20}>
                        Order a delivery
                    </Button>
                    
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardSec;