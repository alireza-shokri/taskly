import photo from "../assets/no-results.png";

function NoPage() {
  return (
    <div className="flex h-full items-center justify-center rounded-2xl bg-amber-400">
      <img src={photo} alt="not Found" className="w-64" />
    </div>
  );
}

export default NoPage;
