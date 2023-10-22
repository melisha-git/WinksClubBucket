import { ChatItemData } from "@/data";
import ChatItem from "./chatItem";
import { useQuery } from "react-query";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

async function getProduct() {
  const { data } = await axios.get("http://94.103.86.64:8080/allevents");
  return data;
}

export default function ChatListRecondation() {
  const type = useSelector((state) => state.siteSelect.value);
  const { isSuccess, data } = useQuery("chatRecItem", getProduct);
  console.log(data);
  if (isSuccess) {
    return (
      <>
        <div className="p-2 text-text-gray">Рекомендации</div>
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
