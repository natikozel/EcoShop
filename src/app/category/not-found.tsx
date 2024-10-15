export default function NotFound() {
    return (
        <div className="min-h-screen max-w-full h-lvh w-lvw bg-gray-100">
            <div
                className="h-full w-full">
                <div
                    className="flex flex-wrap justify-center content-center flex-col w-full h-full bg-white p-8 rounded-lg shadow-md text-center">
                    <h1 className="text-3xl font-bold text-gray-800">404 - Page Not Found</h1>
                    <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    );
}