import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from '../../styles/Home.module.css';

const Post = ({val}) => {
    return (
        <Flex gap='4' key={val.id}>
            <Flex h='fit-content'>
                <Image src={val.profile} alt={val.name} className={styles.imgReviewProfile} width='50px' height='50px' />
            </Flex>
            <Flex w='full' direction='column'>
                <Text fontWeight='bold' color='blue.600'>{val.name}</Text>
                <Text>{val.review}</Text>
                {val.img && 
                    <Flex w='fit-content' mt='4'>
                        <Image src={val.img} alt={val.name} className={styles.imgReviewImage} width='450px' height='250px' />
                    </Flex>
                }
            </Flex>
        </Flex>
    )
}

export default Post;