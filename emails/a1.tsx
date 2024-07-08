import * as React from "react";
import { Html, Button, Hr, Text, Container } from "@react-email/components";
import { render } from '@react-email/render';
import type { CSSProperties } from 'react';
import EmailFlow from "./a1Email";


function MyTemplate() {

  return (
    <Html>
      <Container style={layout}>
        <Container style={container}>
          <Text>6666</Text>
        </Container>
      </Container>
    </Html>
  );
}

export default MyTemplate;

export const layout: CSSProperties = {
  maxWidth: '100%',
  width: '100%',
  background: 'rgba(232, 232, 232, 1)',
  // padding: '80px 20px',
  fontSize: 13,
  fontWeight: 400,
  fontFamily: 'sans-serif',
  lineHeight: '24px',
};

export const container: CSSProperties = {
  background: 'rgba(255, 255, 255, 1)',
  borderRadius: '12px',
  padding: '0 48px',
  width: 'calc(100% - 40px)',
  // minWidth: 390,
  maxWidth: 580,
  margin: '40px auto',
};

