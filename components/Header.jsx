export default function Header({ title, subTitle }) {
  return (
    <header className={`text-center lg:py-10 font-josefin`}>
      <h1
        className={`text-transparent font-bold bg-clip-text bg-gradient-to-br from-primary to-secondary text-3xl`}
      >
        {title}
      </h1>
      <h3 className={`text-slate-400 text-sm lg:text-lg mt-2`}>{subTitle}</h3>
    </header>
  );
}
