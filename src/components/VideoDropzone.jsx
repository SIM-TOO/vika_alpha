import React from 'react';
import { useDropzone } from 'react-dropzone';

const VideoDropzone = () => {
    const onDrop = (acceptedFiles) => {
        // 여기에 파일 처리 로직 추가
        acceptedFiles.forEach((file) => {
            console.log(file);
            // 파일 업로드 또는 처리 로직 추가
        });
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'video/*'
    });

    return (
        <div
            {...getRootProps()}
            className='w-[1516px] h-[499px] bg-black flex items-center justify-center text-white'
        >
            <input {...getInputProps()} />
            <div className='text-center cursor-default'>
                drag and Drop file (Video) here <br />
                or <span className='text-[#F6FD6D]'>Upload here</span>
            </div>
        </div>
    );
};

export default VideoDropzone;
