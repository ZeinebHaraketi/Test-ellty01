import Button from "./components/Button";
import Desktop from "./components/Desktop/Desktop";
import HomePage from "./components/Home/Home";
import Framer from "./components/Framer";

export default function Home() {
  return (
    <div className="flex flex-row gap-16 justify-center items-start min-h-screen py-12 bg-[#f7f7f7]">
      {/* Colonne gauche : Button et Desktop côte à côte */}
      <div className="flex flex-row gap-8 items-start">
        <Button />
        <Desktop />
      </div>

      {/* Colonne centrale : HomePage */}
      <div>
        <HomePage />
      </div>

      {/* Colonne droite : Framer */}
      <div>
        <Framer />
      </div>
    </div>
  );
}
