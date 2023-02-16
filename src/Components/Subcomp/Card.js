import React from "react";
import '../../App.css'
import '../AditionalCss/card.css'
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Button, HStack, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

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
            <CardFooter className="iconpos">
                <ButtonGroup spacing='2'>
                    <Button variant='ghost' colorScheme='black' fontSize={23}>
                        Order a delivery
                    </Button>
                </ButtonGroup>
                <FontAwesomeIcon icon={faBicycle} size="2x"/>
            </CardFooter>
        </Card>
    )
}

export default CardSec;