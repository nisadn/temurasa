import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import DetailResto from "../Review/DetailResto";
import Post from "../Review/Post";
import ReviewModal from "../Review/ReviewModal";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { restoApi } from "../../config/services/restoApi";
import { reviewApi } from "../../config/services/reviewApi";

const Reviews = ({ id }) => {

    const getReviews = async () => {
        const res = await reviewApi.getReview(id);
        return res.data;
    }

    const { status, data, error } = useQuery('reviews', getReviews); 

    return status === 'success' ? 
        data.data.length > 0 ? data.data.map((val) => (
            <Post val={val} key={val.id} rId={id} />
        )) : <div>This restaurant has no review yet.</div>
    : <p>Loading...</p>
}

const ReviewContainer = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isLogin = useSelector((state) => state.auth.isLogin);    

    const getDetailResto = async () => {
        const res = await restoApi.getDetail(id);
        return res.data;
    }

    const { status, data, error } = useQuery('resto', getDetailResto); 

    return ( status === 'success' && data ? <>
        <DetailResto data={data} />
        <Flex direction='column' w='full' >
            <Flex h='fit-content' mb='2'>
                <Box w='full' fontSize='xl' fontWeight='bold'>Reviews</Box>
                {isLogin && <Button colorScheme='blue' onClick={onOpen}>Add Review</Button>}
                <ReviewModal onClose={onClose} isOpen={isOpen} categories={data.foods} rId={id} />
            </Flex>
            <Box h='1.5px' bg='black' mb='6'></Box>
            <Flex direction='column' gap='8'>
                <Reviews id={id} />
            </Flex>
        </Flex></> : <p>Loading...</p>
    )
}

export default ReviewContainer;