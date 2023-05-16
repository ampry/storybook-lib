import Disclaimer from "@/components/Disclaimer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Logos from "@/components/Logos";
import Text from "@/components/Text";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Text />
      <Logos />
      <Video />
      <Logos />
      <Quote />
      <Disclaimer />
    </main>
  );
}
