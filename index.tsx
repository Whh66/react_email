// import { MyTemplate } from './email';
import { render } from '@react-email/render';
import MyTemplate from './emails/a1';

const html = render(<MyTemplate />, {
   pretty: true,
});

// console.log(html);
