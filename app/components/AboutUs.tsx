import { LuCrown, LuStar, LuThumbsUp, LuTrophy } from "react-icons/lu";

interface AboutProps {
  id: number;
  heading: string;
  FirstLine: string;
  SecondLine: string;
}

const aboutus: AboutProps[] = [
  {
    id: 1,
    heading: "170K+",
    FirstLine: "Websites Built",
    SecondLine: "by Jupiter X",
  },
  {
    id: 2,
    heading: "48K",
    FirstLine: "5-star reviews",
    SecondLine: "on Themeforest",
  },
  {
    id: 3,
    heading: "No.1",
    FirstLine: "Most preferred",
    SecondLine: "theme by Freelancers",
  },
  {
    id: 4,
    heading: "10+ years",
    FirstLine: "Top selling theme",
    SecondLine: "since 2013",
  },
];

const AboutUs = () => {
  return (
    <div className="mt-24 mb-16 mx-4 lg:mx-0">
      <div
        style={{
          backgroundImage: "url(/image-3451.jpg)",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row"
      >
        {/* Mapping over the about us array */}
        {aboutus.map((about: AboutProps, idx: number) => (
          <div
            className="flex justify-between h-96 lg:w-[26%] w-full lg:m-2 my-2 lg:mt-36 bg-none"
            key={idx}
          >
            <div
              style={{ boxShadow: "0px 18px 46px 0px rgba(0, 0, 0, 0.07)" }}
              className="bg-none border border-white rounded-2xl w-full flex flex-col justify-center items-center"
            >
              {about.id == 1 && (
                <div className="bg-[#3613fa] mt-10 text-white rounded-2xl text-4xl h-16 w-16 flex items-center justify-center">
                  <LuCrown />
                </div>
              )}
              {about.id == 2 && (
                <div className="bg-[#46b1ff] mt-10 text-white rounded-2xl text-4xl h-16 w-16 flex items-center justify-center">
                  <LuStar />
                </div>
              )}
              {about.id == 3 && (
                <div className="bg-[#46b1ff] mt-10 text-white rounded-2xl text-4xl h-16 w-16 flex items-center justify-center">
                  <LuThumbsUp />
                </div>
              )}
              {about.id == 4 && (
                <div className="bg-[#fc4cda] mt-10 text-white rounded-2xl text-4xl h-16 w-16 flex items-center justify-center">
                  <LuTrophy />
                </div>
              )}

              <div className="my-10 text-center">
                <h2 className="font-extrabold text-6xl">{about.heading}</h2>
                <p className="pt-10 text-[#212529]">
                  {about.FirstLine} <br /> {about.SecondLine}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
