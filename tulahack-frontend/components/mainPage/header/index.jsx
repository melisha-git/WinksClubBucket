import MainSection from "./main";
import Navigation from "./navigation";
import { useSelector } from "react-redux";
import Search from "./search";

export default function Header() {
  const value = useSelector((state) => state.searchElement.value);
  return (
    <>
      {value ? <Search /> : <MainSection />}
      <Navigation />
    </>
  );
}
