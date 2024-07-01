import React from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import cs from 'classnames/bind';
import styles from '../styles/components/VideoDropzone.module.css';

const VideoDropzone = ({ onVideoInfo, onLocalVideoUrl }) => {
    const cx = cs.bind(styles);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];

        // 파일 확장자가 mp4인지 확인
        if (file && file.type !== 'video/mp4') {
            alert('잘못된 파일입니다. mp4 형식의 파일만 업로드 가능합니다.');
            return;
        }

        // 로컬 URL 생성 및 부모 컴포넌트에 전달
        const localUrl = URL.createObjectURL(file);
        onLocalVideoUrl(localUrl);

        // 서버로 파일 업로드
        const formData = new FormData();
        acceptedFiles.forEach((file) => {
            formData.append('file', file);
        });

        axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log('File uploaded successfully', response.data);
            if (response.data && response.data.videoInfo) {
                const info = response.data.videoInfo;
                onVideoInfo(info);
            } else {
                alert('Failed to get video info from server.');
            }
        }).catch(error => {
            console.error('Error uploading file', error);
            alert('Error uploading file. Please try again.');
        });
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop
    });

    return (
        <div {...getRootProps()} className={cx('main')}>
            <input {...getInputProps()} />
            <div className={cx('text')}>
                Drag and Drop file (Video) here <br />
                or <span className='text-[#F6FD6D]'>Upload here</span>
            </div>
        </div>
    );
};

export default VideoDropzone;
