import type { AuftragInformation } from "@/features/production";

export interface SectionProps {
  imageUrl: string;
  imgW?: number;
  imgH?: number;
  setWarningText?: boolean;
  blink?: boolean;
  data: AuftragInformation;
}
