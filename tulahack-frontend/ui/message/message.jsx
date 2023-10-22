export default function MessageUI({ name, message }) {
  return (
    <div className="m-1">
      <div className="mb-2 text-text-active">{name}</div>
      <div className=" bg-text-active text-bg-white self-start w-3/4 p-2 rounded-md text-white">
        {message}
        <div className="mt-2 text-[10px]">15:56</div>
      </div>
    </div>
  );
}
