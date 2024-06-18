import { useApp } from "@/contexts/AppContext";

const HamburgerMenu = () => {
  const { isOpen, setIsOpen } = useApp();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="p-2 flex items-center justify-center">
      <div className="space-y-1 cursor-pointer z-50" onClick={toggleMenu}>
        <div
          className={`w-8 h-1 bg-secondary transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-[1px]" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-secondary transform transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-secondary transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-[14px]" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
