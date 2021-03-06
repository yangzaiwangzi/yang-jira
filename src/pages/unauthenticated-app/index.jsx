import { useState } from 'react';
import { Card, Button } from 'antd';
import { Register } from './register';
import { Login } from './login';
import { useChangeTitle } from 'helper';

import styled from '@emotion/styled';
import logo from 'assets/logo.svg';
import left from 'assets/left.svg';
import right from 'assets/right.svg';

export const UnauthenticatedApp = () => {
  useChangeTitle('登录/注册');
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard size="small">
        <Title>{isRegister ? '请注册' : '请登录'}</Title>
        {isRegister ? <Register /> : <Login />}
        <Button type="link" block size="small" onClick={() => setIsRegister(!isRegister)}>
          切换至{isRegister ? '登录' : '注册'}
        </Button>
      </ShadowCard>
    </Container>
  );
};
export const LongButton = styled(Button)`
  width: 100%;
`;
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 46rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
