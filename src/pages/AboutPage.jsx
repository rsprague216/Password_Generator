import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function AboutPage() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/ABOUT.md')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.text();
      })
      .then(text => {
        // Remove H1 heading like current implementation
        const withoutH1 = text.replace(/^#\s+.+\n/, '');
        setMarkdown(withoutH1);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setMarkdown('Password generator implemented with React and TailwindCSS.');
      });
  }, []);

  return (
    <main className="w-4/5 mx-auto pt-16 pb-16 text-navy max-[375px]:w-full">
      <div className="p-4">
        <ReactMarkdown
          className="prose prose-slate max-w-none"
          components={{
            h3: ({ node, ...props }) => <h3 className="pt-4 pb-2" {...props} />,
            p: ({ node, ...props }) => <p className="text-justify pb-2" {...props} />
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </main>
  );
}
