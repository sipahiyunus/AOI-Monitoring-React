import { useState } from "react";
import {
  Section,
  ViscomScanError,
  fujiData,
  iblData,
  viscomData,
} from "@/features/production";

export default function HomePage() {
  const [error, setError] = useState(false);

  return (
    <div className="flex items-center flex-row w-screen h-screen bg-[#05060F]  justify-around">
      <Section imageUrl="/images/fuji.png" imgH={10} data={fujiData} />
      <Section
        imageUrl="/images/ibl-logo.png"
        imgH={10}
        imgW={15}
        data={iblData}
      />
      <Section
        imageUrl="/svg/viscom.svg"
        imgW={21}
        imgH={10}
        blink={error}
        data={viscomData}
      />
      <button
        className="absolute bottom-10 bg-blue-600 px-4 py-2 rounded"
        onClick={() => setError(!error)}
      ></button>
      {error && <ViscomScanError />}
    </div>
  );
}


