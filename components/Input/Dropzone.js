import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../../styles/Home.module.css';

const Dropzone = (props) => {
    const { name, register, setValue, label, accept, setFile, setFilePreview } = props;

    const onDrop = useCallback(
        (droppedFiles) => {
            setValue(name, droppedFiles, { shouldValidate: true });
        },
        [setValue, name],
    );

    const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
        onDrop,
        accept: accept,
        validator: fileSizeValidator,
    });

    useEffect(() => {
        register(name);
    }, [register, name]);

    const acceptedFileItems = acceptedFiles.map((file) => {
        setFilePreview(
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            }),
        );
        setFile(file);
    });

    const fileRejectionItems = fileRejections.map(({ file, errors }) => {});
    
    return (
        <div className={styles.dropzone}>
        <div
            {...getRootProps()}
            type="file"
            role="button"
            aria-label={label}
            id={name}
            className="flex items-center justify-center text-center w-full min-h-[150px]"
        >
            <input {...props} {...getInputProps()} />
            <p className="text-[#9aadba] text-sm md:text-base font-medium my-auto">
                Upload or drag your image / file here
            </p>
        </div>
        </div>

    )
}

export default Dropzone;

// Supporting function
function fileSizeValidator(file) {
  const maxFileSize = 3072;
  if (file.name.length > maxFileSize) {
    return {
      code: 'file-to-large',
      message: `File is larger than ${maxFileSize} characters`,
    };
  }
  return null;
}
