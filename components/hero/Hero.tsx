import Card from "../Card";

export default function Hero() {
  return (
    <Card>
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </Card>
  );
}
