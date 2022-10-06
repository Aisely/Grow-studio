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
    email: "",
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
      case "Android Development":
        pr = "AND";
        break;
      case "Frontend Development":
        pr = "FRD";
        break;
      case "Backend Development":
        pr = "BKD";
        break;
      case "Full-stack development":
        pr = "FUD";
        break;
      case "DevOps Development":
        pr = "DOP";
        break;
    }
    let le;
    switch (form.level) {
      case "Entry":
        le = "EN";
        break;
      case "Junior":
        le = "JU";
        break;
      case "Intermediate":
        le = "IN";
        break;
      case "Senior":
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
    <div className="header"></div>
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
