export default function ViscomScanError() {
  return (
    <div
      className={`
        absolute top-[30vh] right-[4vw] w-[25vw] h-[25vh] bg-[#F5F2F2] rounded-[calc(30.2vw*0.08591)]  
        `}
    >
      <div className="text-center">
        <h1 className="text-[2.5vw] font-bold text-black/80  mt-1 ">
          HATALI TARAMA!
        </h1>
        <p className="text-black   text-[1.5vw] ">
          Seçili programın
          <br />
          <span className="underline  font-bold ">
            BG Artikeli veya Revizyonu
          </span>
          <br />
          taranan üretim ile uyuşmuyor{" "}
        </p>
      </div>
    </div>
  );
}
