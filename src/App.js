import { useState, React } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((value, index) => (
        <Item key={index} title={value.title} text={value.text} index={index} />
      ))}
    </div>
  );
}

function Item({ title, text, index }) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow((show) => !show);
  }

  return (
    <div className={`item ${show} ? "open" : ""`} onClick={handleClick}>
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{show ? "-" : "+"}</p>
      {show && <div className="content-box">{text}</div>}

      {/* <div>{text}</div> */}
    </div>
  );
}
