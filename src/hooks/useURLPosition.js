import { useSearchParams } from "react-router-dom";

export function useURLPosition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat, lng);
  return [lat, lng];
}
