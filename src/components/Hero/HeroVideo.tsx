export default function HeroVideo() {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            // poster="/placeholder.svg?height=1080&width=1920"
        >
            <source src="/herovideo.mp4" type="video/mp4"/>
            הדפדפן שלכם אינו תומך בסרטונים.
        </video>
    );
}