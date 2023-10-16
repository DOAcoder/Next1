import Icon1 from "@/assets/icons/Icon1"

const Kurslar = () => {
  return (
    <section id="kurslar" className="mt-[80px] h-[300px]">
      <div className="container">
        <div className="wrapper py-[100px]">
          <ul className="flex items-center w-[1000px] justify-between pr-[50px]">
            <li className="relative">
              <Icon1 />
              <p className=" absolute top-[35px] left-[45px] text-[25px] font-extrabold text-white w-[200px]">
                Kursning{" "}
                <span className="text-[25px] font-extrabold text-[#00E689]">
                  davomiyligi 1 oy
                </span>
              </p>
            </li>
            <li className="relative">
              <Icon1 />
              <p className=" absolute top-[35px] left-[45px] text-[25px] font-extrabold text-white w-[200px] ">
                Kursning{" "}
                <span className="text-[25px] font-extrabold text-[#00E689]">
                  davomiyligi 1 oy
                </span>
              </p>
            </li>{" "}
            <li className="relative ">
              <Icon1 />
              <p className=" absolute top-[35px] left-[45px] text-[25px] font-extrabold text-white w-[200px] ">
                Kursning{" "}
                <span className="text-[25px] font-extrabold text-[#00E689]">
                  davomiyligi 1 oy
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Kurslar;