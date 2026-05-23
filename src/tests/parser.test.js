import { describe, it, expect } from 'vitest';
import { chaptersData, mockExamData } from '../data/chapters_data.js';

describe('Data Compiler Verification Tests', () => {
  
  it('should compile exactly 8 chapters', () => {
    expect(chaptersData).toHaveLength(8);
  });

  it('should have correct chapter ids and structure', () => {
    chaptersData.forEach((chapter, index) => {
      expect(chapter.id).toBe(`chapter_${index + 1}`);
      expect(chapter.chapterNumber).toBe(index + 1);
      expect(chapter.title).toBeDefined();
      expect(chapter.title.length).toBeGreaterThan(0);
      expect(chapter.sections).toBeInstanceOf(Array);
      expect(chapter.keyTerms).toBeInstanceOf(Array);
      expect(chapter.mcqs).toBeInstanceOf(Array);
      expect(chapter.shortAnswers).toBeInstanceOf(Array);
    });
  });

  it('should parse key terms with term and definition fields', () => {
    chaptersData.forEach((chapter) => {
      chapter.keyTerms.forEach((kt) => {
        expect(kt.term).toBeDefined();
        expect(kt.term.length).toBeGreaterThan(0);
        expect(kt.definition).toBeDefined();
        expect(kt.definition.length).toBeGreaterThan(0);
      });
    });
  });

  it('should parse MCQs with options, correct answer, and explanation', () => {
    chaptersData.forEach((chapter) => {
      chapter.mcqs.forEach((mcq) => {
        expect(mcq.num).toBeGreaterThan(0);
        expect(mcq.question).toBeDefined();
        expect(mcq.question.length).toBeGreaterThan(0);
        expect(mcq.options).toHaveLength(4);
        expect(mcq.options.every(opt => opt.length > 0)).toBe(true);
        expect(['a', 'b', 'c', 'd']).toContain(mcq.answer);
        expect(mcq.explanation).toBeDefined();
        expect(mcq.explanation.length).toBeGreaterThan(0);
      });
    });
  });

  it('should parse Short Answer questions and suggested solutions', () => {
    chaptersData.forEach((chapter) => {
      chapter.shortAnswers.forEach((sa) => {
        expect(sa.num).toBeGreaterThan(0);
        expect(sa.question).toBeDefined();
        expect(sa.question.length).toBeGreaterThan(0);
        expect(sa.solution).toBeDefined();
        expect(sa.solution.length).toBeGreaterThan(0);
      });
    });
  });

  it('should parse Mock Exam with proper sections and questions', () => {
    expect(mockExamData).toBeDefined();
    expect(mockExamData.title).toBe('Software Engineering I — Mock Examination');
    expect(mockExamData.questions.length).toBeGreaterThan(0);
    
    mockExamData.questions.forEach((q) => {
      expect(q.num).toBeGreaterThan(0);
      expect(q.title).toBeDefined();
      expect(q.title.length).toBeGreaterThan(0);
      expect(q.marks).toBeGreaterThan(0);
      expect(q.description).toBeDefined();
      expect(q.description.length).toBeGreaterThan(0);
      expect(['A', 'B', 'C']).toContain(q.section);
      expect(q.solution).toBeDefined();
      expect(q.solution.length).toBeGreaterThan(0);
    });
  });
});
