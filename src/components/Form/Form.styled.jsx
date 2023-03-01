import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  p {
    color: #ebd8ff;
    text-align: center;
  }
`;
export const Box = styled.div`
  margin-top: 178px;
  display: flex;
  align-items: center;
`;
export const Line = styled.div`
  width: 150px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Cicle = styled.div`
  display: block;
  position: relative;
  height: 72px;
  width: 72px;
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border: solid 8px black;
`;

export const Tweets = styled.p`
  margin-top: 26px;
`;
export const Followers = styled.p`
  margin-top: 16px;
`;
export const Button = styled.button`
  margin: 26px auto;
  width: 196px;
  height: 50px;
  padding: 14px 56px;
  border: 0;
  color: #373737;
  /* background: #ebd8ff; */
  background: ${p => {
    return p.isFolllow ? '#5CD3A8;' : '#ebd8ff';
  }};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &:hover {
    cursor: pointer;
  }
`;
