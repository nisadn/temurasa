import { Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import styles from '../../styles/Home.module.css';
import CustomIcon from "../Icon/CustomIcon";
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import RemoveModal from "../Modal/RemoveModal";
import { FaStar } from 'react-icons/fa';
import { useSelector } from "react-redux";
import ReviewModal from "./ReviewModal";

const Post = ({val, rId}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen:isOpenEdit, onOpen:onOpenEdit, onClose:onCloseEdit } = useDisclosure();
    const isLogin = useSelector((state) => state.auth.isLogin);
    const user = useSelector((state) => state.auth.account);

    return (
        <Flex gap='4' key={val.id}>
            <Flex h='fit-content'>
                <Flex bg='blue.500' color='white' borderRadius='full' align='center' justify='center' w='50px' h='50px' fontSize='2xl' fontWeight='bold'>{val.user.name.substring(0,1)}</Flex>
            </Flex>
            <Flex w='full' direction='column'>
                <Flex>
                    <Text fontWeight='bold' w='full' >{val.user.name}</Text>
                    <Flex gap='2'>
                        {isLogin && (user.user.id === val.user.id || user.user.role === 'admin') && <CustomIcon as={BiEditAlt} color='blue.500' activeCol="blue.700" onClick={onOpenEdit} />}
                        <ReviewModal onClose={onCloseEdit} isOpen={isOpenEdit} rId={rId} isUpdate defaultReview={val} />
                        {/* <EditModal isOpen={isOpenEdit} onClose={onCloseEdit} isUpdate review={val} /> */}
                        {isLogin && (user.user.id === val.user.id || user.user.role === 'admin') && <CustomIcon as={BiTrash} color='red.500' activeCol="red.700" onClick={onOpen} />}
                        <RemoveModal isOpen={isOpen} onClose={onClose} id={val.id} />
                    </Flex>
                </Flex>
                <Text>{val.content}</Text>
                <Text fontWeight='semibold'><Icon as={FaStar} color='yellow.400' /> {val.rating}</Text>
                {/* {val.image && 
                    <Flex w='fit-content' mt='4'>
                        <Image src={val.image} alt={val.id} className={styles.imgReviewImage} width='450px' height='250px' />
                    </Flex>
                } */}
            </Flex>
        </Flex>
    )
}

export default Post;