'use client';
import React, {useState} from "react";
import ShipComponent from "@/components/shipComponent";
import bubbleSort from "@/lib/sorts/simple-sorts/BubbleSort";
import countingSort from "@/lib/sorts/simple-sorts/CountingSort";

export default function Home() {
  
  const [armada, setArmada] = useState<number[]>([200, 400, 600, 800]);
  const [shipToAdd, setShipToAdd] = useState<number>(0);
  const [sortMethod, setSortMethod] = useState<string>('bubble');
  
  const typeOfSort: string[] = ['bubble', 'counting'];
  
  const addShip = () => { 
      if (shipToAdd <= 0) {
          alert('Кількість моряків має бути більше 0');
          return;
      }
      
      setArmada([...armada, shipToAdd]);
  }
  
  const sortList = () => {
      switch (sortMethod) { 
          case 'bubble':
              setArmada(bubbleSort(armada));
              break;
          case 'counting':
              setArmada(countingSort(armada));
              break;
          default:
              alert('Невідомий метод сортування');
              break;
      }
  }
  
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="mb-10">
        <h3 className="font-semibold">Список кораблів</h3>
        <div className="flex flex-row items-center justify-between my-2">
          {armada.map((sailors, index) => (
            <button>
                <ShipComponent key={index} sailors={sailors}/>
            </button>
          ))}
        </div>
      </div>
      <div>
          <button className="bg-amber-600 text-white base-for-button hover:bg-amber-700 mx-10"
          onClick={event => {
                setArmada([200, 400, 600, 800]);
          }}>
              До початкового списку
          </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white base-for-button" onClick={addShip}>
          Додати корабель
        </button>
        <input
          type="number"
          value={shipToAdd}
          onChange={(e) => setShipToAdd(parseInt(e.target.value))}
          className="border border-gray-400 rounded px-2 py-1 ml-2"/>  
      </div>
      <div className="my-10 flex flex-row">
          <div className="flex-row">
              <h3>Метод сортування</h3>
              <select value={sortMethod} onChange={(e) => setSortMethod(e.target.value)} className="border border-gray-400 rounded px-2 py-1">
                    {typeOfSort.map((sort, index) => (
                        <option key={index} value={sort}>{sort}</option>
                    ))}
              </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white base-for-button mx-2" onClick={sortList}>
                Сортувати
            </button>
      </div>  
    </main>
  );
}
