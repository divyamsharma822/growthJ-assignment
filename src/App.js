import "./App.css";
import { IoIosCopy } from "react-icons/io";
import { useState } from "react";

function App() {
    const [slider, setslider] = useState(4);

    return (
        <div className='min-w-screen flex items-center justify-center min-h-screen bg-black'>
            <div className='bg-[#24232b] flex flex-col w-full max-w-sm p-[24px]'>
                <div className='flex items-center justify-between mb-[32px]'>
                    <div className='text-white'>PS3&SVBIA</div>
                    <IoIosCopy
                        size={30}
                        className='text-[#919195]'
                    />
                </div>
                <div className='flex items-center justify-between mb-1'>
                    <div className='text-[#707070]'>Character Length</div>
                    <div className='text-white'>{slider}</div>
                </div>
                <input
                    type='range'
                    min='1'
                    max='50'
                    value={slider}
                    className='accent-[#2a8b8b] mb-[24px]'
                    onChange={(e) => setslider(e.target.value)}
                />
                <div className='options flex flex-col items-start text-[#79797e] text-sm mb-[24px]'>
                    {["Include UpperCase Letters", "Include Lowercase Letters", "Include Numbers", "Include Symbols"].map((curr) => (
                        <div className='flex items-center mb-[12px]'>
                            <label class='container flex items-center gap-1'>
                                <input
                                    type='checkbox'
                                    className='accent-[#2a8b8b]'
                                />
                                <span class='checkmark'></span>
                                {curr}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='bg-[#16161c] text-[#79797e] rounded-md flex justify-between p-3 items-center mb-[12px]'>
                    <div>STRENGTH</div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm'>Poor</div>
                        <div className='flex gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 10 10'
                                width='10'
                                height='10'
                                overflow='visible'
                                stroke='#8a0000'
                                stroke-width='5'
                                stroke-linecap='round'>
                                <line
                                    x1='0'
                                    y1='0'
                                    x2='10'
                                    y2='0'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 10 10'
                                width='10'
                                height='10'
                                overflow='visible'
                                stroke='#8a0000'
                                stroke-width='5'
                                stroke-linecap='round'>
                                <line
                                    x1='0'
                                    y1='0'
                                    x2='10'
                                    y2='0'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 10 10'
                                width='10'
                                height='10'
                                overflow='visible'
                                stroke='#515156'
                                stroke-width='5'
                                stroke-linecap='round'>
                                <line
                                    x1='0'
                                    y1='0'
                                    x2='10'
                                    y2='0'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 10 10'
                                width='10'
                                height='10'
                                overflow='visible'
                                stroke='#515156'
                                stroke-width='5'
                                stroke-linecap='round'>
                                <line
                                    x1='0'
                                    y1='0'
                                    x2='10'
                                    y2='0'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 10 10'
                                width='10'
                                height='10'
                                overflow='visible'
                                stroke='#515156'
                                stroke-width='5'
                                stroke-linecap='round'>
                                <line
                                    x1='0'
                                    y1='0'
                                    x2='10'
                                    y2='0'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='bg-[#2a8b8b] text-white text-center rounded-md py-2'>GENERATE</div>
            </div>
        </div>
    );
}

export default App;
