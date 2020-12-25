export const Footer: React.FC = () => {
  return (
    <div className="text-center text-sm p-4 mt-8">
      © {new Date().getFullYear()} JavaScript For Humans ·{" "}
      <a
        className="text-blue-500"
        href="https://github.com/compilezero/javascript-for-humans"
      >
        Source
      </a>
    </div>
  );
};
