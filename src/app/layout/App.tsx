import { Container } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/homepage/HomePage";
import Header from "./Header";
import { observer } from 'mobx-react-lite';


function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? <><Header /><HomePage /></> : (
        <>
          <Header />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}
export default observer(App);
