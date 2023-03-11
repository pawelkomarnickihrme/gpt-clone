import styled from 'styled-components';
import send from '../ui/sendBlack.png';
import language from '../ui/languageblack.png';
import bg from '../ui/robot.svg';

export const Box = styled.div`
  position: relative;
  width: 380px;
  height: 750px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 50px #00000027;
  border-radius: 9px;
  opacity: 1;
  margin-bottom: 32px;
`;
export const TopBar = styled.div`
  height: 75px;
  background: #2b6bd1 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #28304214;
  border-radius: 9px 9px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 33px;
`;
export const TopText = styled.div`
  text-align: left;
  font: normal normal bold 18px/20px Nunito Sans;
  letter-spacing: -0.36px;
  color: #ffffff;
  opacity: 1;
`;
export const MessageInput = styled.div`
  position: absolute;
  margin-left: 12.11px;
  bottom: 11px;
  width: 357px;
  height: 63px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #5b7edd;
  border-radius: 5px;
  opacity: 1;
  text-align: left;
  font: normal normal normal 16px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #9399aa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: text;
`;

export const MessageText = styled.input`
  text-align: left;
  font: normal normal normal 16px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #9399aa;
  margin-left: 23.33px;
  border: none;
  outline: none;
`;
export const MessageIcons = styled.div`
  margin-right: 23.33px;
  width: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const LanguageIconGrey = styled.div`
  background-image: url('${language}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 23.23px;
  height: 23.23px;
  cursor: pointer;
`;
export const SendIconGrey = styled.div`
  background-image: url('${send}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 23.23px;
  height: 23.23px;
  cursor: pointer;
`;
export const MessageBox = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const IviMessage = styled.div`
  margin-top: 33px;
  margin-right: 34.44px;
  display: flex;
  flex-direction: row;
`;
export const ShowRobotAvater = styled.div`
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 38.88px;
  height: 38.88px;
  margin-right: 23px;
  left: 37px;
`;
export const IviMessageText = styled.div`
  background: #eaeff8 0% 0% no-repeat padding-box;
  border-radius: 9px 9px 9px 2px;
  opacity: 1;
  width: 243px;
  height: auto;
  padding: 9px 16px;
`;
export const ClientMessage = styled.div`
  background: #1e6deb 0% 0% no-repeat padding-box;
  border-radius: 9px 9px 2px 9px;
  margin-top: 33px;
  margin-right: 33px;
  margin-left: 33px;
  text-align: left;
  height: auto;
  width: auto;
  padding: 9px 16px;
  text-align: left;
  font: normal normal normal 16px/20px Nunito Sans;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
