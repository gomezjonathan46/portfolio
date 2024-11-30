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
          "Some random details about the job I performed and blah blah blah Some random details about the job I performed and blah blah blah"
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
        description="Some random details about the job I performed and blah"
        skillsArray={["HTML", "CSS", "JavaScript", "Git"]}
        company={"Brownstein Group"}
        logo={"BG.png"}
      />
      <Container
        title="Client Services Analyst @ Hamilton Lane"
        date="2016-2018"
        location="Conshohocken, PA"
        url="hamiltonlane.com"
        href={"https://www.hamiltonlane.com/en-us"}
        description="Some random details about the job I performed and blah"
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
