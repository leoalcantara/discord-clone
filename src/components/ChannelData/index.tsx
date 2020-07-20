import React, {useRef, useEffect} from 'react';

import ChannelMessage , { Mention }from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon  } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])
  return (
      <Container>
          <Messages ref= {messagesRef}>
            <ChannelMessage 
              author= "Leonidio Alcantara"
              date= "20/07/2020"
              content="Hoje finalizei o projeto - Clonando a interface do Discord"
            />

            {Array.from(Array(15).keys()).map((n) => (
              <ChannelMessage 
                author= "john Wick"
                date= "19/07/2020"
                content="Fortis Fortuna Aduivat"
                
              />
            ))}

            <ChannelMessage 
              author= "Jhonn Robot"
              date= "20/07/2020"
              content={
                <>
                  <Mention> @Leonidio</Mention> parabéns ficou incrivel!
                </>               
              }
              hasMention
              isBot              
            />
           

          
          </Messages>

          <InputWrapper>            
            <Input type="text" placeholder="Conversar em #chat-livre" />
            <InputIcon />
          </InputWrapper>
      </Container>
  );
}

export default ChannelData;