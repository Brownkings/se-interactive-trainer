import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUBJECTS = {
  se: {
    dir: path.resolve(__dirname, 'content/se'),
    chapterCount: 8,
    examFiles: [
      { file: 'Mock_Exam.md', id: 'mock_exam_1', title: 'Mock Exam 1 — Practice Examination' },
      { file: 'Previous_Exam_2025.md', id: 'spu_main_2025', title: 'SPU Main Exam — June 2025' },
      { file: 'Practice_Exam_3.md', id: 'practice_exam_3', title: 'Practice Exam 3 — Comprehensive Review' }
    ]
  },
  nhci: {
    dir: path.resolve(__dirname, 'content/nhci'),
    chapterCount: 5,
    examFiles: [
      { file: 'Mock_Exam.md', id: 'mock_exam_1', title: 'Mock Exam 1 — Practice Examination' },
      { file: 'Previous_Exam_2025.md', id: 'spu_main_2025', title: 'SPU Main Exam — June 2025' },
      { file: 'Practice_Exam_3.md', id: 'practice_exam_3', title: 'Practice Exam 3 — Comprehensive Review' }
    ]
  }
};

const OUTPUT_FILE = path.resolve(__dirname, 'src/data/chapters_data.js');

function cleanText(text) {
  if (!text) return '';
  return text.trim();
}

function parseMarkdownTable(tableText) {
  const lines = tableText.split('\n').map(l => l.trim()).filter(Boolean);
  const terms = [];
  
  for (const line of lines) {
    if (line.startsWith('|') && !line.includes('---|')) {
      const parts = line.split('|').map(p => p.trim()).filter(Boolean);
      if (parts.length >= 2) {
        let term = parts[0].replace(/\*\*/g, ''); // strip bold
        let definition = parts[1];
        if (term.toLowerCase() !== 'term' && term.toLowerCase() !== 'term / concept') {
          terms.push({ term, definition });
        }
      }
    }
  }
  return terms;
}

function parseChapterFile(filePath, index) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract Title
  const titleMatch = content.match(/# (Chapter \d+:\s*.+)/i);
  const title = titleMatch ? titleMatch[1].trim() : path.basename(filePath, '.md').replace(/_/g, ' ');
  
  // Extract "What You Must Learn and Know" section
  let learnContent = '';
  const learnStart = content.indexOf('## What You Must Learn and Know');
  if (learnStart !== -1) {
    let learnEnd = content.indexOf('## Key Terms and Definitions');
    if (learnEnd === -1) learnEnd = content.indexOf('## Practice Test');
    if (learnEnd === -1) learnEnd = content.length;
    learnContent = content.substring(learnStart + 31, learnEnd).trim();
  }
  
  // Chunk the learnContent by subheaders (###)
  const sections = [];
  const sectionSplit = learnContent.split(/\n###\s+/);
  if (sectionSplit.length > 0) {
    // If the first chunk is text before any ###, add it or ignore if empty
    const intro = sectionSplit[0].trim();
    if (intro && !intro.startsWith('###')) {
      sections.push({ title: 'Introduction', content: intro });
    }
    
    for (let i = 1; i < sectionSplit.length; i++) {
      const block = sectionSplit[i];
      const firstNewLine = block.indexOf('\n');
      let secTitle = '';
      let secContent = '';
      if (firstNewLine !== -1) {
        secTitle = block.substring(0, firstNewLine).trim();
        secContent = block.substring(firstNewLine + 1).trim();
      } else {
        secTitle = block.trim();
      }
      sections.push({ title: secTitle, content: secContent });
    }
  }

  // Parse Key Terms and Definitions
  let keyTerms = [];
  const keyTermsStart = content.indexOf('## Key Terms and Definitions');
  if (keyTermsStart !== -1) {
    let keyTermsEnd = content.indexOf('## Practice Test');
    if (keyTermsEnd === -1) keyTermsEnd = content.indexOf('## Answer Key');
    if (keyTermsEnd === -1) keyTermsEnd = content.length;
    const tableSection = content.substring(keyTermsStart + 28, keyTermsEnd);
    keyTerms = parseMarkdownTable(tableSection);
  }

  // Parse Practice Test
  let practiceTestText = '';
  const testStart = content.indexOf('## Practice Test');
  if (testStart !== -1) {
    const testEnd = content.indexOf('## Answer Key');
    practiceTestText = content.substring(testStart + 16, testEnd === -1 ? content.length : testEnd).trim();
  }

  // Parse Answer Key
  let answerKeyText = '';
  const answerStart = content.indexOf('## Answer Key');
  if (answerStart !== -1) {
    answerKeyText = content.substring(answerStart + 13).trim();
  }

  // MCQs Extraction
  const mcqs = [];
  const mcqRegex = /(\d+)\.\s+([\s\S]+?)\n\s*a\)\s*(.+?)\n\s*b\)\s*(.+?)\n\s*c\)\s*(.+?)\n\s*d\)\s*(.+?)(?=\n\s*\d+\.|\n\s*###|\n\s*##|$)/gi;
  let mcqMatch;
  while ((mcqMatch = mcqRegex.exec(practiceTestText)) !== null) {
    const num = parseInt(mcqMatch[1]);
    const questionText = cleanText(mcqMatch[2]);
    const options = [
      cleanText(mcqMatch[3]),
      cleanText(mcqMatch[4]),
      cleanText(mcqMatch[5]),
      cleanText(mcqMatch[6])
    ];
    mcqs.push({ num, question: questionText, options, answer: '', explanation: '' });
  }

  // MCQ Solutions Extraction
  const mcqSolRegex = /(\d+)\.\s*\*\*(.*?)\)\s*(.*?)\*\*\.\s*([\s\S]+?)(?=\n\s*\d+\.|\n\s*###|\n\s*##|$)/gi;
  let solMatch;
  while ((solMatch = mcqSolRegex.exec(answerKeyText)) !== null) {
    const num = parseInt(solMatch[1]);
    const ansLetter = cleanText(solMatch[2]).toLowerCase();
    const ansText = cleanText(solMatch[3]);
    const explanation = cleanText(solMatch[4]);
    
    const mcq = mcqs.find(q => q.num === num);
    if (mcq) {
      mcq.answer = ansLetter;
      mcq.explanation = explanation;
    }
  }

  // Short Answer Questions Extraction
  const shortAnswers = [];
  const saStartIdx = practiceTestText.indexOf('Section B:');
  if (saStartIdx !== -1) {
    const saSectionText = practiceTestText.substring(saStartIdx);
    const saRegex = /(\d+)\.\s+([\s\S]+?)(?=\n\s*\d+\.|\n\s*###|\n\s*##|$)/gi;
    let saMatch;
    while ((saMatch = saRegex.exec(saSectionText)) !== null) {
      const num = parseInt(saMatch[1]);
      const question = cleanText(saMatch[2]);
      shortAnswers.push({ num, question, solution: '' });
    }
  }

  // Short Answer Solutions Extraction
  const saSolStartIdx = answerKeyText.indexOf('Section B Solutions');
  if (saSolStartIdx !== -1) {
    const saSolSectionText = answerKeyText.substring(saSolStartIdx);
    const saSolRegex = /(\d+)\.\s+([\s\S]+?)(?=\n\s*\d+\.|\n\s*###|\n\s*##|$)/gi;
    let saSolMatch;
    while ((saSolMatch = saSolRegex.exec(saSolSectionText)) !== null) {
      const num = parseInt(saSolMatch[1]);
      const solution = cleanText(saSolMatch[2]);
      const sa = shortAnswers.find(q => q.num === num);
      if (sa) {
        sa.solution = solution;
      }
    }
  }

  return {
    id: `chapter_${index}`,
    chapterNumber: index,
    title,
    sections,
    keyTerms,
    mcqs,
    shortAnswers
  };
}

function parseMockExam(filePath, subId) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split content into questions and suggested solutions
  const solutionsStart = content.search(/# Mock Exam — Answer Key|# Suggested Solutions/i);
  let examText = content;
  let solutionsText = '';
  if (solutionsStart !== -1) {
    examText = content.substring(0, solutionsStart);
    solutionsText = content.substring(solutionsStart);
  }

  // Parse questions by "### Question X: Title [Y Marks]"
  const questionRegex = /### Question (\d+):\s*(.+?)\s*\[(\d+)\s*Marks\]([\s\S]+?)(?=\n\s*###|\n\s*##|$)/gi;
  const questions = [];
  
  let qMatch;
  while ((qMatch = questionRegex.exec(examText)) !== null) {
    const num = parseInt(qMatch[1]);
    const title = cleanText(qMatch[2]);
    const marks = parseInt(qMatch[3]);
    const description = cleanText(qMatch[4]);
    
    // Determine section based on question number or context
    let section = 'A';
    if (subId === 'se') {
      if (num >= 8 && num <= 10) section = 'B';
      else if (num >= 11) section = 'C';
    }

    questions.push({
      num,
      title,
      marks,
      description,
      section,
      solution: ''
    });
  }

  // Parse solutions
  const solutionRegex = /### Question (\d+):\s*([\s\S]+?)(?=\n\s*###|\n\s*##|$)/gi;
  let sMatch;
  while ((sMatch = solutionRegex.exec(solutionsText)) !== null) {
    const num = parseInt(sMatch[1]);
    const solContent = cleanText(sMatch[2]);
    
    const question = questions.find(q => q.num === num);
    if (question) {
      question.solution = solContent;
    }
  }

  // Extract page title dynamically
  const titleMatch = content.match(/# ([\s\S]+?)(?=\n\s*\*\*|\n\s*##|$)/i);
  const examTitle = titleMatch ? titleMatch[1].trim() : "Mock Examination";

  return {
    title: examTitle,
    questions
  };
}

function compile() {
  const compiledData = {};

  for (const [subId, config] of Object.entries(SUBJECTS)) {
    console.log(`\nCompiling subject: ${subId}`);
    const chapters = [];
    
    for (let i = 1; i <= config.chapterCount; i++) {
      const dirFiles = fs.existsSync(config.dir) ? fs.readdirSync(config.dir) : [];
      const filename = dirFiles.find(f => f.startsWith(`Chapter_${i}_`));
      if (filename) {
        const filePath = path.join(config.dir, filename);
        console.log(`Parsing ${subId} Chapter ${i}: ${filename}`);
        const chData = parseChapterFile(filePath, i);
        chapters.push(chData);
      } else {
        console.warn(`Warning: Chapter ${i} not found for ${subId}!`);
      }
    }

    const exams = [];
    for (const examConf of config.examFiles) {
      const dirFiles = fs.existsSync(config.dir) ? fs.readdirSync(config.dir) : [];
      const filename = dirFiles.find(f => f.toLowerCase() === examConf.file.toLowerCase());
      if (filename) {
        console.log(`Parsing ${subId} Exam: ${filename}`);
        const examData = parseMockExam(path.join(config.dir, filename), subId);
        examData.id = examConf.id;
        examData.title = examConf.title;
        exams.push(examData);
      } else {
        console.warn(`Warning: Exam file ${examConf.file} not found for ${subId}!`);
      }
    }

    compiledData[subId] = {
      chapters,
      exams
    };
  }

  // Ensure output directory exists
  const dir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const outputJs = `// Auto-generated data file. Do not edit directly.
export const subjectsData = ${JSON.stringify(compiledData, null, 2)};

export const chaptersData = subjectsData.se.chapters;
export const allExams = subjectsData.se.exams;
export const mockExamData = allExams.length > 0 ? allExams[0] : null;
`;

  fs.writeFileSync(OUTPUT_FILE, outputJs, 'utf-8');
  console.log(`Successfully compiled both subjects to ${OUTPUT_FILE}`);
}

compile();

