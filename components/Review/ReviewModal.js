import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const ReviewModal = ({isOpen, onClose}) => {
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [ like, setLike ] = useState(false);

    const onSubmit = data => {
          console.log(data);
    }

    // console.log(errors);

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={['xs','lg','xl']}>
            <ModalOverlay />
            <ModalContent px='4' py='2' textAlign='center'>
            <ModalHeader fontSize='xl' pb='1'>Add Review</ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pt='4'>
                <Flex direction='column' gap='6'>

                <FormControl
                    isInvalid={errors.language !== undefined}
                >
                    <FormLabel fontWeight={'semibold'}>Pick your language</FormLabel>
                    <Controller name='language' control={control} rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <RadioGroup 
                                onChange={onChange} 
                                value={value} 
                            >
                            <Stack direction='row' gap='3'>
                                <Radio value='english' borderColor='gray.400'>English</Radio>
                                <Radio value='bahasa' borderColor='gray.400'>Bahasa</Radio>
                            </Stack>
                            </RadioGroup>
                            )}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.content !== undefined}>
                    <FormLabel fontWeight={'semibold'}>Write your review</FormLabel>
                    <Textarea
                        placeholder='Write here'
                        minHeight={['300px','200px','150px']}
                        {...register("content", {required: true})}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={errors.like !== undefined}
                >
                    <FormLabel fontWeight={'semibold'}>Do you like the dish?</FormLabel>
                    <Controller name='like' control={control} rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <RadioGroup 
                                onChange={onChange} 
                                value={value} 
                            >
                            <Stack direction='row' gap='3' >
                                <Radio value='yes' borderColor='gray.400' 
                                    onClick={() => setLike(true)}
                                >Yes</Radio>
                                <Radio value='no' borderColor='gray.400' 
                                    onClick={() => setLike(false)}
                                >No</Radio>
                            </Stack>
                            </RadioGroup>
                            )}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>

                {like && <FormControl 
                    isInvalid={errors.favorite !== undefined}
                >
                    <FormLabel fontWeight={'semibold'}>Category</FormLabel>
                    <Select
                        placeholder='Select your favorite dish'
                        {...register("favorite", {required: true})}
                    >
                        {categories.map((val) => (
                            <option value={val.id} key={val.id}>{val.name}</option>
                        ))}
                    </Select>
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>}
                </Flex>
            </ModalBody>

            <ModalFooter justifyContent='center' gap='4'>
                <Button px='10' type='submit' colorScheme='blue'
                    // isLoading={mutation.isLoading} 
                >Submit</Button>
                <Button px='10' onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </form>
            </ModalContent>
        </Modal>
    )
}

export default ReviewModal;

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