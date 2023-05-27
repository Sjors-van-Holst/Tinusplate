import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function parseMarkdown(file: string): any {
  const filePath = path.join(process.cwd(), 'content', file);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);

  return {
    ...data,
    content
  };
}
