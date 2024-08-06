const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="mb-3 mr-3 inline-flex items-center justify-center rounded-sm bg-gray-light px-4 py-2 text-sm text-black duration-300 hover:bg-[#7e182c] hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-[#Dc143c]"
    >
      {text}
    </a>
  );
};

export default TagButton;
