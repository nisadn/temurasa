import { Button, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import { reviewApi } from "../../config/services/reviewApi";

const RemoveModal = (props) => {
    const { isOpen, onClose, id } = props;
    const toast = useToast();
    const router = useRouter();

    const deleteObject = async (id) => {
        const res = await reviewApi.deleteReview(id);
        return res.data;
    }

    const mutation = useMutation(deleteObject, {
        onError: () => {
            toast({
                title: 'Something went wrong',
                status: 'error',
                variant: 'left-accent',
                position: 'top',
                duration: 3000,
                isClosable: true,
            });
        },
        onSuccess: () => {
            toast({
                title: 'Successfully delete review',
                variant: 'left-accent',
                status: 'success',
                position: 'top',
                duration: 3000,
                isClosable: true,
            });
        }
    });

    const handleDelete = () => {
        mutation.mutate(id);
    }

    if (mutation.isSuccess) {
        router.reload();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={['xs','md','md']}>
            <ModalOverlay />
            <ModalContent px='4' py='2' textAlign='center'>
            <ModalHeader fontSize='lg' pb='1'>
                Are you sure you want to delete this review?
            </ModalHeader>

            <ModalFooter justifyContent='center' gap='4'>
                <Button px='10' onClick={handleDelete} isLoading={mutation.isLoading} colorScheme='blue'>Yes</Button>
                <Button px='10' onClick={onClose}>No</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default RemoveModal;