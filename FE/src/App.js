import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin: 16px 0;
`;

const SubmitButton = styled.button`
  margin-left: 8px;
`;

const App = () => {
  const [value, setValue] = useState('');

  const onSubmit = async () => {};

  const onChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <div>
      <Form>
        <label>姓名：</label>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='請輸入名稱'
          maxLength={20}
        />

        <SubmitButton type='submit' onClick={onSubmit}>
          送出
        </SubmitButton>
      </Form>

      <button type='button'>取得所有名稱</button>
    </div>
  );
};

export default App;
