'use client';
import React, {useState} from "react";
import ShipComponent from "@/components/shipComponent";
// @ts-ignore
import bubbleSort from "@/lib/sorts/simple-sorts/bubbleSort";
// @ts-ignore
import countingSort from "@/lib/sorts/simple-sorts/countingSort";
import insertSort from "@/lib/sorts/simple-sorts/insertSort";
import quickSort from "@/lib/sorts/quickSort";


export default function Home() {

    const [armada, setArmada] = useState<number[]>([200, 400, 600, 800]);
    const [shipToAdd, setShipToAdd] = useState<number>(0);
    const [sortMethod, setSortMethod] = useState<string>('bubble');
    const [time, setTime] = useState<string>('-');

    const [shipToAddRandom, setShipToAddRandom] = useState<number>(0);

    const typeOfSort: string[] = ['bubble', 'counting', 'insert', 'quick'];

    const addShip = () => {
        if (shipToAdd <= 0) {
            alert('Кількість моряків має бути більше 0');
            return;
        }

        setArmada([...armada, shipToAdd]);
    }

    const sortList = async () => {
        switch (sortMethod) {
            case 'bubble':
                await sortContext(bubbleSort);
                break;
            case 'counting':
                await sortContext(countingSort);
                break;
            case 'insert':
                await sortContext(insertSort);
                break;
            case 'quick':
                await sortContext(quickSort)
                break;
            default:
                alert('Невідомий метод сортування');
                break;
        }
    }

    async function sortContext(func: (arr: number[]) => number[]) {
        setTime('Processing...');
        await new Promise(resolve => setTimeout(resolve, 0));
        const start = window.performance.now();
        const result = func(armada);
        const end = window.performance.now();
        const time = end - start;
        setArmada(result);
        setTime(time.toFixed(2) + ' ms');
    }

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="mb-10">
                <h3 className="font-semibold text-xl">Список кораблів</h3>
                <div className="flex flex-row flex-wrap items-center justify-between my-2">
                    {armada.slice(0, 100).map((sailors, index) => (
                        <button>
                            <ShipComponent key={index} sailors={sailors}/>
                        </button>
                    ))}
                    {armada.length > 100 && <p>...</p>}
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
                <div className="flex-row mr-5">
                    <h3>Метод сортування</h3>
                    <select value={sortMethod} onChange={(e) => setSortMethod(e.target.value)}
                            className="border border-gray-400 rounded px-2 py-1">
                        {typeOfSort.map((sort, index) => (
                            <option key={index} value={sort}>{sort}</option>
                        ))}
                    </select>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white base-for-button mx-2" onClick={sortList}>
                    Сортувати
                </button>
            </div>
            <div className="flex flex-row text-xl">
                <p className="font-semibold mr-3">Час: </p><a>{time}</a>
            </div>
            <div className="my-5 center-conten">
                <h3 className="text-lg font-semibold">Додати певну кількість кораблів з випадковою кількістю
                    моряків </h3>
                <div className="flex flex-row justify-center ">
                    <input
                        type="number"
                        value={shipToAddRandom}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setShipToAddRandom(parseInt(e.target.value))
                        }}
                        className="border border-gray-400 rounded px-2 py-1 ml-2 mr-4 mt-2"
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white base-for-button" onClick={event => {
                        randomAddShips(shipToAddRandom);
                    }}>
                        Додати кораблі
                    </button>
                </div>
            </div>
        </main>
    );

    function randomAddShips(n: number) {
        const ships = new Array(n)
        for (let i = 0; i < n; i++) {
            ships[i] = Math.floor(Math.random() * 1000);
        }
        setArmada([...armada, ...ships]);
    }
}
