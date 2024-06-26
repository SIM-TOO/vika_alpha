import React, { useState } from 'react';
import cs from 'classnames/bind';

import styles from '../styles/pages/Main.module.css';
import '../styles/font/font.css'

import SelectBox from '../components/SelectBox.jsx';
import logo from '../assets/logo.svg';
import VideoDropzone from '../components/VideoDropzone.jsx';

const Main = () => {
  const cx = cs.bind(styles);

  // L BOX
  const Model = ['Upscaling', 'Denoise'];
  const UpscalingModel = ['업스케일링모델1', '업스케일링모델2'];
  const DenoiseModel = ['디노이즈모델1', '디노이즈모델2'];
  const Format = ['mp4', 'avi']
  const Resolution = ['X2', 'X3', 'FHD', '4K']

  const [selectedFeature, setSelectedFeature] = useState(Model[0]);
  const [inputData, setInputData] = useState('');



  // R BOX 1


  return (
    <div className={cx('main')}>

      {/* logo */}
      <img src={logo} alt="logo" className={cx('logo')} />

      {/* main box */}
      <div className={cx('main__box')}>

        {/* l-box */}
        <div className={cx('l__box')}>

          <div className={cx('l__title', 'T2')}>
            SETTING
          </div>

          {/* FEATURE */}
          <div className={cx('l__box__2')}>
            <p className={cx('l__name', 'T3')}>FEATURE</p>
            <SelectBox
              data={Model}
              initialValue={selectedFeature}
              onChange={setSelectedFeature}
            />

            {/* AI MODEL */}
            <p className={cx('l__name', 'T3')}>AI MODEL</p>
            {selectedFeature === 'Upscaling' ? (
              <SelectBox data={UpscalingModel} placeholder='Model Select' />
            ) : (
              <SelectBox data={DenoiseModel} placeholder='Model Select' />
            )}

            {/* LINE */}
            <div className={cx('line')} />

            {/* VIDEO */}
            <p className={cx('l__name__2', 'T3')}>VIDEO</p>
            <p className={cx('l__name__3', 'b2')}>INPUT</p>

            <div className={cx('input__box')}>
              <p className='T3'>  {inputData} </p>
            </div>

            <p className={cx('l__name__4', 'b2')}>
              OUTPUT
            </p>

            <SelectBox
              data={Format}
              placeholder='Format Select'
            />

            <SelectBox
              data={Resolution}
              placeholder='Resolution Select'
            />

            <button className={cx('l__button__1', 'T2')}>
              START
            </button>
            <button className={cx('l__button__2', 'T2')}>
              EXPORT
            </button>
          </div>
        </div>

        {/* r-box */}
        <div>
          <div className={cx('r__box__1')}>

            <p className='T2 text-white pt-[18px] pl-[22px] pb-[10px]'>VIDEO NAME</p>

            <VideoDropzone />










          </div>




          <div className={cx('r__box__2')}>
          </div>
        </div>

      </div>
    </div >
  );
}

export default Main;
