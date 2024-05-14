import React from 'react'

type TContainer = {
    children: React.ReactNode
}
function Container({ children }: TContainer) {
    return (
        <div className='w-[90%] mx-auto p-2'>
            {children}
        </div>
    )
}

export default Container
