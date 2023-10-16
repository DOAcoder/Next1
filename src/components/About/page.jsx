import Pagination from '@/assets/icons/Pagination';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="mt-[100px]">
      <div className="container">
        <div className="py-[80px] flex flex-col items-center">
          <h2 className="text-white text-[25px] font-bold mb-[40px] text-center ">
            O’quvchilarimizning{" "}
            <span className="text-[#00E689] "> kurs haqidagi fikrlari</span>
          </h2>
          <div>
            <article className='w-[770px] text-white text-[20px] font-normal leading-[30px] mb-[20px] '>
            Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish
            imkonini bergan Robbimga hamdlar bo'lsin! Mening nazarimda bu
            bilimlar hozirgi kunda juda muhim.
          </article>
          <article className='w-[770px] text-white text-[20px] font-normal leading-[30px] mb-[40px] '>
            Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio,
            tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi
            mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan
            bo’lardilar deb o'ylayman.
          </article>
          <p className='text-[#FAA40C] font-bold text-[20px] leading-[30px] mb-[40px] '>Baxrom Abduqayyum</p>
          </div>
         <div > <Pagination/></div>
        </div>
      </div>
    </section>
  );
};

export default About;