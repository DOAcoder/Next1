import Right_arrow from "@/assets/icons/Right_arrow";
import Logo from "@/assets/icons/Logo";
import Link from "next/link";
const Header = () => {
  return (
    <section id="header" className="h-[950px]">
      <div className="container mx-auto px-5">
        <div className="pt-[40px]">
          <Link href="/">
            <Logo />
          </Link>
          <h1 className="mt-[215px] w-[525px] text-white font-bold text-[45px] mb-[20px]">
            Abdukarim Mirzayev bilan
            <span className="text-[#00E689]">storytelling</span> kursi...
          </h1>

          <p className="mb-[40px] text-white w-[432px] text-[16px] font-bold leading-[24px]">
            Ushbu kurs yordamida jozibali gapirish, sahnada va kamera qarshisida
            hayajonlanmaslik, vizual kompozitsiya va ovozlashtirish sirlarini
            bilib olasiz.
          </p>
          <button className="bg-[#FAA40C] flex items-center gap-[5px] py-[14px] pl-[25px] pr-[21px] text-[16px] font-bold cursor-pointer">
            Guruhga qo’shilish <Right_arrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
