import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Mixer: React.FC = () => {
    return (
        <main
            className="flex flex-col items-center justify-center w-[311px] h-[381px] flex-1 border overflow-y-scroll rounded-xl gap-3 p-1.5">
            <div className="flex flex-row items-center justify-center w-11/12 h-2/6 flex-1 border-2 border-black rounded-xl gap-3">
                <div className="flex flex-col items-center justify-center w-3/5 h-full flex-1 border-2 border-black rounded-xl">

                </div>
                <div className="flex flex-col items-center justify-center w-auto h-full flex-1 border-2 border-black rounded-xl gap-3">
                    <div className="flex flex-col items-center justify-center w-full h-full flex-1 border-2 border-black rounded-xl">
                        <h3>corgifi.co</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full flex-1 border-2 border-black rounded-xl">
                        <FontAwesomeIcon icon={['fab', 'spotify']}/>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center w-11/12 h-1/6 flex-1 border-2 border-black rounded">

            </div>
            <div
                className="flex flex-col items-center justify-center w-11/12 h-3/6 flex-1 border-2 border-black rounded">

            </div>
        </main>
    )
}