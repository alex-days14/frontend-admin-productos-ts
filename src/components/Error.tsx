import { PropsWithChildren } from 'react'

function Error({children}: PropsWithChildren) {
    return (
        <div className=' my-3 p-4 bg-[length:200%_200%] bg-gradient-to-t from-white to-rose-100 font-semibold border-l-8 border-rose-500 rounded-xl  text-[#161F3B]'>
            {children}
        </div>
    )
}

export default Error
