/* eslint-disable @typescript-eslint/no-explicit-any */

type TStatusCard = {
    title : string;
    value : string | number;
    icon : any;
}

const StatusCard:React.FC<TStatusCard> = ({title, value, icon}) => {
    return (
        <div className="bg-gradient-to-r from-slate-50/70 to-green-50/70 border border-primary-10/30 rounded-xl p-3 font-Inter flex items-center gap-4">
            <div className="size-20 rounded-full flex items-center justify-center bg-white shadow shadow-green-600/30">
             {icon}
            </div>

            <div>
                <h1 className="text-2xl font-bold text-primary-10">{title}</h1>
                <h2 className="text-xl font-semibold text-neutral-10 mt-1">{value}+</h2>
            </div>
        </div>
    );
};

export default StatusCard;