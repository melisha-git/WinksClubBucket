import { ChatItemData } from "@/data";
import ChatItem from "./chatItem";
import { useQuery } from "react-query";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

async function createProduct() {
  const params = {
    id: localStorage.getItem("userId"),
  };
  const { data } = await axios.get("http://94.103.86.64:8080/api/events", {
    params,
  });
  return data;
}

export default function chatListFavorite() {
  const type = useSelector((state) => state.siteSelect.value);
  const { isSuccess, data } = useQuery("chatFavItem", createProduct);
  if (isSuccess) {
    return (
      <>
        <div className="p-2 text-text-gray">Мои мероприятия</div>
        {data.map((item, id) =>
          item.type === type ? (
            <ChatItem data={item} type={type} key={id} />
          ) : (
            ""
          )
        )}
      </>
    );
  }
}
