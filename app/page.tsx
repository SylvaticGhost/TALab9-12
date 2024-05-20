'use client';
import React, {useState} from "react";
import ShipComponent from "@/components/shipComponent";

import bubbleSort from "@/lib/sorts/simple-sorts/bubbleSort";
import countingSort from "@/lib/sorts/simple-sorts/countingSort";
import insertSort from "@/lib/sorts/simple-sorts/insertSort";
import quickSort from "@/lib/sorts/quickSort";
import smoothSort from "@/lib/sorts/sort-for-large/smoothSort";
import mergeSort from "@/lib/sorts/sort-for-large/mergeSort";
import FleetComponent from "@/components/fleetComponent";
import radixSort from "@/lib/sorts/sort-for-long-key/radixSort";
import bucketSort from "@/lib/sorts/sort-for-long-key/bucketSort";

const views: string[] = ['ship', 'fleet'];

export default function Home() {

    const [armada, setArmada] = useState<number[]>([200, 400, 600, 800]);
    const [shipToAdd, setShipToAdd] = useState<number>(0);
    const [sortMethod, setSortMethod] = useState<string>('bubble');
    const [time, setTime] = useState<string>('-');
    
    const [view, setView] = useState<string>(views[0])

    const [shipToAddRandom, setShipToAddRandom] = useState<number>(0);
    const [typeOfGeneratingArray, setTypeOfGeneratingArray] = useState<string>('random');

    const typeOfSort: string[] = ['bubble', 'counting', 'insert', 'quick', 'smooth', 'merge','radix', 'bucket'];
    
    const typeOfGeneratingArrays: string[] = ['random', 'sorted', 'reversed', 'almost sorted', 'always same'];
    

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
            case 'heap':
                await sortContext(smoothSort)
                break;
            case 'merge':
                await sortContext(mergeSort)
                break;
            case 'radix':
                await sortContext(radixSort)
                break;
            case 'bucket':
                await sortContext(bucketSort)
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
            <header className="header-style">
                <div className="mt-2 mx-5 flex flex-row-reverse">
                    <div className="flex flex-row">
                        <p className="flex items-center mr-1">view:</p>
                        <select value={view} onChange={(e) => setView(e.target.value)}
                                className="border border-gray-400 rounded px-2 py-1">
                            {views.map((view, index) => (
                                <option key={index} value={view}>{view}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </header>
            <div className="mb-10">
                <h3 className="font-semibold text-xl">Список {view === 'ship' ? 'Кораблів' : 'Флотів'}</h3>
                <div className="flex flex-row flex-wrap items-center justify-between my-2">
                    {armada.slice(0, 100).map((sailors, index) => (
                        <button key={index}>
                            {
                                view === 'ship' ?
                                    <ShipComponent sailors={sailors} key={index}/>
                                    :
                                    <FleetComponent sailors={sailors} key={index}/>
                            }
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
                    Додати {view === 'ship' ? 'Корабель' : 'Флот'}
                </button>
                <input
                    type="number"
                    value={shipToAdd}
                    min={0}
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
                <h3 className="text-lg font-semibold">Додати певну кількість {view === 'ship' ? 'Кораблів' : 'Флотів'} з випадковою кількістю
                    моряків </h3>
                <div className="flex flex-row justify-center my-2 ">
                    <input
                        type="number"
                        value={shipToAddRandom}
                        min={0}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setShipToAddRandom(parseInt(e.target.value))
                        }}
                        className="border border-gray-400 rounded px-2 py-1 ml-2 mr-4 mt-2 w-24"
                    />
                    <select value={typeOfGeneratingArray} onChange={(e) => setTypeOfGeneratingArray(e.target.value)}
                            className="border border-gray-400 rounded px-2 py-1 mr-2">
                        {typeOfGeneratingArrays.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white base-for-button" onClick={event => {
                        randomAddShips(shipToAddRandom);
                    }}>
                        Додати {view === 'ship' ? 'Кораблі' : 'Флоти'}
                    </button>
                </div>
            </div>
        </main>
    );

    function randomAddShips(n: number) {
        const ships = new Array(n)
        
        let k = 10;
        if (typeOfGeneratingArray === 'always same') 
            k = 50
        else 
            k = 300;
        
        if (view === 'fleet')
            k *= 20;
        
        for (let i = 0; i < n; i++) {
            ships[i] = Math.floor(Math.random() * k);
        }
        let arr: number[] = [...armada, ...ships];
        
        if (typeOfGeneratingArray === 'sorted') { 
            arr.sort((a, b) => a - b);
        }
        else if (typeOfGeneratingArray === 'reversed') {
            arr.sort((a, b) => b - a);
        }
        else if (typeOfGeneratingArray === 'almost sorted') {
            arr = sortPart(arr);
        }
        
        setArmada(arr);
    }
    
    function sortPart(arr: number[]) {
        const start = Math.floor(arr.length / 3);
        const end = Math.floor(arr.length / 3 * 2);
        const part = arr.slice(start, end);
        const sortedPart = part.sort((a, b) => a - b);
        return [...arr.slice(0, start), ...sortedPart, ...arr.slice(end)];
    }
}
