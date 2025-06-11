"use client";
import { Chessboard } from "@/components/chessboard/chessboard";
import { useParams } from "next/navigation";

export default function GamePage() {
  const { id } = useParams();

  return (
    <>
      <Chessboard />
    </>
  );
}
