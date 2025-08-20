import React from "react";

const About = () => {
  return (
    <div className="mt-15 px-20 ">
      <div className="text-[32px] w-fit g mx-auto lg:mx-0 lg:block font-bold">
        Little Lemon
      </div>
      <div className="smF g w-fit mx-auto lg:mx-0 lg:block mb-5">Chicago</div>
      <section className="w-[80vw] mx-auto lg:mx-0 grid lg:grid-cols-2 lg:gap-x-5">
        <article className="flex flex-col justify-center-center mb-6">
          <p className="text-[16px] lg:text-[20px]">
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
          </p>
        </article>
        <article className="flex justify-center relative lg:bottom-25">
          <img
            src="
          https://little-lemon-restaurant-project.netlify.app/static/media/Adrian.8f12a8b83a103528a1a3.jpg"
            alt="badboy"
            className="w-[160px] lg:w-[250px] rounded-sm"
          />
          <img
            src="
          https://little-lemon-restaurant-project.netlify.app/static/media/Mario.82818a0733697e5434bf.jpg"
            alt="cola "
            className="w-[160px] lg:w-[250px] z-10 relative top-20 right-7 rounded-sm"
          />
        </article>
      </section>
    </div>
  );
};

export default About;
