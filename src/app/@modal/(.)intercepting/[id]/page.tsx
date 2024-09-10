"use client";

import { useRouter } from "next/navigation";

const InterceptingRoutesModal = () => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20" onClick={() => router.back()}>
      <div className="bg-background">Intercepting Routes Modal (111)</div>
    </div>
  );
};

export default InterceptingRoutesModal;
