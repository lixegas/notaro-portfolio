
function formatText(s: string) {
  const parts = s.split(/(\*\*[^*]+\*\*)/); 

  const parsed = parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const word = part.slice(2, -2); 
      return (
        <span key={i} className="text-yellow-500">
          {word}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });

  return <span>{parsed}</span>;
}

export {formatText};