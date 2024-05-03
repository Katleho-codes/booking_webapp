import React from 'react'

type TContainer = {
    children: React.ReactNode
}
function Container({ children }: TContainer) {
    return (
        <div className='mx-auto container p-2'>
            {children}
        </div>
    )
}

export default Container
