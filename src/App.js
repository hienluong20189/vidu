import "./App.css";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Img from "./image/Anh trang chu.png";
import Img1 from "./image/khach-san-phu-quoc-spa-du-lich-viet.jpeg";
import Img2 from "./image/Khach-san-vin-osis-du-lich-viet.jpeg";

function App() {
  return (
    <div>
      <div style={{marginBottom: "20px", marginTop: "20px"}} id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{height: "300px"}} src={Img} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img style={{height: "300px"}} src={Img1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img style={{height: "300px"}} src={Img2} class="d-block w-100" alt="..." />
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>


      <h3>Kh??ch S???n</h3>

      <p>
        <b>?????t ph??ng kh??ch s???n :</b>
        T???ng h???p h??n 200,000 kh??ch s???n trong n?????c v?? qu???c t??? ??ang c?? khuy???n m??i gi?? t???t, qu?? kh??ch
        c?? th??? d??? d??ng t??m ki???m ph??ng kh??ch s???n c???n ?????t ngay t???i website c??ng ty Du L???ch Vi???t. B??n
        c???nh vi???c c?? th??? ?????t mua ???????c ph??ng kh??ch s???n gi?? r??? tr???c tuy???n ????n gi???n, an to??n, ti???t
        ki???m...qu?? kh??ch c??n c?? th??? tham kh???o, so s??nh gi?? ph??ng kh??ch s???n ???????c c???p nh???t li??n t???c
        t???i th???i ??i???m qu?? kh??ch mu???n ?????t mua.
      </p>
      <h3>Danh S??ch Kh??ch S???n</h3>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ImageList cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

export default App;
