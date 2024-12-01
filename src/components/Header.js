export default function Header({ text, id, lightDarkMode }) {
  return (
    <h1
      className={`mb-[5%] ml-[5%] mt-[15%] text-3xl sm:mt-[10%] sm:text-5xl md:mt-[5%] ${lightDarkMode === "light" ? "text-black" : "text-white"}`}
      id={id}
    >
      <strong>{text}</strong>
    </h1>
  );
}
