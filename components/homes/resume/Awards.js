import { awards } from "@/data/awards";
import Image from "next/image";
import React from "react";

export default function Awards() {
  return (
    <div className="col-xl-6 col-lg-7">
      <div className="bostami-section-title-wrap mb-20">
        <h4 className="section-title">
          <Image
            width={23}
            height={30}
            src="/assets/img/icon/Awards-icon.png"
            alt="icon"
          />
          Awards
        </h4>
      </div>

      <div className="bostami-card-wrap two-columns">
        {awards.map((elm, i) => (
          <div
            key={i}
            className={`bostami-card-item ${elm.bgClass} ${
              i + 1 !== awards.length && "mb-20"
            } `}
          >
            <span className="card-subtitle">{elm.year}</span>
            <h6 className="card-title">{elm.role}</h6>
            <p className="card-text">{elm.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
