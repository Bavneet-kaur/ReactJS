import React from 'react';

function Status({ status }) {
    let color = "";
    let emoji = "";

    if (status === "active") {
        color = "text-green-600";
        emoji = "✅";
    } else if (status === "inactive") {
        color = "text-gray-500";
        emoji = "⚪";
    } else if (status === "banned") {
        color = "text-red-600";
        emoji = "❌";
    }

    return (
        <div className="m-4 inline">
            <span className={`font-semibold ${color}`}>
                {emoji} {status}
            </span>
        </div>
    );
}

export default Status;
