'use client';
import { useEffect } from "react";

const LifecycleComponent = () => {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return <p className="mt-4 text-green-600">Lifecycle Component Active</p>;
};

export default LifecycleComponent;