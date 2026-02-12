import { useQuery } from "@tanstack/react-query";
import { getFuji } from "@/features/production/api";

export const useFuji = () =>
  useQuery({
    queryKey: ["fuji"],
    queryFn: getFuji,
    refetchInterval: 20000,
  });
