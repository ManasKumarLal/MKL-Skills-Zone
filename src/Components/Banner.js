import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <div className="selection:bg-black selection:text-[red]">
      <div className="bg-[#2699fb] w-full pt-[180px] pb-[240px]">
        <div className="max-w-[1240px] mx-auto text-center font-bold my-[100px]">
          <div className="md:text-3xl text-2xl">Learn with us</div>
          <div className="text-white md:text-[70px] text-[50px] mt-4">
            Grow with us.
          </div>
          <div className="md:text-[50px] text-[40px] text-white mt-4">
            Learn{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Development",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Android Development",
                1000,
                "Block chain Development",
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "50px", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <button className="w-[140px] bg-black text-white rounded py-3 mt-5 px-5">Get Started</button>
        </div>
      </div>
    </div>
  );
}
