
import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log("Submitted:", inputValue);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-[10]">
   
      <div
        className="cursor-pointer text-3xl text-white"
        onClick={toggleMenu}
      >
        &#9776;
      </div>

     
      <div
        ref={menuRef}
        className={classNames(
          "fixed top-0 left-0 h-full w-64 bg-gray-800 p-4",
          {
            "hidden": !isOpen,
          }
        )}
      >
        {/* Close button */}
        <button
          className="text-red-600 mb-4 text-xl"
          onClick={handleCloseMenu}
        >
          Back
        </button>

        {/* Content */}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="textbox">
              Enter text:
            </label>
            <input
              className="w-full  border border-white rounded h-[200px] p-0"
              type="text"
              id="textbox"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HamburgerMenu;
