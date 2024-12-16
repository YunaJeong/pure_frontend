import { Button, Checkbox, Input, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../lib/axios";

export default function Login() {
  const conRef = useRef();
  const idRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
  });

  const handleLogin = async () => {
    if (!info.id.value) {
      setError("아이디를 입력해주세요.");
      setInfo({
        ...info,
        id: {
          value: info.id.value,
          error: true,
        },
      });
      return;
    }
    if (!info.password.value) {
      setError("비밀번호를 입력해주세요.");
      setInfo({
        ...info,
        password: {
          value: info.password.value,
          error: true,
        },
      });
      return;
    }
    try {
      await instance.post("/login", {
        id: info.id.value,
        password: info.password.value,
      });
      sessionStorage.setItem("name", info.id.value);
      navigate("/");
    } catch (e) {
      console.error(e);
      if (e?.response?.status === 401) {
        setError("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        setError("서버 오류입니다. 잠시 후 다시 시도해주세요.");
      }
    }
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: {
        value: e.target.value,
        error: false,
      },
    });
  };

  useEffect(() => {
    if (info.password.error) {
      passwordRef.current.querySelector("input").focus();
    } else if (info.id.error) {
      idRef.current.querySelector("input").focus();
    }
  }, [info]);

  return (
    <Container ref={conRef}>
      <h1>로그인</h1>
      <p>PURE SHOP의 다양한 혜택을 누리세요.</p>
      <Form>
        <TextField
          label="아이디"
          type="text"
          placeholder="아이디"
          name="id"
          sx={{ width: "450px", marginBottom: "15px" }}
          onChange={handleChange}
          value={info.id.value}
          ref={idRef}
          error={info.id.error}
        />
        <TextField
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          name="password"
          sx={{ width: "450px", marginBottom: "15px" }}
          onChange={handleChange}
          value={info.password.value}
          ref={passwordRef}
          error={info.password.error}
        />
        <ErrorText>{error}</ErrorText>
        <OptionsContainer>
          <Option>
            <Checkbox id="save" />
            <label htmlFor="save">아이디 저장</label>
          </Option>
          <Option>
            <span className="find">아이디 찾기</span>
            <span>비밀번호 찾기</span>
          </Option>
        </OptionsContainer>
        <Button
          variant="contained"
          sx={{ width: "450px", height: "50px", marginBottom: "25px" }}
          onClick={handleLogin}
        >
          로그인
        </Button>
        <Link to="/register">아직 회원이 아니신가요?</Link>
      </Form>
    </Container>
  );
}

const ErrorText = styled.p`
  text-align: center;
  color: red;
  height: 30px;
`;

const OptionsContainer = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  color: #b4b4b4;

  & span {
    cursor: pointer;
    &:hover {
      color: black;
    }
  }

  & .find {
    &::after {
      content: "|";
      margin: 0 20px;
      color: #b4b4b4;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a {
    color: #b4b4b4;
  }
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 100px 0;

  & > h1 {
    text-align: center;
    margin-bottom: 5px;
  }
  & > p {
    text-align: center;
    margin-bottom: 30px;
    color: #b4b4b4;
  }
`;
