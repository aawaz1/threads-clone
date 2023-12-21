import {  Box, Center, Flex, Image, Text } from "@chakra-ui/react"
import { Avatar } from "@chakra-ui/avatar"
import {Link} from "react-router-dom"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"
import { useState } from "react"

const  UserPost = ({likes , replies, postImg, postTitle,days}) => {
    const [liked , setLiked] = useState(false);
    return (
        <Link to={'/zamanali/post/1'}> 
        <Flex gap={3} mb={4} py={5} >
            <Flex
            flexDirection={"column"} 
            alignItems={'center'}>
                <Avatar size={"md"} name="zaman ali" src="/zaman-ali.jpg"/>
                <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
                <Box position={"relative"} w={"full"}>
                    <Avatar size={"xs"}
                    name="john doe"
                    src="https://bit.ly/dan-abramov"
                    position={"absolute"}
                    top={"0px"}
                    left={"15px"}
                    padding={"2px"}

                    
                    
                    />
                    <Avatar size={"xs"}
                    name="john doe"
                    src="https://bit.ly/kent-c-dodds"
                    position={"absolute"}
                    bottom={"0px"}
                    right={"-8px"}
                    padding={"2px"}
                    
                    
                    
                    />
                    <Avatar size={"xs"}
                    name="john doe"
                    src="https://bit.ly/sage-adebayo"
                    position={"absolute"}
                    bottom={"0px"}
                    left={"4px"}
                    padding={"2px"}
                    
                    
                    
                    />
                    
                </Box>
            </Flex>
            <Flex flex={1} flexDirection={"column"} gap={2}>
                <Flex justifyContent={'space-between'}
                
                w={"full"}

                      
                >
                    <Flex w={"full"}
                    alignItems={"center"}>
                        <Text  fontSize={"sm"} fontWeight={"bold"}>zamanabidi</Text>
                        <Image src='/verified.png'
                        w={4}
                        h={4}
                        ml={1}
                        />

                    </Flex>
                    <Flex alignItems={"center"}
                    gap={4}>
                        <Text fontStyle={"sm"}
                        color={"gray.light"}>{days}d</Text>
                        <BsThreeDots/>
                    </Flex>

                </Flex>
                <Text  fontSize={"sm"} >
                    {postTitle}
                </Text>
                {postImg &&  (
                    <Box borderRadius={6}
                    overflow={"hidden"}
                    border={"1px solid "}
                    borderColor={"gray.light"}
               
                    
               >
                   <Image src={postImg}
                   w={"full"}
                    />


               </Box>
                )
}
                <Flex
                gap={3}
                my={1}
                
                ><Actions  liked={liked} setLiked={setLiked} />

                </Flex>
                <Flex
                gap={2}
                alignItems={"center"}
                
                >
                    <Text color={"gray.light"} fontSize={"sm"}>{replies} replies</Text>
                    <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
                    
                    <Text color={"gray.light"} fontSize={"sm"}>{likes} likes</Text>

                </Flex>

            </Flex>


        </Flex>
        </Link>
    )
}


 export default UserPost

