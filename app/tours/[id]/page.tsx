/* This page is for each single tour page */
import React from "react";
// @ means root
import mapsImg from "@/images/maps.jpg";
import Image from "next/image";
// We need to add this url pattern to next-config so we can use it to load remote images
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* Local image */}
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            priority
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Local Image</h2>
        </div>
        {/* Remote image */}
        <div>
          <Image
            src={url}
            alt="tour"
            width={192}
            height={192}
            priority
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Remote Image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
