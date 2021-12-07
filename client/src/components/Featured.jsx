import Slider from "react-slick";
// Credit: https://react-slick.neostack.com/


export default function Featured() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="featured_shops">
      <h2>Featured Shops</h2>
    <Slider {...settings}>
        <div className="featured_image">
          <img src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638553296/Project%202/Screen_Shot_2021-12-03_at_12.41.33_PM_ubqcwr.png"
            width="300px"
          />
        <h3>Medley</h3>
      </div>
        <div className="featured_image">
          <img src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638552486/Project%202/Screen_Shot_2021-12-03_at_12.28.03_PM_fxfoyf.png"
            width="300px"
          />
        <h3>Whimsy + Row</h3>
      </div>
        <div className="featured_image">
          <img src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638551926/Project%202/Screen_Shot_2021-12-03_at_12.18.43_PM_cq0cye.png"
            width="300px"
          />
        <h3>Keap</h3>
      </div>
      </Slider>
      </div>
  );
}
