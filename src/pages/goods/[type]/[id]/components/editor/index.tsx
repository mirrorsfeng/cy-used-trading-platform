import React from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

type EditorType = {
    onChange : any,
    onSubmit : any,
    submitting: boolean,
    value: string,
 }

 const Editor = ({ onChange, onSubmit, submitting, value } : EditorType) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          发表评论
        </Button>
      </Form.Item>
    </>
  );


  export default Editor;