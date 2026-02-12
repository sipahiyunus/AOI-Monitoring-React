import { useQuery } from "@tanstack/react-query";
import { getIbl } from "@/features/production/api";

export const useIbl = () =>
  useQuery({
    queryKey: ["ibl"],
    queryFn: getIbl,
    refetchInterval: 20000,
  });
