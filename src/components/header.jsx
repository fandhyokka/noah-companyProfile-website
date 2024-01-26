import images from "../images";
import useMediaQuery from "../hooks/useMediaQuery";

const Hero = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <header className="pt-10 mx-auto w-5/6">
      <div>
        <div className={isAboveLarge ? "flex flex-row items-center" : "flex flex-col"}>
          <div className="basis-3/6">
            <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "50px", color: "#211F60" }}>Noah’s Sport Club</h1>
          </div>
          <div className="basis-3/6 text-justify">
            <p className="text-black text-base font-inter font-normal break-words">
              Welcome to Noah's Sport Club, where the spirit of water sports comes alive with passion, expertise, and a splash of adventure! At Noah's, we pride ourselves on being more than just a club; we're a community of water
              enthusiasts dedicated to making every wave count.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <img src={images.Hero} alt="Header" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
