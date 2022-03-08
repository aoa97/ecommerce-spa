import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Text, Button, Card, TextInput } from "../../components";
import { addProduct } from "../../redux/actions/productActions";
import "./styles.scss";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.productAdd);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (success) {
      alert("Done!");
    }
  }, [success]);

  const handleAddProduct = (data) => {
    dispatch(addProduct({ ...data, image: data.image[0] }));
    // dispatch(
    //   addProduct({
    //     image: data.image[0],
    //     price: 150,
    //     brand: "Dell",
    //     model: "Inspiron 3558",
    //     cpu: "Intel Core I5",
    //     vga: "Nvidia GeForce 920M",
    //     ram: "4GB",
    //     storage: "500GB HDD",
    //     countInStock: 5,
    //   })
    // );
  };

  return (
    <div className="adminPage">
      <Card>
        <Text className="fs-lg item-title">Product</Text>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <TextInput
            reg={register("image", { required: false })}
            type="file"
            accept="image/png"
          />
          <TextInput
            reg={register("price", { required: false })}
            type="number"
            placeholder="Price"
          />
          <select
            {...register("brand", { required: false })}
            className="textInput"
            placeholder="Brand"
          >
            <option value="0">Brand</option>
            <option>Apple</option>
            <option>Dell</option>
            <option>HP</option>
            <option>Lenovo</option>
            <option>Acer</option>
            <option>Asus</option>
          </select>
          <TextInput
            reg={register("model", { required: false })}
            placeholder="Model"
          />
          <TextInput
            reg={register("cpu", { required: false })}
            placeholder="CPU"
          />
          <TextInput
            reg={register("vga", { required: false })}
            placeholder="VGA"
          />
          <TextInput
            reg={register("ram", { required: false })}
            placeholder="RAM"
          />
          <TextInput
            reg={register("storage", { required: false })}
            placeholder="Storage"
          />
          <TextInput
            reg={register("countInStock", { required: false })}
            type="number"
            placeholder="Count In Stock"
          />
          <Text className="primary fs-xs">
            {errors &&
              Object.keys(errors).length > 0 &&
              "Please complete the fields."}
          </Text>
          <Button loading={loading}>Add</Button>
        </form>
      </Card>
    </div>
  );
};

export default AdminPage;
