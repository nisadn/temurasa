/* eslint-disable @next/next/no-img-element */
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Dropzone from "../Input/Dropzone";
import styles from '../../styles/Home.module.css';

const EditModal = ({isOpen, onClose, review}) => {
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [ like, setLike ] = useState(false);

    const [file, setFile] = useState();
    const [value, setValue] = useState();
    const [filePreview, setFilePreview] = useState({
        preview: review.image,
    });
    
    const FormData = require('form-data');
    const formData = new FormData();
    
    const onSubmit = data => {
        if (!like) {
            delete data['favorite'];
        }
        // formData.append("language", data.language);
        // formData.append("content", data.content);
        // formData.append("like", data.like === 'yes');
        // if (file !== undefined) formData.append('file', file);
        // if (data.favorite) formData.append('favorite', data.favorite);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={['xs','xl','2xl']}>
            <ModalOverlay />
            <ModalContent px='4' py='2' textAlign='center'>
            <ModalHeader fontSize='xl' pb='1'>Edit Review</ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pt='4'>
                <Flex direction='column' gap='6'>

                <FormControl isInvalid={errors.content !== undefined}>
                    <FormLabel fontWeight={'semibold'}>Content <span className="text-red-400">*</span></FormLabel>
                    <Textarea
                        placeholder='Write here'
                        defaultValue={review.content}
                        minHeight={['300px','200px','150px']}
                        {...register("content", {required: true})}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Add an image to your review
                    </FormLabel>
                    <Dropzone
                        accept="image/*"
                        name="file"
                        label="File Upload"
                        register={register}
                        setValue={setValue}
                        setFilePreview={setFilePreview}
                        setFile={setFile}
                    />
                </FormControl>

                <div className="min-w-[148px] w-full flex flex-col space-y-2 justify-start items-start ">
                    <p className="text-base font-semibold text-black">Current Image</p>
                    {filePreview.preview !== '' ? (
                        <img src={filePreview?.preview} alt='preview' className={styles.imgReviewDropzone} />
                    ) : (
                    <div className="text-base font-normal text-black flex items-center flex flex-row space-x-1">
                        <p>Current Image is</p> <span className="font-semibold"> Empty</span>
                    </div>
                    )}
                </div>
                </Flex>
            </ModalBody>

            <ModalFooter justifyContent='center' gap='4'>
                <Button px='10' type='submit' colorScheme='blue'
                    // isLoading={mutation.isLoading} 
                >Save</Button>
                <Button px='10' onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </form>
            </ModalContent>
        </Modal>
    )
}

export default EditModal;

const categories = [{
    id: '1',
    name: 'Gudeg',
},{
    id: '2',
    name: 'Mi Jawa',
},{
    id: '3',
    name: 'Lumpia',
}]