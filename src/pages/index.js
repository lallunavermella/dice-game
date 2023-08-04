import { rollDice, selectBoardState, selectDiceState } from "@/store";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const currentRoll = useSelector(selectDiceState);
  const boardPosition = useSelector(selectBoardState);
  const dispatch = useDispatch();

  const tableGame = Array.from({ length: 100 }, (_, index) => index + 1);

  const handleIsActive = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    dispatch(rollDice(roll));
  };

  if (boardPosition === 100) {
    alert("HAS LLEGADO AL FIN DEL TABLERO");
  }

  return (
    <>
      <div className="flex flex-col m-4 items-center">
        ROLL DICE GAME
        <div className="flex flex-col">
          Si sacas un numero entre 1 y 2 avanza 1 posicion, si sacas 3 o 4,
          avanza 3 posiciones, si el resultado del dado es mayor que 4 avanza 5
          posiciones
        </div>
        <button
          className="border w-20 h-20 border-blue-500 rounded-lg p-4 m-4 hover:bg-blue-300"
          onClick={handleIsActive}
        >
          {currentRoll}
        </button>
        <div className="flex shrink-0 flex-wrap">
          {tableGame.map((el, index) => (
            <div key={el} className="flex w-20 h-20 border border-red-700 m-2">
              <div
                className={
                  boardPosition === index + 1 ? "bg-red-300 w-full" : ""
                }
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
