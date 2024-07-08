import { Container, Html, render } from "@react-email/components";
import { Register } from "./Register";
import { RegisterPreviewProps, RegisterTemplateProps } from "./Register/const";
import React, { CSSProperties } from "react";

interface Template {
  text: string;
  // eslint-disable-next-line ts/no-explicit-any
  templateProps: any;
  // eslint-disable-next-line ts/no-explicit-any
  renderContent: (props: any) => React.ReactNode;
}

const templates: { [T in string]: Template } = {
  register: {
    text: "注册验证码邮件",
    templateProps: RegisterTemplateProps,
    renderContent: (props: any) => <Register {...props} />,
  },
};

const current = "register";

function EmailFlow() {
  const renderMailContent = () => {
    const target = templates[current];
    if (!target) {
      return null;
    }
    const { templateProps, renderContent } = target;

    return renderContent(templateProps);
  };

  return renderMailContent();
}

export default EmailFlow;

// hitinMobile.html 适配了移动端, 但是这种内敛样式, 和自适应可能有兼容问题
// hitin.html 是web端的

// const html = render(<EmailFlow />, {
//   pretty: true,
// });

// console.log(html);