"use client"

import { useEffect } from "react";

const ErrorPage = ({error,reset}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
     useEffect (() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
    return (
        <div>
            <h1 className="text-4xl  text-center mx-auto text-red-500">Something went Wrong</h1>
            <h1 className="text-4xl  text-center mx-auto  text-red-500">{error?.message}</h1>
      <div className="text-center">
              <button onClick={()=> reset()} className= "text-4xl p-4  text-center mx-auto  text-red-500 bg-yellow-500">try again</button>
      </div>
        </div>
    );
};

export default ErrorPage;