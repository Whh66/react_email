/* eslint-disable no-template-curly-in-string */
export interface RegisterProps {
  code: string;
  time: string;
}

export const RegisterPreviewProps: RegisterProps = {
  // domain: 'wegic.ai',
  // cdnDomain: 'aibuildcdn-dev.geesdev.com',
  // email: 'example@example.com',
  code: '653018',
  time: '2022/02/15 10:12:40',
  // hideUnsubscribe: true,
};

export const RegisterTemplateProps: RegisterProps = {
  // domain: '${domain}',
  // cdnDomain: '${cdnDomain}',
  // email: '${email}',
  code: '${code}',
  // code: '884734',
  time: '${time}',
  // time: '2024/06/18 10:12:40',
};
