import { useQuery } from "@tanstack/react-query";
import { getViscom } from "@/features/production/api";

export const useViscom = () =>
  useQuery({
    queryKey: ["viscom"],
    queryFn: getViscom,
    refetchInterval: 20000,
  });
