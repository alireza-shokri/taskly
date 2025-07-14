function Title({ subject, length }) {
  return (
    <h2 className="flex gap-2 text-3xl font-semibold uppercase select-none">
      {subject}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300 text-center text-xl text-white">
        {length}
      </span>
    </h2>
  );
}

export default Title;
