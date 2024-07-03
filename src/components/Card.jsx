import React from 'react'

const Card = ({ bg='bg-gray-100', role="Role", text="Text", btncolor="bg-black", btntext="Button" }) => {
    return (
        <>
            <div className= {` ${bg} p-6 rounded-lg shadow-md`}>
                <h2 className="text-2xl font-bold"> { role } </h2>
                <p className="mt-2 mb-4">
                    { text }
                </p>
                <a
                    href="/jobs.html"
                    className={ `inline-block ${btncolor} text-white rounded-lg px-4 py-2 hover:bg-gray-700 `} 
                >
                    { btntext }
                </a>
            </div>


        </>
    )
}

export default Card