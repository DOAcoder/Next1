"use client"

import Video from "@/components/Video/page"
import Kurslar from "@/components/Kurslar/page"
import Lessons from "@/components/Lessons/page";
import About from "@/components/About/page"


const page = () => {
  return (
    <div>
  <Video/>
  <Kurslar/>
  <Lessons/>
  <About/>
    </div>
  );
};

export default page;