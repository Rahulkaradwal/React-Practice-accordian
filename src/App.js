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
    <div className="accordian">
      {faqs.map((value, index) => (
        <Item key={index} title={value.title} text={value.text} index={index} />
      ))}
    </div>
  );
}

function Item({ title, text, index }) {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="item" onClick={handleClick}>
      <span>0 {index + 1}</span>
      <div>{title}</div>
      {!show ? <div> {text} </div> : ""}

      {!show ? <span>+</span> : <span>-</span>}

      {/* <div>{text}</div> */}
    </div>
  );
}
