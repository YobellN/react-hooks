'use client';
import { useRef, useState, useEffect } from "react";
import LifecycleComponent from "@/components/LifeCycleComponent";

export default function Home() {
  const [count, setCount] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const renderCount = useRef(0);
  const refValue = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Dirender");
  },[]);

  useEffect(() => {
    console.log("Hi from useEffect tanpa dep");
  });

  useEffect(() => {
    console.log("Hi from useEffect count");
  },[count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 border rounded-lg shadow-lg text-center space-y-4">
      <h2 className="text-2xl font-bold">Render Count (useRef): {renderCount.current}</h2>
      <h2 className="text-2xl font-bold">Counterssssssss (useState): {count}</h2>
      <h2 className="text-2xl font-bold">Ref Value (useRef): {refValue.current}</h2>
      
      <div className="flex space-x-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => {
            setCount(count + 5);
            console.log("🔼 useState: Increment clicked. New count:", count + 1);
          }}
        >
          Increment (useState)
        </button>
        <button
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => {
            setCount(count - 1);
            console.log("🔽 useState: Decrement clicked. New count:", count - 1);
          }}
        >
          Decrement (useState)
        </button>
      </div>
      
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={() => {
          refValue.current += 1;
          console.log("💾 useRef: Ref Value updated. New value:", refValue.current);
        }}
      >
        Increment Ref Value (useRef)
      </button>
      
      <button
        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        {showComponent ? "Hide" : "Show"} Lifecycle Component
      </button>
      
      {showComponent && <LifecycleComponent />}
    </div>
  );
}