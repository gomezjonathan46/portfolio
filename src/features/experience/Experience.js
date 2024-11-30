import Container from "./components/Container";

export default function Experience() {
  return (
    <>
      <Container
        title={"Application Engineer - I @ Vanguard"}
        date={"2021-2022"}
        location={"Malvern, PA"}
        url={"vanguard.com"}
        href={"https://investor.vanguard.com/corporate-portal"}
        description={
          `Developed full-stack financial technology secure feature components using modern single page application
          framework, Angular, and server-side nodejs.`
        }
        skillsArray={["Angular", "Node.js", "Typescript", "Git"]}
        company={"Vanguard"}
        logo={"Vanguard.svg"}
      />
      <Container
        title="Front-End Developer @ Brownstein Group"
        date="2018-2021"
        location="Philadelphia, PA"
        url="brownsteingroup.com"
        href={"https://www.brownsteingroup.com"}
        description="Developed banner and email advertisements, and web pages using HTML, CSS, JavaScript, and PHP."
        skillsArray={["HTML", "CSS", "JavaScript", "PHP", "Git"]}
        company={"Brownstein Group"}
        logo={"BG.png"}
      />
      <Container
        title="Client Services Analyst @ Hamilton Lane"
        date="2016-2018"
        location="Conshohocken, PA"
        url="hamiltonlane.com"
        href={"https://www.hamiltonlane.com/en-us"}
        description="Developed transactional pages to facilitate large settlements in the Private Equity industry."
        skillsArray={[
          "Problem Solving",
          "Analysis",
          "Communication",
          "Critical Thinking",
        ]}
        company={"Hamilton Lane"}
        logo={"HL.svg"}
      />
    </>
  );
}
