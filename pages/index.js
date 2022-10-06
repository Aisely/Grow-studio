import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "./Form";
import Card from "./Card";
// import hasha from 'hasha'

export default function Home() {
  const [learnerId, setLearnerId] = useState('')
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    program: "",
    level: "",
  });
  console.log(form);
  console.log(form.firstname);
  const id = form.firstname;
  console.log(id.replace(/\s/g, "").slice(0, 2).toUpperCase(), "hello");
  // console.log(hasha("paul simon"))
  const onGenerateId = () => {
    // const hash = hasha(form.firstname)
    let pr;
    switch (form.program) {
      case "android":
        pr = "AND";
        break;
      case "frontend":
        pr = "FRD";
        break;
      case "backend":
        pr = "BKD";
        break;
      case "fullstack":
        pr = "FUD";
        break;
      case "devops":
        pr = "DOP";
        break;
    }
    let le;
    switch (form.level) {
      case "entry":
        le = "EN";
        break;
      case "junior":
        le = "JU";
        break;
      case "intermediate":
        le = "IN";
        break;
      case "senior":
        le = "SE";
        break;
    }

    const id = `GR${form.firstname
      .replace(/\s/g, "")
      .slice(0, 2)
      .toUpperCase()}${form.lastname
      .replace(/\s/g, "")
      .slice(0, 2)
      .toUpperCase()}229${pr}${le}`;
    console.log(id);
    setLearnerId(id)
  };
  return (
    <>
      <div className="wrap">
        <div className="form">
          <Form setForm={setForm} form={form} onGenerateId={onGenerateId} />
        </div>
        <div className="card">
          <Card form={form} learnerId={learnerId} />
        </div>
      </div>
    </>
  );
}
