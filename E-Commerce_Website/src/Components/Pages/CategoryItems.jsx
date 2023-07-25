import { MDBBtn } from "mdb-react-ui-kit";

const CategoryItems = ({ item }) => {
  return (
    <div className="categoryItem col-sm-12 col-lg-4">
      <img src={item.img} alt="category" />
      <div className="info">
        <h1>{item.title}</h1>
        <MDBBtn color="dark">Shop Now</MDBBtn>{" "}
      </div>
    </div>
  );
};

export default CategoryItems;
