import React, { memo, useState } from 'react';

import { Upload, message, Form, Input, Select  } from 'antd';

import { uploadGoodsImg } from '@/service/goodsService';
import PubHeader from './pubHeader';
import portalCategory from '@/constants/category';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

const { TextArea } = Input;
const { Option } = Select;

const Publish = memo(() => {
    const [loading, setLoading] = useState<boolean>(false);
    const [commentValue, setCommentValue] = useState('');
    const [goodsType, setGoodsType] = useState("电子产品");
    const [price, setPrice] = useState<number>();
    const [imageUrl, setImageUrl] = useState();
    const [file, setFile] = useState<any>();
    function getBase64(img:Blob, callback:Function) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    
    function beforeUpload(file:any) {
        setFile(file);
        // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        // if (!isJpgOrPng) {
        //   message.error('You can only upload JPG/PNG file!');
        // }
        // const isLt2M = file.size / 1024 / 1024 < 2;
        // if (!isLt2M) {
        //   message.error('Image must smaller than 2MB!');
        // }

        // return isJpgOrPng && isLt2M
        return false
      }
    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>选择商品图片</div>
        </div>
      );

    const imgOnChange = (info:any) => {
        // if (info.file.status === 'uploading') {
        //     setLoading(true);
        //     return;
        //   }
        //   if (info.file.status === 'done') {
        //     getBase64(info.file.originFileObj, (imageUrl:any) => {
        //       setLoading(false);
        //       setImageUrl(imageUrl)
        //     });
        //   }
        getBase64(info.fileList[0].originFileObj, (imageUrl:any) => {
                setLoading(false);
                setImageUrl(imageUrl);
              });
    }
    const toUpload = () => {
     const formData = new FormData();
     formData.append('file', file);
     console.log(formData.get('file'));
      uploadGoodsImg(formData).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }

    function handleChange(value : any) {
      setGoodsType(value);
    }

    const onCommentChange = (e:any) => {
        setCommentValue(e.target.value);
    }
    
    const onPriceChange = (e:any) => {
      const { value } = e.target;
      const reg = /^-?\d*(\.\d*)?$/;
      if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
          const numValue = parseFloat(value);
          setPrice(numValue);
      }
    }

  return (
    <div className={styles.bgDiv}>
      <PubHeader comment={commentValue} file={file} type={goodsType} price={price} />
    <div className={styles.mainDiv}>
        <div className={styles.comment}>
        <TextArea
          value={commentValue}
          onChange={onCommentChange}
          placeholder="对该商品的描述,该宝贝的特点"
          autoSize={{ minRows: 5, maxRows: 7 }}
        />
        </div>
        <div className={styles.uploadImage}>
        <Upload
        listType="picture-card"
        maxCount={1}
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={imgOnChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
        </div>
        <div className={styles.contentDiv}>
        <div className={styles.select}>
        <Select defaultValue="电子产品" style={{ width: 120 }} onChange={handleChange}>
      {
        portalCategory.map((item) => {
          return (
            <Option value={item[0]} key={item[0]}>{item[0]}</Option>
          )
        })
      }
    </Select>
    </div>
        <Input prefix="￥" suffix="RMB" value={price} onChange={onPriceChange} />
      {/* <Form name="goodsUpload-form">
      <Form.Item name="goods_name" label="商品名称" rules={[{ required: true }]}>
          <Input />
      </Form.Item>

      <Form.Item name="goods_comment" label="商品描述" rules={[{ required: true }]}>
      <TextArea showCount  rows={4} allowClear maxLength={100} />
      </Form.Item>

      <Form.Item name="goods_type" label="商品类型" rules={[{ required: true }]}>
      <Select defaultValue="游戏" style={{ width: 120 }} onChange={handleChange}>
      {
        portalCategory.map((item) => {
          return (
            <Option value={item} key={item}>{item}</Option>
          )
        })
      }
    </Select>
      </Form.Item>

      <Form.Item name="goods_price" label="商品价格" rules={[{ required: true }]}>
      <Input prefix="￥" suffix="RMB" />
      </Form.Item>
      </Form> */}
        </div>
    </div>
    </div>
  )
})

export default Publish