export default function About() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="mb-[1.15rem] md:mb-0 h-52 w-52 rounded-full shadow-xl"
        src={require("./assets/me.png")}
        alt="Jonathan Gomez"
      />
      <div className="h-[1px] w-40 rounded-lg bg-black/25 md:hidden"></div>
      <p className="mt-4 md:mt-0">
        I began my career in Finance with a prestigious Private Equity firm in
        Philadelphia. However, I discovered my passion for technology too
        invigorating and empowering to ignore. With more than 5 billion
        estimated global internet users, there are phenomenal creative
        opportunities and a great demand for web developers. My transition into
        this field began with teaching myself the fundamentals of computer
        programming. I was determined and learned Python, which lead to my
        acceptance into Google's Front-End Web Developer Nanodegree Program,
        where I honed my skills in HTML, CSS, and JavaScript. With years of
        experience, I now employ my passion for technology using modern day
        solutions, such as React, to increase efficiencies and provide digital
        solutions to today's problems.
      </p>
    </div>
  );
}
