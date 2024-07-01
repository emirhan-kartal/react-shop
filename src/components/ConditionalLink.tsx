import React from "react";
import { Link } from "react-router-dom";

interface ConditionalLinkProps {
    condition: boolean;
    children: React.ReactNode;
    to: string;
}

export default function ConditionalLink({
    condition,
    children,
    to,
}: ConditionalLinkProps) {
    return condition ? <Link to={to}>{children}</Link> : <>{children}</>;
}
