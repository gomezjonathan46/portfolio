import DayNightToggle from "./DayNightToggle";

export default function Nav() {
    return(
        <div className="flex">
            <span className="google-font text-3xl">Jonathan Gomez</span>
            <DayNightToggle/>
        </div>
    );
};