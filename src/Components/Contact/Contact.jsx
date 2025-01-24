import React from "react";
import styled from "styled-components";
import { MainHeadingWrapper } from "../Elements/Elements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  padding: 150px 0;
  > div:nth-child(1) {
    padding-bottom: 80px;
  }
`;

const ContactMain = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 45%;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    > div {
      width: 100%;
      min-width: 0px;
    }
  }
`;

const Form = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0px auto;
    > div {
      margin-bottom: 20px;
      width: 100%;
      input {
        width: 100%;
        font-size: 19px;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 3px solid white;
        transition: all 500ms ease;
      }
      input:focus {
        border-bottom: 3px solid ${(props) => props.theme.secondary};
      }
    }
    text-align: left;
  }
  @media (max-width: 768px) {
    /* form {
      width: 100%;
    } */
  }
`;

const FindMeElseWhere = styled.div`
  > div {
    display: flex;
    width: 85%;
    align-items: center;

    margin: 0 auto;
    font-size: 18px;
    > div {
      margin: 1.5% 3%;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    word-break: break-all;
  }
  i {
    font-size: 25px;
    color: ${(props) => props.theme.secondary};
  }
`;

const SendButton = styled.button`
  padding: 10px 25px;
  width: 200px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  border: 2px solid ${(props) => props.theme.secondary};
  color: ${(props) => (props.currentTheme === "light" ? "black" : "white")};

  font-weight: 500;
  background-color: ${(props) => props.theme.secondary};
  :hover {
    background-color: ${(props) => props.theme.body};
    color: white;
  }

  @media (max-width: 768px) {
    padding: 5px 15px;
    width: 150px;
    font-size: 14px;
  }
`;

const intitialData = {
  from_name: "",
  email_id: "",
  message: "",
};

function Contact({ currentTheme }) {
  const [data, setData] = React.useState(intitialData);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const success = () =>
    toast.success("We have recieved your message. We'll Reach you soon");
  const failure = () => toast.error("Something went wrong");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const additionalParameters = {
      to_name: "Shashi", // Static value
    };

    emailjs
      .sendForm(
        "service_lry0v38",
        "template_wk27lvf",
        e.target,
        "NWcOFBzUfR2SMd64J",
        additionalParameters
      )
      .then(
        (result) => {
          success();
        },
        (error) => {
          failure();
        }
      );

    setData(intitialData);
  };

  const { from_name, email_id, message } = data;

  return (
    <ContactWrapper id="contact">
      <MainHeadingWrapper>
        <h1>Get In Touch</h1>
        <div></div>
      </MainHeadingWrapper>
      <ContactMain>
        <Form>
          <form onSubmit={onSubmitHandler}>
            <div>
              <input
                required
                value={from_name}
                name="from_name"
                onChange={onChangeHandler}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                value={email_id}
                type="email"
                name="email_id"
                onChange={onChangeHandler}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                required
                value={message}
                name="message"
                onChange={onChangeHandler}
                placeholder="Message"
              />
            </div>
            <div>
              <SendButton currentTheme={currentTheme}>Send </SendButton>
            </div>
          </form>
        </Form>
        <FindMeElseWhere>
          <div title="Click here to call">
            <div>
              <a target="_blank" rel="noreferrer" href="tel:+917379935535">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="tel:+917379935535">
                <p>+91 7379935535/ 7905632637</p>
              </a>
            </div>
          </div>
          <div title="Click here to mail">
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:shashiss0708@gmail.com"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:shashiss0708@gmail.com"
              >
                <p>shashiss0708@gmail.com</p>
              </a>
            </div>
          </div>
          <div title="Click here go to github profile">
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ShashiS07"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ShashiS07"
              >
                <p>github.com/ShashiS07</p>
              </a>
            </div>
          </div>
          <div title="Click here go to linkedin profile">
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shashi-shekhar-singh/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shashi-shekhar-singh/"
              >
                <p>linkedin.com/in/shashi-shekhar-singh/</p>
              </a>
            </div>
          </div>
          {/* <div title="Click here go to instagram profile">
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/shashi__shekhar_singh/"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/shashi__shekhar_singh/"
              >
                <p>instagram.com/shashi__shekhar_singh/</p>
              </a>
            </div>
          </div> */}
        </FindMeElseWhere>
      </ContactMain>
    </ContactWrapper>
  );
}

export default Contact;
