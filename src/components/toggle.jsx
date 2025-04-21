import React, { useState } from 'react'

function Toggle() {
    const [isOnline, setIsOnline] = useState(true)
    const toggleStatus = () => {
        setIsOnline(prev => !prev)
    }

    return (
        <div className="m-6 space-y-4">
            {/* Status Badge */}
            <div className="flex items-center space-x-2">
                <span
                    className={`h-3 w-3 rounded-full ${isOnline ? 'bg-lime-400' : 'bg-gray-600'
                        }`}
                ></span>
                <span className="text-lg font-medium">
                    {isOnline ? 'online' : 'Offline'}
                </span>
            </div>

            {/* Toggle Button */}
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isOnline}
                    onChange={toggleStatus}
                />
                <div className="group peer bg-white rounded-full duration-300 w-16 h-8 ring-2 ring-black after:duration-300 after:bg-black peer-checked:after:bg-lime-400 peer-checked:ring-lime-400 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
            </label>
        </div>
        
    )
}

export default Toggle
