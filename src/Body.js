import "./body.css";
import picOne from "./picOne.png";
import picTwo from "./picTwo.png";

function BodyText() {
  return (
    <section className="body-text">
      <div className="container ">
        <h2>Starting a WordPress Site with a Simple Theme</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
  );
}

function Image(props) {
  return (
    <div class="col">
      <h3>{props.text}</h3>
      <div className="imageContainer">
        <img src={props.image} />
      </div>
    </div>
  );
}

function ImageContainer() {
  var firstPicText = "1. Modern Portfolio Pro";
  var secondPicText = "2. Camellia";

  return (
    <section className="PortContainer ">
      <div className="container">
        <Image image={picOne} text={firstPicText}></Image>

        <Image image={picTwo} text={secondPicText}></Image>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="CallToAction container">
      <div className="cta-container">
        <h2>THE ULTIMATE WORDPRESS TOOLKIT</h2>
        <p>
          Editorial Staff at WPBeginner is a team at WordPress experts led by
          Syed Balkhi. Page maintained by Syed Balkhi.
        </p>
        <a href="#">DOWNLOAD NOW</a>
      </div>
    </section>
  );
}

function Body() {
  return (
    <>
      <BodyText />
      <ImageContainer />
      <CallToAction />
    </>
  );
}
export default Body;
