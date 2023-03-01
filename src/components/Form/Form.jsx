import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  Logo,
  Box,
  Button,
  Cicle,
  Followers,
  FormStyled,
  Line,
  Tweets,
  Image,
  Avatar,
} from './Form.styled';

const Form = () => {
  const [followers, setFollowers] = useLocalStorage('followers', 100500);
  const [isFollow, setIsFollow] = useLocalStorage('follow', false);

  const checkFollow = () => {
    if (isFollow) {
      setFollowers(followers - 1);
    } else {
      setFollowers(followers + 1);
    }
  };

  const visibleFolowers = () => {
    const string = followers.toString();
    const len = followers.toString().length;

    const newString =
      string.slice(0, len - 3) + ',' + string.slice(len - 3, len);

    return newString;
  };

  return (
    <FormStyled>
      <Logo />
      <Image />
      <Box>
        <Line />
        <Cicle>
          <Avatar />
        </Cicle>
        <Line />
      </Box>
      <Tweets>777 tweets</Tweets>
      <Followers>{visibleFolowers()} Followers</Followers>
      <Button
        isFolllow={isFollow}
        onClick={() => {
          setIsFollow(!isFollow);
          checkFollow();
        }}
      >
        {isFollow ? 'Following' : 'Follow'}
      </Button>
    </FormStyled>
  );
};

export default Form;
