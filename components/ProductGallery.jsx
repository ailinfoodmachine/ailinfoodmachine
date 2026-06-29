"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(product.gallery[0]);
  const displayName = product.nameZh || product.name;

  return (
    <div className="grid gap-4">
      <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-100">
        <Image
          src={active}
          alt={displayName}
          width={900}
          height={650}
          priority
          className="h-full w-full object-contain"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {product.gallery.map((image) => (
          <button
            type="button"
            key={image}
            onClick={() => setActive(image)}
            className={`relative aspect-[4/3] overflow-hidden border bg-slate-100 ${
              active === image ? "border-signal" : "border-slate-200"
            }`}
            aria-label={`View ${product.name} image`}
          >
            <Image src={image} alt="" width={240} height={180} className="h-full w-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
