import styled from 'styled-components';
import logo from './../../images/Logo/Logo.png';
import logo2 from './../../images/Logo/Logo2.png';
import logo3 from './../../images/Logo/Logo3.png';
import pic1 from './../../images/Main/pic1.png';
import pic2 from './../../images/Main/picture2.png';
import pic3 from './../../images/Main/picture3.png';
import Hansel from './../../images/Hansel/Hansel.png';
import Hansel2 from './../../images/Hansel/Hansel2.png';
import Hansel3 from './../../images/Hansel/Hansel3.png';

export const FormStyled = styled.div`
  position: relative;
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
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;

    color: #ebd8ff;
  }
`;
export const Logo = styled.div`
  position: absolute;
  width: 76px;
  height: 22px;
  background-repeat: no-repeat;
  background-size: contain;

  top: 20px;
  left: 20px;
  background-image: url(${logo});
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${logo2});
  }
  @media screen and (min-device-pixel-ratio: 3),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 3dppx) {
    background-image: url(${logo3});
  }
`;
export const Image = styled.div`
  position: absolute;
  width: 308px;
  height: 168px;
  background-repeat: no-repeat;
  background-size: contain;
  top: 28px;
  left: 36px;
  background-image: url(${pic1});
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${pic2});
  }
  @media screen and (min-device-pixel-ratio: 3),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 3dppx) {
    background-image: url(${pic3});
  }
`;
export const Box = styled.div`
  margin-top: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border: solid;
  border-width: 8px;
  border-color: #ebd8ff;
`;

export const Avatar = styled.div`
  position: absolute;
  height: 62px;
  width: 62px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center, center;
  background-image: url(${Hansel});
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${Hansel2});
  }
  @media screen and (min-device-pixel-ratio: 3),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${Hansel3});
  }
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
  padding: ${p => {
    return p.isFolllow ? '14px 39px' : '14px 56px';
  }};

  border: 0;
  color: #373737;
  background: ${p => {
    return p.isFolllow ? '#5CD3A8;' : '#ebd8ff';
  }};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.375;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;
