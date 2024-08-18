

export default function SimpleSkeleton({height}){
    return(
        <div className="bg-slate-300 animate-pulse rounded-xl w-full"
        style={{ height: `${height}px` }}>
        </div>
    )
}