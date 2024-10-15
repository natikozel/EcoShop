import Link from "next/link";

export default function Title() {
    return (
        <div className=" flex justify-center md:justify-end">
            <Link href="/" className="text-2xl font-bold"><span
                className={"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-400"}>{`אופנה יד שנייה בסטייל`}</span></Link>
        </div>
    );
}