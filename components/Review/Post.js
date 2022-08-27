import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from '../../styles/Home.module.css';

const Post = ({val}) => {
    return (
        <Flex gap='4' key={val.id}>
            <Flex h='fit-content'>
                <Flex bg='blue.500' color='white' borderRadius='full' align='center' justify='center' w='50px' h='50px' fontSize='2xl' fontWeight='bold'>{val.user.name.substring(0,1)}</Flex>
            </Flex>
            <Flex w='full' direction='column'>
                <Text fontWeight='bold' >{val.user.name}</Text>
                <Text>{val.content}</Text>
                {val.image && 
                    <Flex w='fit-content' mt='4'>
                        <Image src={val.image} alt={val.id} className={styles.imgReviewImage} width='450px' height='250px' />
                    </Flex>
                }
            </Flex>
        </Flex>
    )
}

export default Post;