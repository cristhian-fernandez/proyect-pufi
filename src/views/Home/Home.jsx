import Banner from "../../components/Banner/Banner";
import Content from "../../components/Content/Content";
import NavHeader from "../../components/Nav/NavHeader";
import GridImages from "../../components/GridImages/GridImages";
import Form from "../../components/Form/Form";

function Home() {
    return (
        <div>
            <NavHeader />
            <Banner />
            <Content />
            <GridImages />
            <Form />
        </div>
    );
}

export default Home;