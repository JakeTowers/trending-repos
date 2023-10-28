interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return <div className="p-4">{text}</div>;
};

export default ErrorMessage;
