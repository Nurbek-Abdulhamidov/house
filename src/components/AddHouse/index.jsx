import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { IconDelete, MenuWrapper, Section, SelectAnt, Wrapper } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";
const { REACT_APP_BASE_URL: url } = process.env;

const AddNewHouse = () => {
  const [imgs, setImgs] = useState([]);
  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,
    locations: {
      latitude: 0,
      longitude: 0,
    },
  });
  const [img, setImg] = useState("");
  const [category, setCategory] = useState([]);

  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  // edit one by id
  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments);
        setInitial({ ...res?.data });
      });
  }, []);

  // category
  useEffect(() => {
    request({ url: `/categories/list` }).then((res) =>
      setCategory(res?.data || [])
    );
  }, []);

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: { ...values, attachments: imgs, name: "nurbek", categoryId: 1 },
      }).then((res) => {
        if (res?.status) navigate("/myprofile");
      });
    },
  });

  const addImg = () => {
    setImgs([
      ...imgs,
      { imgPath: img, id: `${img.length * Math.random()}${img}$` },
    ]);
    setImg("");
  };
  console.log(initial, "rrrrees");

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              onChange={formik.handleChange}
              name="country"
              value={formik.values.country}
              placeholder="Country"
            />
            <Input
              onChange={formik.handleChange}
              name="region"
              value={formik.values.region}
              placeholder="Region"
            />
            <Input
              onChange={formik.handleChange}
              name="city"
              value={formik.values.city}
              placeholder="City"
            />
            <Input
              onChange={formik.handleChange}
              name="address"
              value={formik.values.address}
              placeholder="Address"
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section apart>
            <Input
              type="number"
              onChange={formik.handleChange}
              name="houseDetails.area"
              value={formik.values.houseDetails.area}
              placeholder="Area"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="houseDetails.bath"
              value={formik.values.houseDetails.bath}
              placeholder="Bath"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="houseDetails.beds"
              value={formik.values.houseDetails?.beds}
              placeholder="Beds"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="houseDetails.garage"
              value={formik.values.houseDetails?.garage}
              placeholder="Garage"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="houseDetails.yearBuilt"
              value={formik.values.houseDetails?.yearBuilt}
              placeholder="Year Built"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="houseDetails.room"
              value={formik.values.houseDetails?.room}
              placeholder="Room"
            />

            <SelectAnt
              defaultValue={"Select Category"}
              value={formik.values.categoryId}
              onChange={formik.handleChange}
            >
              <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
              {category?.map((value, index) => {
                return (
                  <SelectAnt.Option
                    onChange={formik.handleChange}
                    key={index}
                    value={value?.id}
                  >
                    {value?.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              onChange={formik.handleChange}
              name="name"
              value={formik.values.name}
              placeholder="Name"
            />
            <Input
              onChange={formik.handleChange}
              name="zipCode"
              value={formik.values.zipCode}
              placeholder="Zip Code"
            />
            <Input
              onChange={formik.handleChange}
              type="number"
              name="price"
              value={formik.values.price}
              placeholder="Price"
            />
            <Input
              onChange={formik.handleChange}
              type="number"
              name="salePrice"
              value={formik.values.salePrice}
              placeholder="Sale price"
            />
          </Section>
          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />
            <Button type="button" onClick={addImg}>
              Add Image URL
            </Button>
          </Section>
          <Section flex>
            {imgs.map((value, index) => {
              return (
                <pre key={index}>
                  {value?.imgPath}
                  <IconDelete
                    onClick={() => {
                      let res = imgs.filter((vl) => vl.id !== value.id);
                      setImgs(res);
                    }}
                  />
                </pre>
              );
            })}
          </Section>
          <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              placeholder="description"
              name="description"
            />
          </Section>
          <h1 className="subTitle">Additional</h1>
          <Section gap>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.busStop"
              >
                Bus stop
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.garden"
              >
                Garden
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.market"
              >
                Market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.park"
              >
                Park
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.parking"
              >
                Parking
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.school"
              >
                School
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.statium"
              >
                Stadium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.subway"
              >
                Subway
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.superMarket"
              >
                Super Market
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.tv">
                TV
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.airCondition"
              >
                Air Condition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.croutyard"
              >
                Croutyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.furniture"
              >
                Furniture
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.gasStove"
              >
                Gas Stove
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.internet"
              >
                Internet
              </Checkbox>
            </Section>
          </Section>
          <Button>{id ? "Update" : "Save"}</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;
