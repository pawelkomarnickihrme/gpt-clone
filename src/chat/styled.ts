import styled from 'styled-components';
import bg from '../ui/robot.svg';
export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Button = styled.div`
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-position: center;
  top: 34px;
  width: 65px;
  height: 65px;
`;
export const WBox = styled.div`
  width: 380px;
  height: 322px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 50px #00000027;
  border-radius: 9px;
  opacity: 1;
`;
