import { useSelector } from "react-redux";

export function AboutUs() {
  const state = useSelector((state) => state);

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      <h1 className="text-light">About Us</h1>

      {state.tweet.list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
