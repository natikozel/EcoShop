import GoogleAuth from "@/components/Auth/GoogleAuth";
import FacebookAuth from "@/components/Auth/FacebookAuth";

export default function ExternalAuth() {
    return (
        <div className="mt-6 flex flex-row flex-wrap">
            <GoogleAuth/>
            {/*<FacebookAuth/>*/}
        </div>
    );
}