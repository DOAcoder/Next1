

const Video = () => {
  return (
    <section className="mt-[80px]">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-center">
          <iframe
            width="1200"
            height="565"
            src="https://www.youtube.com/embed/Jyp3x_OVKU0?si=fr3dc5mt-2aSXny7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;