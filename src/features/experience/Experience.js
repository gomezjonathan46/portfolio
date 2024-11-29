import Container from "./components/Container";

export default function Experience() {
  return (
    <>
      <Container
        title={"Application Engineer - I"}
        date={"2021-2022"}
        location={"Malvern, PA"}
        url={"Vanguard.com"}
        href={"https://investor.vanguard.com/corporate-portal"}
        description={
          "Some random details about the job I performed and blah blah blah afgwrbstbwrnbwrbgwebveargfeefbvsdfbwaefgbwrgbvfa"
        }
        skillsArray={["test2", "test", "data"]}
      />
      <Container
        title="Software Engineer Intern"
        date="2020-2021"
        location="New York, NY"
        url="Example.com"
        href={"https://investor.vanguard.com/corporate-portal"}
        description="Worked on cool projects as an intern."
        skillsArray={["Python", "Flask", "SQL"]}
      />
    </>
  );
}
