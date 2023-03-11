import React, { useState } from 'react';
import {
  Box,
  TopText,
  MessageInput,
  MessageIcons,
  MessageText,
  LanguageIconGrey,
  SendIconGrey,
  IviMessage,
  MessageBox,
  ShowRobotAvater,
  IviMessageText,
  ClientMessage,
} from './chatBoxStyled';
import { TopBar, MenuIcon, CloseButt } from './styled';
import generateResponse from '../chatgpt/generateResponse';
interface ChildComponentProps {
  setShowWellcomeBox: React.Dispatch<React.SetStateAction<boolean>>;
  setShowChatBox: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ChatBox(props: ChildComponentProps) {
  const { setShowWellcomeBox, setShowChatBox } = props;

  function closeHandler() {
    setShowWellcomeBox(false);
    setShowChatBox(false);
  }
  const [text, setText] = useState('');
  const [messagges, setMessagges] = useState<string[]>([
    'Hello, how can I help you?',
  ]);

  function handleTextChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setText(event.target.value);
  }

  async function handleButtonClick() {
    setMessagges((prev) => [...prev, text]);
    const newMessagge = await generateResponse(text);
    newMessagge && setMessagges((prev) => [...prev, newMessagge]);
    setText('');
  }

  function handleKeyDown(event: { key: string }) {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  }
  function showMessagges() {
    return (
      <div>
        {messagges.map((string, index) => {
          if (index === 0 || index % 2 === 0)
            return (
              <IviMessage>
                <ShowRobotAvater />{' '}
                <IviMessageText key={index}>{string}</IviMessageText>
              </IviMessage>
            );
          else {
            return <ClientMessage key={index}>{string}</ClientMessage>;
          }
        })}
      </div>
    );
  }

  return (
    <Box>
      <TopBar>
        <MenuIcon />
        <TopText>Ivy Bot</TopText>
        <CloseButt onClick={closeHandler}> X </CloseButt>
      </TopBar>
      <MessageBox>{showMessagges()}</MessageBox>
      <MessageInput>
        <MessageText
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          placeholder={'Enter your message'}
        />
        <MessageIcons>
          <LanguageIconGrey />
          <SendIconGrey onClick={handleButtonClick} />
        </MessageIcons>
      </MessageInput>
    </Box>
  );
}
