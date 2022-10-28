import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
     return (
          <>
               <LayoutContainer>{children}</LayoutContainer>
          </>
     );
};

export default Layout;

const LayoutContainer = styled.div`
     max-width: 100%;
     max-height: 100%;
     min-height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
`;
