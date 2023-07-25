import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import {sliderItems} from './data'


const Slider = () => {
  return (
    <Container>
      <MDBCarousel showControls showIndicators dark fade>
        {sliderItems.map((item) => (
          <MDBCarouselItem
          itemId={item.id}
          src={item.img}
          alt="..."
          key={item.id}
        >
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <MDBBtn color="dark">Shop Now</MDBBtn>
        </MDBCarouselItem>
        ))}
        
        
      </MDBCarousel>
    </Container>
  );
};

export default Slider;
