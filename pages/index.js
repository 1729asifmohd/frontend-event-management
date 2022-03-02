import Container from "@mui/material/Container";
import SignIn from "../components/loginform";

const Homepage = () => {
  return (
    <Container maxWidth="sm">
      <h1>Home Page</h1>
      <SignIn/>
    </Container>
  );
};

export default Homepage;
