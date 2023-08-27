import laptop from "../assets/image/laptop.jpg";

export default function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto  md:grid grid-cols-2 selection:bg-black selection:text-[yellow]">
      <div className="m-2 col-span-1 md:w-[80%]">
        <img src={laptop} alt="" />
      </div>
      <div className=" mx-5 my-9 col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold my-2 ">LEARN FROM EXPERTS</h1>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, laborum labore, exercitationem a perspiciatis minus saepe reprehenderit vel assumenda dicta deserunt qui eveniet. Culpa nam quibusdam placeat recusandae odio ratione earum assumenda impedit dolorum?</p>
        <button className="w-[120px] bg-black text-white rounded py-2 px-5">Get Started</button>
      </div>
    </div>
  );
}
