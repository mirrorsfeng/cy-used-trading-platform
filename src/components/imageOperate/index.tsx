import React, { memo, MutableRefObject, useRef, useState } from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './index.less';

type Props = {
  imageConfig: {
   setBackFile: Function,
    circleSize: {
      width: number;
      height: number;
    };
  };
};
const ImageOperate = memo(({ imageConfig }: Props) => {
  const [imageUrl, setImageUrl] = useState<any>();
  const [isMove, setIsMove] = useState<boolean>(false);
  const [x, setX] = useState<any>();
  const [y, setY] = useState<any>();
  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imgHeight, setImgHeight] = useState<number>(0);
  const [isVisable, setIsVisable] = useState<string>('none');
  const [scale, setScale] = useState<number>(1);
  const [btnShow, setBtnShow] = useState<boolean>(false);

  const moveRef: MutableRefObject<any> = useRef(null);
  const canvasRef: MutableRefObject<any> = useRef(null);
  const imgRef: MutableRefObject<any> = useRef(null);
  
  const onDivClick = (e: any) => {
    setX(e.clientX - e.target.offsetLeft);
    setY(e.clientY - e.target.offsetTop);
    setIsMove(true);
  };

  const onDivMove = (e: any) => {
    if (isMove) {
      const moveX = e.clientX - x;
      const moveY = e.clientY - y;

      moveRef.current.style.left = `${moveX}px`;
      moveRef.current.style.top = `${moveY}px`;
      if (moveX <= 0) {
        moveRef.current.style.left = `0px`;
      }
      if (moveX > imgWidth - imageConfig.circleSize.width) {
        moveRef.current.style.left = `${
          imgWidth - imageConfig.circleSize.width
        }px`;
      }
      if (moveY < 0) {
        moveRef.current.style.top = `0px`;
      }

      if (moveY > imgHeight - imageConfig.circleSize.height) {
        moveRef.current.style.top = `${
          imgHeight - imageConfig.circleSize.height
        }px`;
      }
    } else {
      return;
    }
  };

  const onDivEnd = (e: any) => {
    setIsMove(false);
  };

  const onFinish = () => {
    if(!imageUrl) {
      return;
    }
    
    const dx = parseInt(moveRef.current.style.left.split('px')[0] || '0');
    const dy = parseInt(moveRef.current.style.top.split('px')[0] || '0');
    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(imgRef.current, dx * scale, dy * scale, 200 * scale, 200 * scale, 0, 0, 200, 200);
    let data = canvasRef.current.toDataURL();
    data=data.split(',')[1];
    data=window.atob(data);
    var ia = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
        ia[i] = data.charCodeAt(i);
    }
   const blob=new Blob([ia],{type:"image/png",endings:'transparent'});
   const fd=new FormData();
   fd.append('file',blob);
   imageConfig.setBackFile(fd);
  };

  const imgOnLoad = (e: any) => {
    if(e.target.width >= e.target.height) {
      setScale(e.target.width/300);
      imgRef.current.style.width = '300px';
      imgRef.current.style.height = `${Math.floor(300 * e.target.height / e.target.width )}px`; 
      setImgWidth(300);
      setImgHeight(Math.floor(300 * e.target.height / e.target.width ));
      
    }else {
      setScale((e.target.height/300));
      imgRef.current.style.height = '300px';
      imgRef.current.style.width = `${Math.floor(300 * e.target.width / e.target.height )}px`; 
      setImgHeight(300);
      setImgWidth(Math.floor(300 * e.target.width / e.target.height ));
     
    }
    setIsVisable('block')
  };

  const onImgChange = (info: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageUrl(reader.result)
      setBtnShow(true);
    });
    reader.readAsDataURL(info.file.originFileObj);
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.btn}>
      <Upload onChange={onImgChange} showUploadList={false}>
        <Button icon={<UploadOutlined />}></Button>
      </Upload>
      </div>
      <div
        className={styles.imageDiv}
        style={{
          width: `${imgWidth}px`,
          height: `${imgHeight}px`,
        }}
      >
        <img
          src={imageUrl}
          alt=""
          ref={imgRef}
          onLoad={imgOnLoad}
        />
        <div
          className={styles.moveDiv}
          onMouseDown={onDivClick}
          onMouseMove={onDivMove}
          onMouseUp={onDivEnd}
          ref={moveRef}
          style={{
            width: `${imageConfig.circleSize.width}px`,
            height: `${imageConfig.circleSize.height}px`,
            display: `${isVisable}`,
          }}
        ></div>
      </div>
      <button  onClick={onFinish} style={btnShow? {} : {display: 'none'}} className={styles.btnOk}>点击截图</button>
      <canvas
        ref={canvasRef}
        width="200px"
        height="200px"
        className={styles.can}
      ></canvas>
    </div>
  );
});

export default ImageOperate;
