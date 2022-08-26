import { Flex, Text } from "@chakra-ui/react";
import styles from '../../styles/Home.module.css';

const Post = ({val}) => {
    return (
        <Flex gap='4' key={val.id}>
            <Flex>
                <img src={val.profile} alt={val.name} className={styles.imgReviewProfile} />
            </Flex>
            <Flex w='full' direction='column'>
                <Text fontWeight='bold' color='blue.600'>{val.name}</Text>
                <Text>{val.review}</Text>
                {val.img && <img src={val.img} alt={val.name} className={styles.imgReviewImage} />}
            </Flex>
        </Flex>
    )
}

export default Post;