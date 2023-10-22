import { useContext } from "react";
import { ThemeContext } from "@/app/page";
import { eventSelect, hobbySelect } from "@/redux/slices/siteSelectSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Navigation() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.siteSelect.value);
  return (
    <>
      <div className="flex items-center bg-bg-white">
        <div
          onClick={() => dispatch(eventSelect())}
          className={`flex-1 text-center text-text-active py-3 font-medium ${
            item === "event" && "border-b-2 border-b-text-active"
          }`}
        >
          Мероприятия
        </div>
        <div
          onClick={() => dispatch(hobbySelect())}
          className={`flex-1 text-center text-text-active py-3 font-medium ${
            item === "hobby" && "border-b-2 border-b-text-active"
          }`}
        >
          Беседы по интересам
        </div>
      </div>
    </>
  );
}
