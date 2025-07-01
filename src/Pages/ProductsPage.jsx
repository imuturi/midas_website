import BreadCumb from "../Components/Common/BreadCumb";
import Products1 from "../Components/Products/Products1";
import ProductsCta2 from "../Components/ProductsCta/ProductsCta2";
import Team2 from "../Components/Team/Team2";

const ProductsPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Products"
            ></BreadCumb>   
            <ProductsCta2></ProductsCta2>  
            <Products1></Products1>
        </div>
    );
};

export default ProductsPage;