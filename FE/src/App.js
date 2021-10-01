import { useState } from 'react';
import styled from 'styled-components';

import { getData, postData } from './api';

const Form = styled.form`
  margin: 16px 0;
`;

const SubmitButton = styled.button`
  margin-top: 8px;
`;

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData({ name, age });
      setUsers((prev) => [...prev, { name, age }]);
      setName('');
      setAge('');
    } catch (error) {
      console.error('[postData error]', error);
      throw error;
    }
  };

  const onChange = (e) => {
    const inputValue = e.target.value;
    const { type } = e.target.dataset;
    if (type === 'name') {
      setName(inputValue);
    } else {
      setAge(inputValue);
    }
  };

  const handleGetAllUser = async () => {
    try {
      const result = await getData();
      setUsers(result);
    } catch (error) {
      console.error('[getData error]', error);
      throw error;
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <div>
          <label>姓名：</label>
          <input
            type='text'
            value={name}
            data-type='name'
            onChange={onChange}
            placeholder='請輸入姓名'
            maxLength={20}
          />
        </div>

        <div>
          <label>年齡：</label>
          <input
            type='text'
            value={age}
            data-type='age'
            onChange={onChange}
            placeholder='請輸入年齡'
            maxLength={20}
          />
        </div>

        <SubmitButton type='submit'>送出</SubmitButton>
      </Form>

      <button type='button' onClick={handleGetAllUser}>
        取得所有用戶
      </button>

      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li>
              姓名：{user.name}，年紀：{user.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
