const fs = require('fs');
const path = require('path');

// Define the chapters in order
const chapters = [
  '01-introduction',
  '02-pages-routing',
  '03-components',
  '04-styling',
  '05-data-fetching',
  '06-api-routes',
  '07-state-management',
  '08-forms',
  '09-authentication',
  '10-deployment'
];

function readMarkdownFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return '';
  }
}

function combineMarkdown() {
  let combinedContent = '';
  
  // Add cover page
  combinedContent += '# หนังสือสอนเขียน Front-end ด้วย Next.js\n\n';
  combinedContent += '---\n\n';
  
  // Read and add main README introduction
  const mainReadme = readMarkdownFile(path.join(__dirname, '../README.md'));
  if (mainReadme) {
    // Extract introduction section (before table of contents)
    const introMatch = mainReadme.match(/^([\s\S]*?)## 📖 สารบัญ/);
    if (introMatch) {
      combinedContent += introMatch[1];
      combinedContent += '\n\n---\n\n';
    }
  }
  
  // Add table of contents
  combinedContent += '## 📖 สารบัญ\n\n';
  chapters.forEach((chapter, index) => {
    const chapterNum = index + 1;
    const chapterTitle = getChapterTitle(chapter);
    combinedContent += `- [บทที่ ${chapterNum}: ${chapterTitle}](#บทที่-${chapterNum}-${chapterTitle.toLowerCase().replace(/\s+/g, '-')})\n`;
  });
  combinedContent += '\n---\n\n';
  
  // Add each chapter
  chapters.forEach((chapter, index) => {
    const chapterPath = path.join(__dirname, '../chapters', chapter, 'README.md');
    const chapterContent = readMarkdownFile(chapterPath);
    
    if (chapterContent) {
      console.log(`Adding chapter: ${chapter}`);
      // Add page break before each chapter (except the first)
      if (index > 0) {
        combinedContent += '\\newpage\n\n';
      }
      combinedContent += chapterContent;
      combinedContent += '\n\n---\n\n';
    }
  });
  
  // Add additional resources
  combinedContent += '\\newpage\n\n';
  combinedContent += '# 📚 แหล่งข้อมูลเพิ่มเติม\n\n';
  
  // Add GLOSSARY if exists
  const glossaryPath = path.join(__dirname, '../GLOSSARY.md');
  if (fs.existsSync(glossaryPath)) {
    const glossary = readMarkdownFile(glossaryPath);
    if (glossary) {
      combinedContent += glossary + '\n\n---\n\n';
    }
  }
  
  // Add QUICK_REFERENCE if exists
  const quickRefPath = path.join(__dirname, '../QUICK_REFERENCE.md');
  if (fs.existsSync(quickRefPath)) {
    const quickRef = readMarkdownFile(quickRefPath);
    if (quickRef) {
      combinedContent += quickRef + '\n\n';
    }
  }
  
  // Write combined markdown
  const outputPath = path.join(__dirname, '../nextjs-book-combined.md');
  fs.writeFileSync(outputPath, combinedContent);
  console.log(`\n✅ Combined markdown created: ${outputPath}`);
  
  return outputPath;
}

function getChapterTitle(chapterFolder) {
  const titles = {
    '01-introduction': 'รู้จักกับ Next.js',
    '02-pages-routing': 'Pages และ Routing',
    '03-components': 'Components และ Props',
    '04-styling': 'Styling',
    '05-data-fetching': 'Data Fetching',
    '06-api-routes': 'API Routes',
    '07-state-management': 'State Management',
    '08-forms': 'Forms และ Validation',
    '09-authentication': 'Authentication',
    '10-deployment': 'Deployment และ Production'
  };
  return titles[chapterFolder] || chapterFolder;
}

// Run the script
if (require.main === module) {
  combineMarkdown();
}

module.exports = { combineMarkdown };
