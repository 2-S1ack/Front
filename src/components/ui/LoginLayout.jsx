import React from "react";
import styled from "styled-components";

const LoginLayout = ({ children }) => {
     return (
          <>
               <LayoutContainer>{children}</LayoutContainer>
          </>
     );
};

export default LoginLayout;

const LayoutContainer = styled.div`
     max-width: 100%;
     max-height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
`;
