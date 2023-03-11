import React from 'react';
import CloseButton from './CloseButton';
import {
  MenuIcon,
  TopBar,
  WBox,
  ShowRobotAvater,
  WellcomeMessageHeader,
  WMessaggeBox,
  WellcomeMessageContent,
  WellcomeMessageInput,
  WellcomeMessageText,
  WellcomeMessageIcons,
  LanguageIconGrey,
  SendIconGrey,
  CloseButt,
} from './styled';
interface ChildComponentProps {
  setShowWellcomeBox: React.Dispatch<React.SetStateAction<boolean>>;
  setShowChatBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WellcomeBox(props: ChildComponentProps) {
  const { setShowWellcomeBox, setShowChatBox } = props;

  function onClickHandler() {
    setShowWellcomeBox(false);
    setShowChatBox(true);
  }
  function closeHandler() {
    setShowWellcomeBox(false);
    setShowChatBox(false);
  }
  return (
    <WBox>
      <TopBar>
        <MenuIcon />
        <ShowRobotAvater />
        <CloseButt onClick={closeHandler}>X</CloseButt>
      </TopBar>
      <WMessaggeBox>
        <WellcomeMessageHeader>Hi, I am Ivy!</WellcomeMessageHeader>
        <WellcomeMessageContent>
          I am a virtual assistant here to answer your questions.
        </WellcomeMessageContent>
        <WellcomeMessageInput onClick={onClickHandler}>
          <WellcomeMessageText>How can I help you</WellcomeMessageText>
          <WellcomeMessageIcons>
            <LanguageIconGrey />
            <SendIconGrey />
          </WellcomeMessageIcons>
        </WellcomeMessageInput>
      </WMessaggeBox>
    </WBox>
  );
}