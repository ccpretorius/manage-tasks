import Button from "./Button.jsx";
import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="An empty class list" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p classname="text-stone-400 mb-4">Select a project or get strated with a new one</p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}