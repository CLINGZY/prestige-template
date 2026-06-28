import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import ChapterMark from "./components/ChapterMark/ChapterMark";
import Vision from "./components/Vision/Vision";
import MetricsBand from "./components/metricBand/MetricsBand";
import Work from "./sections/Work/Work";
import QuoteStrip from "./sections/QuoteStrip/QuoteStrip";
import Philosophy from "./sections/Philosophy/Philosophy";
import Transformation from "./sections/Transformation/Transformation";
import Process from "./sections/Process/Process";
import Legacy from "./sections/Legacy/Legacy";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <ChapterMark title="Chapter I — Vision" />
      <Vision />
      <MetricsBand />

      <ChapterMark title="Chapter II — The Work" />
      <Work />
      <QuoteStrip />

      <ChapterMark title="Chapter III — The Standard" />
      <Philosophy />

      <ChapterMark title="Chapter IV — Transformation" />
      <Transformation />

      <ChapterMark title="Chapter V — The Journey" />
      <Process />   

      <ChapterMark title="Chapter VI — Legacy" />
      <Legacy />   
      <Footer />
    </>
  );
}

export default App;