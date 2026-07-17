interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="card">
      <div className="circle">{number}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default StepCard;