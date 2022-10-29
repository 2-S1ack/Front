import React from "react";
import styled from "styled-components";

const EnterLayout = ({ children }) => {
     return (
          <>
               <LayoutContainer>{children}</LayoutContainer>
          </>
     );
};

export default EnterLayout;

const LayoutContainer = styled.div`
     max-width: 100%;
     max-height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
`;
