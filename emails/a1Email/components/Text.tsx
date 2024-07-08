import type { CSSProperties } from 'react';
import React from 'react';
import { Text as EmailText } from "@react-email/components";

interface TextProps {
  style?: CSSProperties;
  children: React.ReactNode;
}
function Text(props: TextProps) {
  // eslint-disable-next-line react/no-unstable-default-props
  const { style = {}, children } = props;
  const defaultTextStyle: CSSProperties = {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '16px',
    color: '#fff',
    margin: 0
  };
  // return <p style={{ ...defaultTextStyle, ...style }}>{children}</p>;
  return <EmailText style={{ ...defaultTextStyle, ...style }}>{children}</EmailText>;
}

export default Text;
