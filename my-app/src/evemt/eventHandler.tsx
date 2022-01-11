import React from "react";
import { CustomInput, Header, Wrapper } from "../state/guest-list.styles";

const EventHandler: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("dragging");
  };
  return (
    <Wrapper>
      <Header>Event handler in react-typescript</Header>
      <CustomInput onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me !
      </div>
    </Wrapper>
  );
};

export default EventHandler;
