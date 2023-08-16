import React, { useState, useEffect } from "react";

function Home({ userDetails }) {
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            resetTimer();
            setMinutes(5);
            alert("Break time!");
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center">
        <div className="text-4xl font-bold mr-2">
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
        </div>
        <button
          className={`text-lg font-semibold py-2 px-4 rounded-md ${
            isActive ? "bg-red-500" : "bg-green-500"
          }`}
          onClick={toggleTimer}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          className="text-lg font-semibold py-2 px-4 rounded-md bg-gray-500 ml-2"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>

      <div className="flex mt-12">
        <div className="flex-1.5 overflow-hidden relative border-tl-[50px] border-bl-[50px]">
          <img
            className="w-[160%] absolute left-[-60px] top-[-50px] rounded-full"
            src="./images/profile.jpg"
            alt="login"
          />
        </div>
        <div className="flex-2 flex flex-col items-center justify-center">
          <button
            className="text-lg font-semibold py-3 px-6 text-white bg-yellow-500 rounded-lg mt-4 outline-none border-none cursor-pointer"
            onClick={logout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
