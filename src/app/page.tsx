import React from "react";
import Page from "./products/page";
import Link from "next/link";
import { Button } from "@/components/ui/button"





export default function Home() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <Link href={'/products'}>
        <button className=" border border-white rounded p-3"
        >To Products</button>
      </Link>
      <Link href={'/pokemon'}>
        <button
          className=" border border-white rounded p-3"
        >To Pokemon
        </button>
      </Link>
      <Link href={'/input-page'}>
        <Button>Click me</Button>
      </Link>
    </div>
  );
}


