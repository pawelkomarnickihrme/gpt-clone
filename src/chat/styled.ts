import styled from 'styled-components';
import bg from '../ui/robot.svg';
import menu from '../ui/menu.png';
import send from '../ui/send.png';
import language from '../ui/language.png';
export const ChatBoxCointener = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Button = styled.div`
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-position: center;
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
export const MenuIcon = styled.div`
  background-image: url('${menu}');
  width: 24px;
  height: 24px;
`;
export const ShowRobotAvater = styled.div`
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
  z-index: 1;
`;

export const CloseButt = styled.div`
  width: 14px;
  height: 14px;
  /* UI Properties */
  color: #fff;
  opacity: 1;
`;
export const WMessaggeBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WellcomeMessageHeader = styled.div`
  margin-top: 36.66px;
  font: normal normal bold 26px/40px Nunito Sans;
  color: #373a43;
  width: 266px;
  height: 40px;
  text-align: center;
`;
export const WellcomeMessageContent = styled.div`
  margin-top: 13.73px;
  text-align: center;
  font: normal normal normal 16px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #373a43;
`;
export const WellcomeMessageInput = styled.div`
  margin-top: 23.73px;
  width: 357px;
  height: 63px;
  background: #f0f1f4 0% 0% no-repeat padding-box;
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

export const WellcomeMessageText = styled.div`
  text-align: left;
  font: normal normal normal 16px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #9399aa;
  margin-left: 23.33px;
`;
export const WellcomeMessageIcons = styled.div`
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

// BOX CHAT

