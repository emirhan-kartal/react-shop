import React from "react";
import { Link } from "react-router-dom";

export default function ConditionalLink({ condition, children, to }) {
    return condition ? <Link to={to}>{children}</Link> : <>{children}</>;
}
