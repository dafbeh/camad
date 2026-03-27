"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageSkeleton } from "./skeleton";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
};

export default function ImageWithSkeleton({ src, alt, className, fill }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <ImageSkeleton />}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`${className} ${loading ? "opacity-0" : "opacity-100"
          }`}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}