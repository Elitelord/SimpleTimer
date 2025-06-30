'use client'
import { copyFile } from "fs";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [choice, setChoice]=useState("");
  const [resultText, setResultText] = useState("");

  const handleClick=()=>{
      if(choice!="0"){
        let compChoice = (Math.floor(Math.random()*3)+1).toString();
        if(choice!=compChoice){
          if(choice=="1"&&compChoice=="2"){
            setResultText("They picked paper, so you lost");
          }
          else if(choice=="2"&&compChoice=="1"){
            setResultText("They picked Rock, so you Win!");

          }
          else if(choice=="2"&&compChoice=="3"){
            setResultText("They picked Scissors, so you lost");

          }
          else if(choice==="3"&&compChoice==="2"){
            setResultText("They picked Paper, so you Win!");
          }
          else if(choice==="1"&&compChoice==="3"){
            setResultText("They picked Scissors, so you Win!");

          }
          else if(choice==="3"&&compChoice==="1"){
            setResultText("They picked Rock, so you lost");
          }
        }
        else{
          setResultText("They picked the same thing, so you tied!");
        }
      }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className = "text-lg"> 
            Hi, This is a Simple Rock, Paper, Scissors App built with NextJS
          </h1>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
          
          <select className="text-blue bg-black" onChange={(e)=>setChoice(e.target.value)} defaultValue={"0"}>
            <option className="text-blue bg-black" value = {"0"} disabled >Select</option>
            <option className="text-blue bg-black" value = {"1"}>Rock</option>
            <option className="text-blue bg-black" value = {"2"}>Paper</option>
            <option className="text-blue bg-black" value = {"3"}>Scissors</option>
          </select>
          <button type = "submit" className="bg-blue" onClick={handleClick}>Play</button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       <p>{resultText}</p>
      </footer>
    </div>
  );
}
