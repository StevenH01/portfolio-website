import { useRouter } from "next/router";
import HomePage from ".";

export default function Error404() {
  const router = useRouter();
  router.push("/home");
  return (
    <HomePage />
  );
}