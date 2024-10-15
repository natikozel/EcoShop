export default function NewsLetter() {
    return (
        <div className={"relative"}>
            <h4 className="text-lg font-semibold mb-4">הירשם לעדכונים</h4>
            <form className="bg-white flex rounded-full w-full border-2 flex-row">
                <input
                    type="email"
                    placeholder="האימייל שלך"
                    className="w-full bg-transparent px-4 py-2 rounded-md rounded-r-none text-gray-900 focus:outline-none mb-0"
                />
                <button
                    type="submit"
                    className="bg-indigo-600 rounded-full hover:bg-indigo-700 text-white font-bold py-2 px-4 transition-colors"
                >
                    הירשם
                </button>
            </form>
        </div>
    );
}