import {
  Container,
  Hr,
  Html,
  Img,
  Link,
  Section,
} from "@react-email/components";
import type { RegisterProps } from "./const";
import {
  codeContainer,
  container,
  layout,
  title,
  codeText,
  line,
  secondText,
} from "./style";
import React from "react";
import Text from "../components/Text";
// import './index.css'

export function Register(props: RegisterProps) {
  const { code, time } = props;

  return (
    <Html>
      <div style={layout}>
        {/* <Container> */}
        <div style={container}>
          <Container>
            <Text style={title}>Welcome to Hitin</Text>
            <Text style={secondText}>Here is your email verification code</Text>
            <Section
              style={{
                background: "#0C0221",
                border: "1px solid #FFFFFF33",
                borderRadius: 16,
                height: 124,
                letterSpacing: "16px",
                textAlign: "center",
                margin: "12px 0 32px",
                overflow: "hidden",
              }}
            >
              <Text style={codeText}>{code}</Text>
            </Section>
            <Text style={secondText}>
              This verification code is valid until{" "}
              <strong style={{ color: "#7AA5FA", marginLeft: 4 }}>
                {time}
              </strong>
            </Text>
            <Text style={secondText}>
              If you didn't request a code, you can safely to ignore this email.
            </Text>
            <Hr style={line} />
            {/* <Link href={'https://discord.com/invite/PM3A3RA7uR'}>
            <Img  width="57"
            height="22"
            alt="Logo" src={`https://${'cdn.wegic.ai'}/assets/email/wegic.png`} />
          </Link> */}
            <Img
              // src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAAsCAYAAAC5Wez6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATNSURBVHgB7ZuNddowEMcPHgMwgjpB0wkKEzSZoGSC0gkgE5ANkkyQbIA7QcgEcSYInUDVBTnPCN1JZ8vYuPze80vQN7rT6Z8LAJw5c+ZMLbTWE/Os9Y5389yZR8ERwfnsGt7tOvD3C2iJAVXBbcxgMMihJmb8sfkxJqq3Zo4t0e/S/Hj0VOXm+Ub1S4ndm7V5lFOFc0/NGjbQFcxinzUBJMAMs9Q0l0y/V6bfHI5AKRr4uIMWGDJ1VJhI5W1fmbrcV2g2aQKHp6DMGI7DhKlT0AIjX2Eg1r9BGhRVwYSmUNhkncw6woSovhdcGbgOymleoCtgaGNCxxISwIz/HOj3XKWf7fvIzBt9mk3bW2KMV31k0VVAhVbuRNYOrTVP/BUcht4n80whDGWsjVAkLc3z4JRlsBM6ObTAiCgX319CFFPHOordqC/WGdAwEiNQDiRSuna+mY1Oyjx5WwYsoAypqA6JpHXtEy9dR8nwPirda9Z4OXQAaWhtTbEmgLsDMzhxDgypu6tY68K9r8aTCE3jC62KaZ9qkyudeONka6Lqj3GApdMWkwM/SkUKaBam/SI0ph13Bf71YzbqylNeHI4V+Lku36969ycSrnti11yOJJl9HoJ3sq6YcYkF3xQz/lPFfktP+7Wux5JYxzvRfs2sfU5NUmpT5G5jwDXsZbF8J7KrilUJ+3GhNIaDMTWfH+YEk+Lm0LsT+wjxWSFcwwr9wJzMWywYCiZtW7Fy/fLyi8CGx5JDjTU4UIfjTdMJ+BgWtr/XkF1VrGQ/j4PVPY2U06Z2QuyDRqzqdNjvI8TuhVbdbcWqiHJfH1ShN6XX34HJscLhe9sK10CtIxQdfjl1OG+hE7D8AsIn9ad55iPBQl91mjxi1RNP9TtwMOsQn+OZdeM9MiH6/xZkhqiosGXG4A5HYcQcduo1cxtYUbPixkC7jASTzu3TFOSJD0SKmJBPGUCaY63ihKEwj32n1DpQzNhTvWDGGLt3JHd/NU1KxepSO8fagGJFcmCMWAIjCttmKJi0aZIoVpcaBki1Bu5w3MREBNsmZ5psXUOGwkCT5EydRLG6cO8pg3hSK1b8j8k9xEMaHLM8n4bULX4CDCCpYnVJlWNVTF0VxZqBDPZ+LosdBTR7KrAGM6DH54hWrB4UUyd5T6kVa3RYDzjExx6MIifFWP4ENbAnfgbMYph+FKesWCVOFBynfEf2Jcfq0lXFKjHkODTOMGbSU8mxunRYsW6F0WACgfnLhqwSOiQcI8fqUtkJBONUzbFKCO7BhyF7lGN1SXVHKek4CaMBMON8zl2cSAU0qU5kVe/so2LNIRLrEME9GEZMWtuQVU98g4p12yfFihSG/N8Ua/RGnoJiRYKhtaeKVULnFSsSCq2nrFgVU3ch+N9q5xUrMuqxYuW8Hk8qfhkos+0U7LJXGcSvgVxHIBr8BRlBxYpgik4BzSkr1lD4wg26LL1+INqlVqwZRBKrWJEh9FSx2k3OoD5dVaxZ+QUasq+KFbmG+JyqcgsaUqwSoROlWJEh9FCxFtiP1U+hukM2oVglezph6vYcAu/IDdAfKUxBDruPHPrYVOkn2QzbFr9POYPddyrQOMpWb+082CYjhrgnyjOgeQG/oXOQkUOCPThz5syx+Qe6xRO6nVYBsAAAAABJRU5ErkJggg==`}
              // src={`https://img.js.design/assets/img/667a78f345dea39e46c97d61.png#1c7a1067befb56e94b39f493ee6d3cdf`}
              // src={`https://cdn.a1.art/assets/Resource/image/email/hitin_logo.png`}
              src={`https://cdn.a1.art/assets/Resource/image/email/hitin_logo.png`}
              width="57"
              height="22"
              alt="Logo"
            />
            <Text style={{ marginTop: 10 }}>
              Create images, join in hot trends
            </Text>
          </Container>
        </div>
        {/* </Container> */}
      </div>
    </Html>
  );
}
