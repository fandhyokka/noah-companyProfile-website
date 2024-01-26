import images from "../images";
import useMediaQuery from "../hooks/useMediaQuery";

const Welcome = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="mx-auto mt-40 w-5/6">
      <div className="flex justify-center">
        <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "50px", color: "#211F60", paddingBottom: "2em" }}>
          Welcome to <span className="bg-blue text-white p-3">Noah’s Sport Club</span>
        </h1>
      </div>
      <div className={isAboveLarge ? "grid grid-cols-2 gap-4 auto-rows-min" : "flex flex-col gap-4"}>
        <img src={images.About} alt="Header" style={{ width: "100%", height: "100%" }} />
        <p className="text-black text-base text-justify font-inter font-normal break-words">
          Welcome to Noah's Sport Club, where the spirit of water sports comes alive with passion, expertise, and a splash of adventure! At Noah's, we pride ourselves on being more than just a club; we're a community of water enthusiasts
          dedicated to making every wave count. Our journey began with a vision to create a space where individuals could embrace the joy of water sports, learn new skills, and forge lasting connections with like-minded adventurers.
          <br></br>
          <br></br>
          What sets Noah's Sport Club apart is our unwavering commitment to excellence. Affiliated with PBPODSI Indonesia, we bring a level of professionalism, safety, and adherence to national sports standards that ensures a safe and
          rewarding experience for our members. Our extensive collection of high-quality equipment, sourced from renowned global brands, reflects our dedication to providing top-notch resources for an unparalleled water sports journey.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
