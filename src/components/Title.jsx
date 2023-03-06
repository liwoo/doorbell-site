import React from "react";
import clsx from "clsx";

export default function Title({title, center = true}) {
    return <h2
        className={clsx("text-3xl font-semibold tracking-tight text-gray-900", center && "text-center")}
    >
        {title}
    </h2>;
}