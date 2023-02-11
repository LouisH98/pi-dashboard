import Card from "./Card";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
type Status = "up" | "down";

export interface ServiceProps {
  title: string;
  description: string | null;
  address?: string;
  port?: number;
  icon: string;
}

export function StatusIcon({ status }: { status: Status }) {
  return status === "up" ? (
    <BsCheckCircleFill className="text-xl text-green-500" />
  ) : (
    <BsXCircleFill className="text-red-500" />
  );
}

export default function Service({ title, description, icon }: ServiceProps) {
  const status = "up";
  return (
    <Card isLink>
      <div className="flex flex-row items-center justify-between gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="grow-1" />
        <StatusIcon status={status} />
      </div>
      <p>{description}</p>
    </Card>
  );
}
