/* eslint-disable @next/next/no-img-element */
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Select, Stack, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Dropzone from "../Input/Dropzone";
import styles from '../../styles/Home.module.css';
import { reviewApi } from "../../config/services/reviewApi";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

const ReviewModal = ({isOpen, onClose, categories, rId, isUpdate, defaultReview}) => {
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [ like, setLike ] = useState(false);

    // const [file, setFile] = useState();
    // const [value, setValue] = useState();
    // const [filePreview, setFilePreview] = useState({
    //     preview: '',
    // });
    
    const FormData = require('form-data');
    const formData = new FormData();

    const toast = useToast();
    const router = useRouter();

    const postReview = async (data) => {
        let res;
        if (isUpdate) {
            res = await reviewApi.editReview(defaultReview?.id, data);
        } else {
            res = await reviewApi.postReview(data);
        }
        return res;
    }

    const mutation = useMutation(postReview, {
        onError: (err) => {
            toast({
                title: `${err.response.data.message}`,
                status: 'error',
                variant: 'left-accent',
                position: 'top',
                duration: 3000,
                isClosable: true,
            });
        },
        onSuccess: () => {
            toast({
                title: `Successfully ${isUpdate ? 'update' : 'post'} review`,
                variant: 'left-accent',
                status: 'success',
                position: 'top',
                duration: 3000,
                isClosable: true,
            });
        }
    });
    
    const onSubmit = data => {
        // if (filePreview.preview === '') {
        //     delete data['file'];
        // }

        data['restaurantId'] = rId;
        delete data['like'];
        if (!like) {
            delete data['favorite'];
        }
        mutation.mutate(data);
        // if (file !== undefined) formData.append('file', file);
    }

    if (mutation.isSuccess) {
        router.reload();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={['xs','xl','2xl']}>
            <ModalOverlay />
            <ModalContent px='4' py='2' textAlign='center'>
            <ModalHeader fontSize='xl' pb='1'>{isUpdate ? 'Update' : 'Add'} Review</ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pt='4'>
                <Flex direction='column' gap='6'>

                <FormControl isInvalid={errors.content !== undefined}>
                    <FormLabel fontWeight={'semibold'}>{isUpdate ? 'Content' : 'Write your review'} <span className="text-red-400">*</span></FormLabel>
                    <Textarea
                        placeholder='Write here'
                        defaultValue={defaultReview?.content}
                        minHeight={['300px','200px','150px']}
                        {...register("content", {required: true})}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>

                {/* <FormControl>
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
                    ) : isUpdate && defaultReview?.image ?
                        <img src={defaultReview.image} alt='preview' className={styles.imgReviewDropzone} />
                    : (
                    <div className="text-base font-normal text-black flex items-center flex flex-row space-x-1">
                        <p>Current Image is</p> <span className="font-semibold"> Empty</span>
                    </div>
                    )}
                </div> */}

                {!isUpdate && <>
                
                <FormControl isInvalid={errors.rating !== undefined}>
                    <FormLabel fontWeight={'semibold'}>Rating <span className="text-red-400">*</span></FormLabel>
                    <Controller name='rating' control={control} rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <NumberInput min={0} max={5} w='fit-content'>
                                <NumberInputField placeholder="Input 0-5 rating" 
                                    onChange={onChange} 
                                    value={value} 
                                />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            )}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={errors.like !== undefined}
                >
                    <FormLabel fontWeight={'semibold'}>Do you like the dish? <span className="text-red-400">*</span></FormLabel>
                    <Controller name='like' control={control} rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <RadioGroup 
                                onChange={onChange} 
                                value={value} 
                            >
                            <Stack direction='row' gap='3' >
                                <span onClick={() => setLike(true)}>
                                    <Radio value='yes' borderColor='gray.400' 
                                >Yes</Radio>
                                </span>
                                <span onClick={() => setLike(false)}>
                                    <Radio value='no' borderColor='gray.400' 
                                >No</Radio>
                                </span>
                            </Stack>
                            </RadioGroup>
                            )}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>

                {like && <FormControl 
                    isInvalid={errors.mostLikeFood !== undefined}
                >
                    <FormLabel fontWeight={'semibold'}>Pick your favorite dish <span className="text-red-400">*</span></FormLabel>
                    <Select
                        placeholder='Select one'
                        {...register("mostLikeFood", {required: true})}
                    >
                        {categories.map((val, idx) => (
                            <option value={val} key={idx}>{val}</option>
                        ))}
                    </Select>
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>}</>
                }
                </Flex>
            </ModalBody>

            <ModalFooter justifyContent='center' gap='4'>
                <Button px='10' type='submit' colorScheme='blue'
                    isLoading={mutation.isLoading} 
                >{isUpdate ? 'Save' : 'Submit'}</Button>
                <Button px='10' onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </form>
            </ModalContent>
        </Modal>
    )
}

export default ReviewModal;
