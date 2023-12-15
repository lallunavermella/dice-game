import { useState, useEffect } from "react";
import { rollDice, selectBoardState, selectDiceState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export const TITLE = "ROLL DICE GAME";
export const SUBTITLE =
  " Si sacas un numero entre 1 y 2 avanza 1 posicion, si sacas 3 o 4,avanza 3 posiciones, si el resultado del dado es mayor que 4 avanza 5 posiciones";
export const ALERT = "HAS LLEGADO AL FIN DEL TABLERO";

export default function Home() {
  const currentRoll = useSelector(selectDiceState);
  const boardPosition = useSelector(selectBoardState);
  const dispatch = useDispatch();

  const [isRolling, setIsRolling] = useState(false);
  const [rolledNumber, setRolledNumber] = useState(currentRoll);

  useEffect(() => {
    if (currentRoll !== rolledNumber) {
      setIsRolling(true);
      setTimeout(() => {
        setRolledNumber(currentRoll);
        setIsRolling(false);
      }, 500);
    }
  }, [currentRoll, rolledNumber]);

  const handleIsActive = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    dispatch(rollDice(roll));
  };

  return (
    <>
      <div className="flex flex-col m-4 items-center">
        <h1 className="text-lg">{TITLE}</h1>
        <div className="flex flex-col">{SUBTITLE}</div>
      </div>
      <div className="flex flex-col items-center">
        <button
          className="border w-20 h-20 border-blue-500 rounded-lg p-4 m-4 hover:bg-blue-300"
          onClick={handleIsActive}
        >
          <div
            className={`transition-transform duration-500 ${
              isRolling ? "animate-ping" : ""
            }`}
          >
            {rolledNumber !== 0 ? rolledNumber : "Play"}
          </div>
        </button>
        <div className="grid lg:grid-cols-10 sm:grid-cols-5 grid-cols-2">
          {Array.from({ length: 100 }, (_, index) => (
            <div
              key={index + 1}
              className="flex w-20 h-20 border border-red-700 m-2 rounded-lg"
            >
              <div
                className={`${
                  boardPosition === index + 1
                    ? "transition-transform duration-500 bg-red-300 w-full rounded-lg flex justify-center items-center"
                    : "flex justify-center w-full items-center"
                }`}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
