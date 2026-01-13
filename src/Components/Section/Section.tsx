import type { ProductionData } from "../../types/production";
import FullCircleProgress from "../FullCircleProgress/FullCircleProgress";
import ViscomScanError from "../Viscom/ViscomScanError";

interface CardProps {
  imageUrl: string;
  imgW?: number;
  imgH?: number;
  setWarningText?: boolean;
  blink?: boolean;
  data: ProductionData;
}

/*3.906vw */
export default function Section({
  imageUrl,
  imgH = 8.2,
  imgW = 15.42,
  setWarningText,
  blink,
  data,
}: CardProps) {
  return (
    <div
      className={` ${
        blink
          ? "bg-red-600 animate-bounce"
          : "bg-[linear-gradient(105deg,#0C0815_40%,#1F1037_100%)]"
      }
 flex flex-col w-[30.21vw] h-[95vh] rounded-[calc(30.2vw*0.08591)] border border-[#938E9A] items-center relative `}
    >
      <div className="flex flex-col items-center absolute">
        <img
          src={imageUrl}
          className="mt-2"
          style={{ width: `${imgW}vw`, height: `${imgH}vh` }}
        />
        <div className="mt-4 text-center w-full">
          <div className="text-[3.4vw] font-bold text-[#C8C6FF] leading-none">
            BG:&nbsp;<span className="text-white">{data.bgNumber}</span>
          </div>

          <div className="mt-2 flex flex-col items-center g">
            <div className="text-[3vw] font-semibold text-[#C8C6FF]">
              REV <span className="text-white ml-2">{data.revNumber}</span>
            </div>
            <div className="text-[3vw] font-semibold text-[#C8C6FF]">
              PA:<span className="text-white ml-2">{data.paNumber}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[28.64vw] h-[0.5vh] border bg-[#C3B4D9]/80 mt-[1.9vh] rounded absolute top-[39vh]"></div>

      <div className="absolute top-[41.5vh]">
        <h1 className="font-sans font-semibold text-[2vw] text-white  mt-[1.9vh] leading-none truncate w-[28vw] h-[2.4vw] text-center ">
          {data.productName}
        </h1>

        <div className="flex flex-row justify-between mt-2 w-[28vw] px-1.5 ">
          <h1 className="font-sans font-semibold text-[2vw] text-white/70  mt-[1.9vh] leading-none ">
            Üretim Adeti
          </h1>
          <h1 className="font-sans font-semibold text-[2vw] text-white  mt-[1.9vh] leading-none  ">
            {data.quantity}
          </h1>
        </div>

        <div className="flex flex-row justify-between   w-[28vw] px-1.5">
          <h1 className="font-sans font-semibold text-[2vw] text-white/70  mt-[1.9vh] leading-none ">
            Kategori
          </h1>
          <h1 className="font-sans font-semibold text-[2vw] text-white  mt-[1.9vh] leading-none ">
            {data.category}
          </h1>
        </div>
        <div className="flex flex-row justify-between  w-[28vw] px-1.5">
          <h1 className="font-sans font-semibold text-[2vw] text-white/70  mt-[1.9vh] leading-none ">
            İlk Taraf
          </h1>
          <h1 className="font-sans font-semibold text-[2vw] text-white  mt-[1.9vh] leading-none ">
            {data.side}
          </h1>
        </div>
      </div>
      <div className="w-[29.06vw] h-[24vh] bg-[#E4CCFB]/20  rounded-[calc(30.2vw*0.08591)] mt-[4.2vh] pt-4 flex flex-row justify-around absolute bottom-[1.5vh] ">
        <FullCircleProgress
          producedQuantity={Number(data.BottomQuantity)}
          size={"17vh"}
          side="BOTTOM"
          totalQuantity={Number(data.quantity)}
        />
        <FullCircleProgress
          producedQuantity={Number(data.topQuantity)}
          size={"17vh"}
          side="TOP"
          totalQuantity={Number(data.quantity)}
        />
      </div>
      {setWarningText && <ViscomScanError />}
    </div>
  );
}

/* 
<h1
        className="font-sans font-semibold text-[3.6vw] text-white mt-[1.85vh] leading-none"
        style={{}}
      >
        BG:<span className="text-white">1127008</span>
      </h1>
      <h1 className="font-sans font-semibold text-[3.6vw] text-white   mt-[1.85vh] leading-none">
        REV 2.0
      </h1>
      <h1 className="font-sans font-semibold text-[3.6vw] text-white  mt-[1.85vh] leading-none">
        PA:184987
      </h1>
      
      */
