
const CardNumber = ({ children }) => {
    return (
        <h4 className="text-2xl  md:text-4xl text-gray-400 tracking-tighter   mb-3">[{children}]</h4>
    )
}

const CardTitle = ({children}) => {
    return (
        <h4 className="text-2xl  md:text-4xl font-bold tracking-tighter   mb-3">
{children}
        </h4>
    )
}

export {CardTitle, CardNumber};