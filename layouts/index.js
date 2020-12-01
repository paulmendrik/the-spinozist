
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Column,Container} from "rbx";

const DefaultLayout = ({ children }) => (
        <div>
        <Column.Group centered>
        <Column size="two-thirds">
                <Container> <Navigation/></Container>
        <main>{children}</main>
                <Container><Footer /></Container>
        </Column>
        </Column.Group>
        </div>
);

export default DefaultLayout;