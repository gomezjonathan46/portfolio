export default function About() {
  return (
    <div className="mx-[5%] mt-10">
      <div className="right-border h-52 min-w-52 text-center sm:float-left sm:mr-5 sm:pr-5 md:h-56 md:w-56">
        <img
          className="mx-auto mb-[1.15rem] h-52 w-52 rounded-full shadow-xl md:mb-0 md:mr-[1.15rem]"
          src={require("./assets/me.png")}
          alt="Jonathan Gomez"
        />
      </div>
      <div className="h-56 lg:relative">
        <p className="mt-4 md:ml-4 md:mt-0 lg:absolute lg:left-[224px] lg:top-1/2 lg:-translate-y-1/2">
          I began my career in Finance with a prestigious Private Equity firm in
          Philadelphia. However, I discovered my passion for technology too
          invigorating and empowering to ignore. With more than 5 billion
          estimated global internet users, there are phenomenal creative
          opportunities and a great demand for web developers. My transition
          into this field began with teaching myself the fundamentals of
          computer programming. I was determined and learned Python, which lead
          to my acceptance into Google's Front-End Web Developer Nanodegree
          Program, where I honed my skills in HTML, CSS, and JavaScript. With
          years of experience, I now employ my passion for technology using
          modern day solutions, such as React, to increase efficiencies and
          provide digital solutions to today's problems.
        </p>
      </div>
    </div>
  );
}
