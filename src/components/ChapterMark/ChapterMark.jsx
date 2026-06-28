import "./ChapterMark.css";

function ChapterMark({ title, className = "" }) {
  return (
    <div className={`chapter-mark ${className}`}>
      <span className="chapter-mark__text">{title}</span>
    </div>
  );
}

export default ChapterMark;