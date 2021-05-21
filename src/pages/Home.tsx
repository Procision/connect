import React from 'react'; 
import { Box, Button, Flex, Image, Heading, Stack, Text, Link,  } from 'bumbag';
import Header from "../components/Header"; 

function Home() {

    return (
        <Flex
            direction="column"
            alignSelf="center"
            // maxWidth={{ xl: "1200px" }} 
            margin="0 auto"
        >
            <Header />
            <Flex
                alignSelf="center"
                //justify={"center"} // { base: "center", md: "space-around", xl: "space-between" }
                direction={"column-reverse"} // { base: "column-reverse", md: "row" }
                //wrap="no-wrap"
                minHeight="70vh" 
                paddingX={8}
                marginBottom={16}
            >
                <Stack
                    spacing="4"
                    width={"80%"} // { base: "80%", md: "40%" }
                    alignSelf={"center"} // ["center", "center", "flex-start", "flex-start"]
                >
                <Heading
                    use="h1"
                    //size="xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={"center"} // ["center", "center", "left", "left"]
                >
                    Connect with family, friends, or teams
                </Heading>
                <Heading
                    use="h2"
                    //size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={"center"} // ["center", "center", "left", "left"]
                >
                    The go-to chat app for secure chat and collaboration
                </Heading>
                <Link href="/app/"> 
                    <Button
                        palette="primary"
                        borderRadius="8px"
                        paddingY="4"
                        paddingX="4"
                        lineHeight="1"
                        //size="md" 
                    >
                        Open the app now
                    </Button>
                </Link>
                <Text
                    fontSize="xs"
                    marginTop={2}
                    textAlign="center"
                    //color="primary.800"
                    
                    opacity="0.6"
                >
                No credit card required.
                </Text>
            </Stack>
            <Box width={"80%"} marginBottom={12}> {/* { base: "80%", sm: "60%", md: "50%" } { base: 12, md: 0 } */}
                {/* TODO: Make this change every X secs */}
                {/*<Image src={image} size="100%" rounded="1rem" shadow="2xl" />*/}
            </Box>
        </Flex>
      </Flex>
    )


    // return (
    //     <Flex
    //         direction="column"
    //         alignSelf="center"
    //         maxWidth={{ xl: "1200px" }} yes please
    //         margin="0 auto"
    //     >
    //         <Header />
            
    //         <Flex
    //             alignSelf="center"
    //             justifySelf={"center"}//{ base: "center", md: "space-around", xl: "space-between" }
    //             direction={"column-reverse"} //{ base: "column-reverse", md: "row" }
    //             flexWrap="no-wrap"
    //             minHeight="70vh"
    //             paddingX={8}
    //             marginBottom={16}
    //             >
    //             <Stack
    //                 spacing={"4"}
    //                 width={"80%"} //{ base: "80%", md: "40%" }
    //                 alignSelf={"center"}
                    
    //                 //align={["center", "center", "flex-start", "flex-start"]}
    //             >
    //                 <Heading
    //                     use="h1"
    //                     //size="xl"
    //                     fontWeight="bold"
    //                     color="primary"
    //                     textAlign={"center"}
    //                     //textAlign={["center", "center", "left", "left"]}
    //                 >
    //                 {"Connect with family, friends, or teams"}
    //                 </Heading>
    //                 <Heading
    //                     use="h2"
                        
    //                     //size="md"
    //                     color="primary"
    //                     opacity={0.8}
    //                     fontWeight="normal"
    //                     lineHeight={1.5}
    //                     textAlign={"center"}
    //                     //textAlign={["center", "center", "left", "left"]}
    //                 >
    //                 {"The go-to chat app for secure chat and collaboration"}
    //                 </Heading>
    //                 <Link href={"/signup"}>
    //                     <Button
    //                         color={"primary"}
    //                         //{/* colorScheme="primary" */ }
    //                         borderRadius="8px"
    //                         position={{ x: "4", y: "4" }}
    //                         lineHeight="1"
    //                         size="md"
    //                     >
    //                         {"Create your account now"}
    //                     </Button>
    //                 </Link>
    //                 <Text
    //                     fontSize="xs"
    //                     marginTop={2}
    //                     textAlign="center"
    //                     color="primary"
    //                     opacity="0.6"
    //                 >
    //                 No credit card required.
    //                 </Text>
    //             </Stack>
    //             <Box 
    //             width={"80%"}
    //             //{ base: "80%", sm: "60%", md: "50%" }
    //              marginBottom={"12"} 
    //              //{ base: "12", md: "0" }
    //              >
    //                 {/* TODO: Make this change every X secs */}
    //                 <Image src={"https://source.unsplash.com/collection/404339/800x600"} sizes="100%" borderRadius="1rem" boxShadow="2xl" />
    //                 {/* TODO: FIX IMAGE PROPS */}
    //             </Box>
    //         </Flex>
    //     </Flex>
    // );
}

export default Home;



