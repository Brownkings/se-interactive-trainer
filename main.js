import { subjectsData, chaptersData as defaultChapters, allExams as defaultExams } from './src/data/chapters_data.js';

// --- APPLICATION SUBJECT & STATE MANAGEMENT ---
let currentSubject = localStorage.getItem('active_subject') || 'se';
if (!subjectsData[currentSubject]) {
  currentSubject = 'se';
}

let chaptersData = subjectsData[currentSubject]?.chapters || defaultChapters;
let allExams = subjectsData[currentSubject]?.exams || defaultExams;
let mockExamData = allExams.length > 0 ? allExams[0] : null;

let STATE_KEY = `${currentSubject}_trainer_state_v1`;

let state = {
  xp: 0,
  level: 1,
  streak: 0,
  lastStudyDate: null,
  reviewDeck: [], // Spaced repetition terms { chapterNum, term, definition }
  completedSections: {}, // chapterNum_sectionIdx -> boolean
  masteredTerms: {}, // chapterNum_termIdx -> boolean
  quizProgress: {}, // chapterNum_mcqIdx -> selectedOption ('a','b','c','d')
  essayProgress: {}, // chapterNum_essayIdx -> selfScore (0, 50, 100)
  mockAnswers: {}, // questionNum -> text
  mockScores: {}, // questionNum -> score
  mockCompleted: false,
  mockExamTimeRemaining: 10800, // 3 hours in seconds
  mockActive: false,
  unlockedBadges: [],
  selectedExamId: null, // which exam is currently selected/active
  examStates: {} // per-exam state: { [examId]: { answers, scores, completed, active, timeRemaining } }
};

// Load state from localStorage
function loadState() {
  state = {
    xp: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    reviewDeck: [],
    completedSections: {},
    masteredTerms: {},
    quizProgress: {},
    essayProgress: {},
    mockAnswers: {},
    mockScores: {},
    mockCompleted: false,
    mockExamTimeRemaining: 10800,
    mockActive: false,
    unlockedBadges: [],
    selectedExamId: null,
    examStates: {}
  };
  const saved = localStorage.getItem(STATE_KEY);
  if (saved) {
    try {
      state = { ...state, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Error parsing localStorage state", e);
    }
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

// Update subject-specific titles, logos and headers
function updateSubjectUI() {
  const isSE = currentSubject === 'se';
  document.title = isSE ? "Software Engineering Interactive Trainer" : "Human-Computer Interaction Interactive Trainer";
  
  const logoText = document.querySelector('.logo-text');
  if (logoText) logoText.innerText = isSE ? "SE Trainer" : "HCI Trainer";
  
  const logoIcon = document.querySelector('.logo-icon');
  if (logoIcon) logoIcon.innerText = isSE ? "SE" : "HCI";
  
  // Dashboard headers/text
  const dashboardTitle = document.querySelector('#dashboard-view h1');
  if (dashboardTitle) dashboardTitle.innerText = isSE ? "Software Engineering I" : "Human-Computer Interaction";
  
  // Mock exam headers
  const mockTitle = document.querySelector('#mock-exam-active-screen h2');
  if (mockTitle) mockTitle.innerText = isSE ? "Software Engineering I Mock Exam" : "Human-Computer Interaction Mock Exam";
}

// Switch current active subject
function switchSubject(subjectId) {
  if (state.mockActive) {
    if (!confirm("Your mock exam is running. Switching subjects will reset the mock exam timer. Proceed?")) {
      document.getElementById('subject-select').value = currentSubject;
      return;
    }
  }
  
  // Save current subject state
  saveState();
  
  // Switch
  currentSubject = subjectId;
  localStorage.setItem('active_subject', currentSubject);
  STATE_KEY = `${currentSubject}_trainer_state_v1`;
  
  // Load data
  chaptersData = subjectsData[currentSubject].chapters;
  allExams = subjectsData[currentSubject].exams;
  mockExamData = allExams.length > 0 ? allExams[0] : null;
  
  // Clear routing flags
  currentActiveChapter = null;
  
  // Load state and update UI
  loadState();
  updateSubjectUI();
  updateUI();
  renderDashboard();
  navigateView('dashboard-view');
}

// Reset state
function resetProgress() {
  if (confirm("Are you sure you want to reset all your progress, XP, streaks, and review deck?")) {
    state = {
      xp: 0,
      level: 1,
      streak: 0,
      lastStudyDate: null,
      reviewDeck: [],
      completedSections: {},
      masteredTerms: {},
      quizProgress: {},
      essayProgress: {},
      mockAnswers: {},
      mockScores: {},
      mockCompleted: false,
      mockExamTimeRemaining: 10800,
      mockActive: false,
      unlockedBadges: [],
      selectedExamId: null,
      examStates: {}
    };
    saveState();
    updateUI();
    renderDashboard();
    navigateView('dashboard-view');
  }
}

// --- GAMIFICATION & XP LOGIC ---
function getRank(level) {
  const isSE = currentSubject === 'se';
  const ranks = isSE ? [
    { maxLevel: 2, rank: 'Novice Developer 💻' },
    { maxLevel: 5, rank: 'Systems Architect 📐' },
    { maxLevel: 8, rank: 'Senior Engineer 🚀' },
    { maxLevel: 999, rank: 'Software Guru 🔮' }
  ] : [
    { maxLevel: 2, rank: 'Novice Designer 🎨' },
    { maxLevel: 5, rank: 'UX Researcher 🔍' },
    { maxLevel: 8, rank: 'Interaction Specialist 👁️' },
    { maxLevel: 999, rank: 'HCI Guru 🔮' }
  ];
  for (const lvl of ranks) {
    if (level <= lvl.maxLevel) return lvl.rank;
  }
  return isSE ? 'Software Guru 🔮' : 'HCI Guru 🔮';
}

function addXP(amount) {
  state.xp += amount;
  
  // Calculate Level (100 XP per level)
  const oldLevel = state.level;
  state.level = Math.floor(state.xp / 100) + 1;
  
  if (state.level > oldLevel) {
    triggerLevelUpEffect(state.level);
  }
  
  updateStreak();
  checkAchievements();
  saveState();
  updateUI();
}

function updateStreak() {
  const today = new Date().toDateString();
  
  if (!state.lastStudyDate) {
    state.streak = 1;
  } else {
    const lastDate = new Date(state.lastStudyDate);
    const diffTime = Math.abs(new Date(today) - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      state.streak += 1;
    } else if (diffDays > 1) {
      state.streak = 1; // Streak broken
    }
  }
  
  state.lastStudyDate = today;
}

function triggerLevelUpEffect(newLevel) {
  const message = `🎉 LEVEL UP! You are now Level ${newLevel}! Rank: ${getRank(newLevel)}`;
  console.log(message);
  
  // Create a floating level up banner in UI
  const banner = document.createElement('div');
  banner.style.position = 'fixed';
  banner.style.top = '20px';
  banner.style.left = '50%';
  banner.style.transform = 'translateX(-50%)';
  banner.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  banner.style.border = '2px solid #34d399';
  banner.style.padding = '16px 32px';
  banner.style.borderRadius = '12px';
  banner.style.zIndex = '100000';
  banner.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
  banner.style.fontWeight = '800';
  banner.style.fontFamily = 'Outfit, sans-serif';
  banner.style.color = 'white';
  banner.style.textAlign = 'center';
  banner.innerHTML = message;
  
  document.body.appendChild(banner);
  setTimeout(() => {
    banner.remove();
  }, 4000);
}

// --- ACHIEVEMENTS SYSTEM ---
const ACHIEVEMENTS = [
  { id: 'first_steps', name: 'First Steps 🐾', desc: 'Read your first chapter section', check: () => Object.keys(state.completedSections).length >= 1 },
  { id: 'term_master', name: 'Term Master 📖', desc: 'Got 5 key terms correct in Flashcard mode', check: () => Object.keys(state.masteredTerms).length >= 5 },
  { id: 'quiz_expert', name: 'Quiz Expert 🎯', desc: 'Obtained a score in any quiz', check: () => Object.keys(state.quizProgress).length >= 1 || Object.keys(state.essayProgress).length >= 1 },
  { id: 'spaced_recaller', name: 'Spaced Recall 🔁', desc: 'Flagged a card for review deck', check: () => state.reviewDeck.length >= 1 },
  { id: 'streak_3', name: 'Committed Learner 🔥', desc: 'Achieved a study streak of 3+ days', check: () => state.streak >= 3 },
  { id: 'exam_graduate', name: 'Exam Graduate 🎓', desc: 'Completed the Mock Exam and self-graded it', check: () => state.mockCompleted }
];

function checkAchievements() {
  ACHIEVEMENTS.forEach(badge => {
    if (!state.unlockedBadges.includes(badge.id) && badge.check()) {
      state.unlockedBadges.push(badge.id);
      triggerBadgeEffect(badge);
    }
  });
}

function triggerBadgeEffect(badge) {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.bottom = '20px';
  popup.style.right = '20px';
  popup.style.background = 'linear-gradient(135deg, #7c3aed, #4f46e5)';
  popup.style.border = '1px solid rgba(255,255,255,0.2)';
  popup.style.padding = '16px 20px';
  popup.style.borderRadius = '10px';
  popup.style.zIndex = '100000';
  popup.style.boxShadow = 'var(--card-shadow)';
  popup.style.display = 'flex';
  popup.style.alignItems = 'center';
  popup.style.gap = '12px';
  popup.style.color = 'white';
  popup.style.animation = 'slideDown 0.3s ease-out reverse';
  
  popup.innerHTML = `
    <div style="font-size: 28px;">🏆</div>
    <div>
      <div style="font-weight: 800; font-family: Outfit; font-size: 14px;">ACHIEVEMENT UNLOCKED!</div>
      <div style="font-weight: 700; font-size: 15px;">${badge.name}</div>
      <div style="font-size: 11px; color: rgba(255,255,255,0.8);">${badge.desc}</div>
    </div>
  `;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 4000);
}

// --- NAVIGATION SYSTEM ---
const navLinks = document.querySelectorAll('.nav-link');
const views = document.querySelectorAll('.view-section');

function navigateView(targetId) {
  views.forEach(view => {
    view.classList.remove('active');
    if (view.id === targetId) view.classList.add('active');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-target') === targetId) link.classList.add('active');
  });
  
  const mainViewport = document.querySelector('.main-viewport');
  if (mainViewport) {
    mainViewport.scrollTop = 0;
  }
  
  // Custom View Entry Triggers
  if (targetId === 'dashboard-view') {
    renderDashboard();
  } else if (targetId === 'review-view') {
    renderReviewDeck();
  } else if (targetId === 'badges-view') {
    renderBadgesView();
  } else if (targetId === 'mock-exam-view') {
    renderMockExam();
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (state.mockActive) {
      if (!confirm("Your mock exam is running. Leaving this view will keep the timer running. Proceed?")) return;
    }
    const target = link.getAttribute('data-target');
    navigateView(target);
  });
});

// --- DYNAMIC RENDERING ---

// Update persistent sidebar widgets
function updateUI() {
  document.getElementById('user-level').innerText = state.level;
  document.getElementById('user-rank').innerText = getRank(state.level);
  document.getElementById('current-xp').innerText = state.xp;
  
  const xpLevelStart = (state.level - 1) * 100;
  const nextLvlXp = state.level * 100;
  const xpProgress = state.xp - xpLevelStart;
  document.getElementById('next-level-xp').innerText = nextLvlXp;
  document.getElementById('xp-fill').style.width = `${Math.min(100, Math.max(0, xpProgress))}%`;
  
  document.getElementById('streak-indicator').innerText = `🔥 ${state.streak} Day${state.streak === 1 ? '' : 's'}`;
  document.getElementById('spaced-review-count').innerText = state.reviewDeck.length;
}

// Render Dashboard (Module Lists)
function renderDashboard() {
  const chaptersContainer = document.getElementById('chapters-list-container');
  chaptersContainer.innerHTML = '';
  
  let overallTotalSections = 0;
  let overallCompletedSections = 0;
  
  chaptersData.forEach((chapter) => {
    const totalSections = chapter.sections.length;
    let completed = 0;
    
    chapter.sections.forEach((_, idx) => {
      if (state.completedSections[`${chapter.chapterNumber}_${idx}`]) {
        completed++;
      }
    });
    
    overallTotalSections += totalSections;
    overallCompletedSections += completed;
    
    const progressPercent = totalSections > 0 ? Math.round((completed / totalSections) * 100) : 0;
    
    const card = document.createElement('div');
    card.className = 'chapter-row-card glass-panel';
    card.innerHTML = `
      <div class="chapter-meta">
        <div class="chapter-number">Chapter ${chapter.chapterNumber}</div>
        <div class="chapter-title">${chapter.title.split(':').slice(1).join(':').trim() || chapter.title}</div>
        <div class="progress-container">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
          </div>
          <span class="progress-text">${progressPercent}%</span>
        </div>
      </div>
      <div class="chapter-actions">
        <button class="btn btn-secondary action-learn" data-id="${chapter.chapterNumber}">📖 Learn</button>
        <button class="btn btn-secondary action-flashcards" data-id="${chapter.chapterNumber}">📇 Cards</button>
        <button class="btn btn-primary action-quiz" data-id="${chapter.chapterNumber}">✏️ Quiz</button>
      </div>
    `;
    
    // Attach event listeners to buttons
    card.querySelector('.action-learn').addEventListener('click', (e) => {
      e.stopPropagation();
      openChapterDetail(chapter.chapterNumber, 'learn');
    });
    card.querySelector('.action-flashcards').addEventListener('click', (e) => {
      e.stopPropagation();
      openChapterDetail(chapter.chapterNumber, 'flashcards');
    });
    card.querySelector('.action-quiz').addEventListener('click', (e) => {
      e.stopPropagation();
      openChapterDetail(chapter.chapterNumber, 'quiz');
    });
    
    // Click row card default acts as learn
    card.addEventListener('click', () => {
      openChapterDetail(chapter.chapterNumber, 'learn');
    });
    
    chaptersContainer.appendChild(card);
  });
  
  const overallProgress = overallTotalSections > 0 ? Math.round((overallCompletedSections / overallTotalSections) * 100) : 0;
  document.getElementById('overall-progress-text').innerText = `${overallProgress}%`;
  document.getElementById('overall-progress-bar').style.width = `${overallProgress}%`;
  
  // Render recent badges in sidebar
  const recentBadges = document.getElementById('recent-badges-container');
  recentBadges.innerHTML = '';
  if (state.unlockedBadges.length === 0) {
    recentBadges.innerHTML = '<p style="font-size:12px; color:var(--text-muted);">No badges unlocked yet. Keep studying!</p>';
  } else {
    // Show up to 4 most recent
    state.unlockedBadges.slice(-4).forEach(badgeId => {
      const badgeObj = ACHIEVEMENTS.find(b => b.id === badgeId);
      if (badgeObj) {
        const item = document.createElement('div');
        item.className = 'badge-item unlocked';
        item.setAttribute('data-tooltip', `${badgeObj.name}: ${badgeObj.desc}`);
        item.innerHTML = `
          <div class="badge-icon">${badgeObj.name.split(' ')[1] || '🏆'}</div>
          <div class="badge-name">${badgeObj.name.split(' ')[0]}</div>
        `;
        recentBadges.appendChild(item);
      }
    });
  }
}

// Render Achievements View
function renderBadgesView() {
  const grid = document.getElementById('badges-grid-all');
  grid.innerHTML = '';
  
  ACHIEVEMENTS.forEach(badge => {
    const isUnlocked = state.unlockedBadges.includes(badge.id);
    const item = document.createElement('div');
    item.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
    item.setAttribute('data-tooltip', `${badge.name}: ${badge.desc}`);
    item.style.padding = '16px';
    item.style.border = '1px solid rgba(255,255,255,0.03)';
    item.style.borderRadius = '8px';
    item.style.background = 'rgba(255,255,255,0.01)';
    item.innerHTML = `
      <div class="badge-icon" style="width: 60px; height: 60px; font-size: 28px; margin: 0 auto;">
        ${badge.name.split(' ')[1] || '🏆'}
      </div>
      <div style="font-weight: 700; font-size: 14px; margin-top: 8px;">${badge.name.split(' ')[0]}</div>
      <div style="font-size: 10px; color: var(--text-muted); margin-top: 4px;">${badge.desc}</div>
    `;
    grid.appendChild(item);
  });
}

// --- CHAPTER DETAIL VIEW & STUDY TABS ---
let currentActiveChapter = null;
let currentTabMode = 'learn';

function openChapterDetail(chapterNum, defaultTab = 'learn') {
  currentActiveChapter = chaptersData.find(c => c.chapterNumber === chapterNum);
  if (!currentActiveChapter) return;
  
  // Set header details
  document.getElementById('chapter-detail-number').innerText = `Chapter ${chapterNum}`;
  document.getElementById('chapter-detail-title').innerText = currentActiveChapter.title.split(':').slice(1).join(':').trim() || currentActiveChapter.title;
  
  navigateView('chapter-detail-view');
  switchTab(defaultTab);
}

document.getElementById('btn-back-to-dashboard').addEventListener('click', () => {
  navigateView('dashboard-view');
});

// Tab Switcher
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

function switchTab(tabIdName) {
  currentTabMode = tabIdName;
  
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.id === `tab-${tabIdName}`) btn.classList.add('active');
  });
  
  tabPanes.forEach(pane => {
    pane.style.display = 'none';
    if (pane.id === `tab-${tabIdName}-pane`) pane.style.display = 'block';
  });
  
  if (tabIdName === 'learn') {
    renderLearnMode();
  } else if (tabIdName === 'flashcards') {
    initFlashcards();
  } else if (tabIdName === 'quiz') {
    initQuiz();
  }
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.id.replace('tab-', '');
    switchTab(mode);
  });
});

// --- LEARN MODE RENDERING ---

/**
 * Converts a single line of markdown text into HTML, handling inline formatting.
 * Supports: **bold**, *italic*, `code`, and combinations.
 */
function inlineMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\\\rightarrow/g, '→')
    .replace(/\\rightarrow/g, '→')
    .replace(/\$\\rightarrow\$/g, '→')
    .replace(/\$\\to\$/g, '→')
    .replace(/->/g, '→')
    .replace(/\$\$(.*?)\$\$/g, '$1')
    .replace(/\$(.*?)\$/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="inline-code">$1</code>');
}

/**
 * Parses a single flowchart markdown line into visual interactive HTML.
 */
function parseFlowchart(line) {
  // Strip leading bullet (*, -) or number (1., 2.)
  let cleanLine = line.replace(/^[\*\-\d\.\s]+\s*/, '');
  
  // Check if there's a label before a colon
  let label = '';
  const colonIdx = cleanLine.indexOf(':');
  if (colonIdx > 0 && colonIdx < 50 && cleanLine.slice(colonIdx + 1).includes('→')) {
    label = cleanLine.slice(0, colonIdx).trim();
    cleanLine = cleanLine.slice(colonIdx + 1).trim();
  }
  
  const steps = cleanLine.split('→').map(s => s.trim()).filter(Boolean);
  if (steps.length < 2) return null;
  
  // Validate steps to prevent rendering long sentences/paragraphs with arrows as flowcharts
  const isInvalid = steps.some(step => step.length > 50 || step.includes('. '));
  if (isInvalid) return null;
  
  let html = '';
  if (label) {
    html += `<div class="flowchart-label">${inlineMarkdown(label)}</div>`;
  }
  
  let containerClass = 'flowchart-container';
  const lastStepLower = steps[steps.length - 1].toLowerCase();
  if (lastStepLower.includes('repeat') || lastStepLower.includes('loop')) {
    containerClass += ' flowchart-cyclic';
  }
  
  html += `<div class="${containerClass}">`;
  steps.forEach((step, idx) => {
    const stepNum = idx + 1;
    const inlineStep = inlineMarkdown(step);
    let stepClass = 'flowchart-step';
    
    const lowerStep = step.toLowerCase();
    if (lowerStep.includes('fail')) {
      stepClass += ' step-danger';
    } else if (lowerStep.includes('pass') || lowerStep.includes('success')) {
      stepClass += ' step-success';
    } else if (lowerStep.includes('refactor')) {
      stepClass += ' step-warning';
    } else if (lowerStep.includes('repeat') || lowerStep.includes('loop')) {
      stepClass += ' step-info';
    } else if (lowerStep.includes('test') || lowerStep.includes('write')) {
      stepClass += ' step-primary';
    }
    
    html += `
      <div class="${stepClass}" data-step="${stepNum}">
        <div class="flowchart-step-num">${stepNum}</div>
        <div class="flowchart-step-text">${inlineStep}</div>
      </div>
    `;
    if (idx < steps.length - 1) {
      html += `
        <div class="flowchart-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      `;
    }
  });
  html += '</div>';
  return html;
}

/**
 * Parses a block of markdown content into well-structured HTML.
 * Handles: paragraphs, numbered lists (1. 2. 3.), bullet lists (* -),
 * nested/indented sub-bullets, sub-headings (#### and ###), and blank lines.
 */
function markdownToHtml(rawContent) {
  const lines = rawContent.split('\n');
  const htmlParts = [];
  let currentListType = null; // 'ul' | 'ol' | null
  let currentSubListType = null; // 'ul' | 'ol' | null (for nested lists)

  function closeSubList() {
    if (currentSubListType) {
      htmlParts.push(`</${currentSubListType}>`);
      currentSubListType = null;
    }
  }

  function closeList() {
    closeSubList();
    if (currentListType) {
      htmlParts.push(`</${currentListType}>`);
      currentListType = null;
    }
  }

  for (const rawLine of lines) {
    let trimmed = rawLine.trim();
    if (trimmed.length === 0) {
      closeList();
      continue;
    }

    // Pre-normalize arrows for flowchart detection
    trimmed = trimmed
      .replace(/\\\rightarrow/g, '→')
      .replace(/\\rightarrow/g, '→')
      .replace(/\$\\rightarrow\$/g, '→')
      .replace(/\$\\to\$/g, '→')
      .replace(/->/g, '→')
      .replace(/\$\$(.*?)\$\$/g, '$1')
      .replace(/\$(.*?)\$/g, '$1');

    // Detect indentation level (sub-items have leading spaces or tabs)
    const indent = rawLine.search(/\S/);
    const isSubItem = indent >= 2;

    // --- Flowchart detection ---
    if ((trimmed.match(/→/g) || []).length >= 2) {
      const flowchartHtml = parseFlowchart(trimmed);
      if (flowchartHtml) {
        closeList();
        htmlParts.push(flowchartHtml);
        continue;
      }
    }

    // --- Sub-headings (#### or ###) ---
    const h4Match = trimmed.match(/^####\s+(.*)/);
    if (h4Match) {
      closeList();
      htmlParts.push(`<h4 class="learn-subheading">${inlineMarkdown(h4Match[1])}</h4>`);
      continue;
    }
    const h3Match = trimmed.match(/^###\s+(.*)/);
    if (h3Match) {
      closeList();
      htmlParts.push(`<h4 class="learn-subheading">${inlineMarkdown(h3Match[1])}</h4>`);
      continue;
    }

    // --- Numbered list items (1. 2. etc.) ---
    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (orderedMatch) {
      const content = orderedMatch[2];
      if (isSubItem) {
        // Nested ordered item inside a parent list
        if (currentSubListType !== 'ol') {
          closeSubList();
          currentSubListType = 'ol';
          htmlParts.push('<ol class="learn-sublist">');
        }
        htmlParts.push(`<li>${inlineMarkdown(content)}</li>`);
      } else {
        // Top-level ordered item
        closeSubList();
        if (currentListType !== 'ol') {
          closeList();
          currentListType = 'ol';
          htmlParts.push('<ol class="learn-list">');
        }
        htmlParts.push(`<li>${inlineMarkdown(content)}</li>`);
      }
      continue;
    }

    // --- Bullet list items (* or -) ---
    const bulletMatch = trimmed.match(/^[\*\-]\s+(.*)/);
    if (bulletMatch) {
      const content = bulletMatch[1];
      if (isSubItem) {
        // Nested bullet inside a parent list
        if (currentSubListType !== 'ul') {
          closeSubList();
          currentSubListType = 'ul';
          htmlParts.push('<ul class="learn-sublist">');
        }
        htmlParts.push(`<li>${inlineMarkdown(content)}</li>`);
      } else {
        // Top-level bullet
        closeSubList();
        if (currentListType !== 'ul') {
          closeList();
          currentListType = 'ul';
          htmlParts.push('<ul class="learn-list">');
        }
        htmlParts.push(`<li>${inlineMarkdown(content)}</li>`);
      }
      continue;
    }

    // --- Plain paragraph text ---
    closeList();
    htmlParts.push(`<p class="learn-paragraph">${inlineMarkdown(trimmed)}</p>`);
  }

  closeList();
  return htmlParts.join('\n');
}

function renderLearnMode() {
  const container = document.getElementById('learn-deck-container');
  container.innerHTML = '';
  
  if (!currentActiveChapter.sections || currentActiveChapter.sections.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);">No detailed reading sections parsed for this chapter.</p>';
    return;
  }
  
  currentActiveChapter.sections.forEach((section, index) => {
    const isCompleted = state.completedSections[`${currentActiveChapter.chapterNumber}_${index}`];
    const card = document.createElement('article');
    card.className = 'learn-card glass-panel';
    if (isCompleted) card.classList.add('completed');

    const contentHtml = markdownToHtml(section.content);
    
    card.innerHTML = `
      <h3>${inlineMarkdown(section.title)}</h3>
      <div class="learn-content-body">${contentHtml}</div>
      <div class="checkpoint-box">
        <div class="checkpoint-title">🎯 ACTIVE RECALL CHECKPOINT</div>
        <p style="font-size:13px; color:var(--text-secondary); margin-bottom: 12px;">
          Close your eyes and try to recall the key points from this section before marking it complete.
        </p>
        <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'} btn-complete-section" data-idx="${index}">
          ${isCompleted ? '✓ Section Completed' : 'I Understand This Concept (+20 XP)'}
        </button>
      </div>
    `;
    
    card.querySelector('.btn-complete-section').addEventListener('click', (e) => {
      if (isCompleted) return;
      
      state.completedSections[`${currentActiveChapter.chapterNumber}_${index}`] = true;
      e.target.innerText = '✓ Section Completed';
      e.target.className = 'btn btn-secondary';
      card.classList.add('completed');
      
      addXP(20);
      renderDashboard();
    });
    
    container.appendChild(card);
  });

  // Append static Practice Test & Answer Key if available
  const mcqs = currentActiveChapter.mcqs || [];
  const shortAnswers = currentActiveChapter.shortAnswers || [];
  
  if (mcqs.length > 0 || shortAnswers.length > 0) {
    const quizCard = document.createElement('article');
    quizCard.className = 'learn-card glass-panel static-quiz-container';
    
    let html = `
      <div class="static-quiz-title">📝 Practice Test & Study Solutions</div>
      
      <div class="static-cta-box glass-panel">
        <span><strong>Interactive Mode Available:</strong> Want to test your active recall and score XP? Try the interactive practice quiz!</span>
        <button class="btn btn-primary btn-sm" id="btn-switch-to-interactive-quiz" style="font-size:12px; padding:6px 12px; white-space: nowrap;">Start Quiz ✏️</button>
      </div>
    `;
    
    if (mcqs.length > 0) {
      html += `<div class="static-section-title">Section A: Multiple-Choice Questions</div>`;
      mcqs.forEach((q, idx) => {
        const letters = ['a', 'b', 'c', 'd'];
        let optionsHtml = '';
        q.options.forEach((opt, optIdx) => {
          const letter = letters[optIdx];
          const isCorrect = letter === q.answer;
          optionsHtml += `
            <div class="static-option ${isCorrect ? 'correct' : ''}">
              <div class="static-option-letter">${letter.toUpperCase()}</div>
              <div>${opt}</div>
            </div>
          `;
        });
        
        html += `
          <div class="static-q-card">
            <div class="static-q-num">Question ${idx + 1}</div>
            <div class="static-q-text">${q.question}</div>
            <div class="static-options-list">
              ${optionsHtml}
            </div>
            <div class="static-explanation">
              <strong>Correct Answer: ${q.answer.toUpperCase()}</strong> — ${q.explanation}
            </div>
          </div>
        `;
      });
    }
    
    if (shortAnswers.length > 0) {
      html += `<div class="static-section-title">Section B: Short-Answer & Scenario Questions</div>`;
      shortAnswers.forEach((q) => {
        html += `
          <div class="static-q-card">
            <div class="static-q-num">Question ${q.num}</div>
            <div class="static-q-text">${q.question}</div>
            <div class="static-solution">
              <strong>Suggested Model Solution:</strong>
              <p style="margin-top: 8px; white-space: pre-line;">${q.solution}</p>
            </div>
          </div>
        `;
      });
    }
    
    quizCard.innerHTML = html;
    container.appendChild(quizCard);
    
    // Add event listener to CTA button
    const ctaBtn = quizCard.querySelector('#btn-switch-to-interactive-quiz');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        switchTab('quiz');
      });
    }
  }
}

// --- FLASHCARDS MODE (KEY TERMS) ---
let flashcardsList = [];
let currentFlashcardIndex = 0;

function initFlashcards() {
  flashcardsList = currentActiveChapter.keyTerms || [];
  currentFlashcardIndex = 0;
  
  if (flashcardsList.length === 0) {
    document.getElementById('flashcards-pane').innerHTML = '<p style="color:var(--text-muted); text-align:center; padding: 48px;">No key terms available for this chapter.</p>';
    return;
  }
  
  renderFlashcard();
}

const cardScene = document.getElementById('flashcard-element');
cardScene.addEventListener('click', () => {
  cardScene.classList.toggle('flipped');
});

function renderFlashcard() {
  cardScene.classList.remove('flipped');
  
  // Small timeout to allow flipping back before text shifts
  setTimeout(() => {
    const card = flashcardsList[currentFlashcardIndex];
    document.getElementById('flashcard-deck-progress').innerText = `Card ${currentFlashcardIndex + 1} of ${flashcardsList.length}`;
    document.getElementById('flashcard-front-text').innerText = card.term;
    document.getElementById('flashcard-back-text').innerText = card.definition;
  }, 150);
}

document.getElementById('btn-flashcard-prev').addEventListener('click', () => {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    renderFlashcard();
  }
});

document.getElementById('btn-flashcard-next').addEventListener('click', () => {
  if (currentFlashcardIndex < flashcardsList.length - 1) {
    currentFlashcardIndex++;
    renderFlashcard();
  }
});

document.getElementById('btn-flashcard-got-it').addEventListener('click', () => {
  const card = flashcardsList[currentFlashcardIndex];
  state.masteredTerms[`${currentActiveChapter.chapterNumber}_${currentFlashcardIndex}`] = true;
  
  // Remove from Spaced Repetition Review Deck if it was there
  state.reviewDeck = state.reviewDeck.filter(item => !(item.chapterNum === currentActiveChapter.chapterNumber && item.term === card.term));
  
  addXP(10);
  
  // Automatically advance to next card
  if (currentFlashcardIndex < flashcardsList.length - 1) {
    currentFlashcardIndex++;
    renderFlashcard();
  } else {
    alert("🎉 Excellent! You've finished this chapter's flashcard deck.");
  }
});

document.getElementById('btn-flashcard-needs-review').addEventListener('click', () => {
  const card = flashcardsList[currentFlashcardIndex];
  
  // Add to Spaced Repetition Review Deck if not already present
  const exists = state.reviewDeck.some(item => item.chapterNum === currentActiveChapter.chapterNumber && item.term === card.term);
  if (!exists) {
    state.reviewDeck.push({
      chapterNum: currentActiveChapter.chapterNumber,
      term: card.term,
      definition: card.definition
    });
    saveState();
    updateUI();
  }
  
  // Go to next card
  if (currentFlashcardIndex < flashcardsList.length - 1) {
    currentFlashcardIndex++;
    renderFlashcard();
  } else {
    alert("Flashcard deck complete! Added flagged items to your Review Deck.");
  }
});

// --- SPACED REPETITION REVIEW DECK VIEW ---
let reviewIndex = 0;

function renderReviewDeck() {
  const emptyView = document.getElementById('review-deck-empty');
  const activeView = document.getElementById('review-deck-active');
  const cardSceneRev = document.getElementById('review-card-element');
  
  cardSceneRev.addEventListener('click', () => {
    cardSceneRev.classList.toggle('flipped');
  });
  
  if (state.reviewDeck.length === 0) {
    emptyView.style.display = 'block';
    activeView.style.display = 'none';
    return;
  }
  
  emptyView.style.display = 'none';
  activeView.style.display = 'block';
  reviewIndex = 0;
  
  renderReviewCard();
}

function renderReviewCard() {
  const cardSceneRev = document.getElementById('review-card-element');
  cardSceneRev.classList.remove('flipped');
  
  setTimeout(() => {
    const card = state.reviewDeck[reviewIndex];
    document.getElementById('review-card-progress').innerText = `Review Card ${reviewIndex + 1} of ${state.reviewDeck.length}`;
    document.getElementById('review-card-front-text').innerText = `${card.term} (Ch. ${card.chapterNum})`;
    document.getElementById('review-card-back-text').innerText = card.definition;
  }, 150);
}

document.getElementById('btn-review-keep').addEventListener('click', () => {
  // Just advance without removing
  if (reviewIndex < state.reviewDeck.length - 1) {
    reviewIndex++;
    renderReviewCard();
  } else {
    reviewIndex = 0;
    renderReviewCard();
  }
});

document.getElementById('btn-review-mastered').addEventListener('click', () => {
  // Remove from deck
  state.reviewDeck.splice(reviewIndex, 1);
  addXP(15); // Bonus for mastering a reviewed card
  
  if (state.reviewDeck.length === 0) {
    renderReviewDeck();
  } else {
    if (reviewIndex >= state.reviewDeck.length) {
      reviewIndex = 0;
    }
    renderReviewCard();
  }
});

// --- PRACTICE QUIZ MODULE ---
let quizMcqs = [];
let quizShortAnswers = [];
let currentMcqIdx = 0;
let currentEssayIdx = 0;
let quizViewMode = 'mcq'; // 'mcq' or 'essay'

function initQuiz() {
  quizMcqs = currentActiveChapter.mcqs || [];
  quizShortAnswers = currentActiveChapter.shortAnswers || [];
  currentMcqIdx = 0;
  currentEssayIdx = 0;
  quizViewMode = 'mcq';
  
  document.getElementById('quiz-mcq-container').style.display = 'block';
  document.getElementById('quiz-essay-container').style.display = 'none';
  
  if (quizMcqs.length === 0 && quizShortAnswers.length === 0) {
    document.getElementById('tab-quiz-pane').innerHTML = '<p style="color:var(--text-muted); text-align:center; padding: 48px;">No practice questions compiled for this chapter.</p>';
    return;
  }
  
  if (quizMcqs.length > 0) {
    renderQuizMcq();
  } else {
    // Jump straight to essay if no MCQs
    quizViewMode = 'essay';
    document.getElementById('quiz-mcq-container').style.display = 'none';
    document.getElementById('quiz-essay-container').style.display = 'block';
    renderQuizEssay();
  }
}

function renderQuizMcq() {
  const q = quizMcqs[currentMcqIdx];
  document.getElementById('quiz-mcq-number').innerText = `Question ${currentMcqIdx + 1} of ${quizMcqs.length} (Section A: Multiple Choice)`;
  document.getElementById('quiz-mcq-text').innerText = q.question;
  
  const optionsDiv = document.getElementById('quiz-mcq-options');
  optionsDiv.innerHTML = '';
  
  const savedSelection = state.quizProgress[`${currentActiveChapter.chapterNumber}_${currentMcqIdx}`];
  const explanationDiv = document.getElementById('quiz-mcq-explanation');
  
  if (savedSelection) {
    explanationDiv.classList.add('visible');
    document.getElementById('quiz-mcq-explanation-text').innerText = q.explanation;
  } else {
    explanationDiv.classList.remove('visible');
  }
  
  const letters = ['a', 'b', 'c', 'd'];
  q.options.forEach((optText, index) => {
    const letter = letters[index];
    const optCard = document.createElement('div');
    optCard.className = 'mcq-option';
    optCard.innerHTML = `
      <div class="mcq-option-letter">${letter.toUpperCase()}</div>
      <div class="mcq-option-text">${optText}</div>
    `;
    
    // Highlight states if already answered
    if (savedSelection) {
      if (letter === q.answer) {
        optCard.classList.add('correct');
      } else if (letter === savedSelection) {
        optCard.classList.add('incorrect');
      }
    } else {
      // Click handler for answering
      optCard.addEventListener('click', () => {
        state.quizProgress[`${currentActiveChapter.chapterNumber}_${currentMcqIdx}`] = letter;
        
        if (letter === q.answer) {
          optCard.classList.add('correct');
          addXP(50); // Pass quiz item
        } else {
          optCard.classList.add('incorrect');
          // Highlight correct one too
          const correctCard = optionsDiv.children[letters.indexOf(q.answer)];
          if (correctCard) correctCard.classList.add('correct');
        }
        
        explanationDiv.classList.add('visible');
        document.getElementById('quiz-mcq-explanation-text').innerText = q.explanation;
        saveState();
        
        // Re-render briefly to freeze options
        setTimeout(() => renderQuizMcq(), 1000);
      });
    }
    
    optionsDiv.appendChild(optCard);
  });
}

document.getElementById('btn-quiz-mcq-prev').addEventListener('click', () => {
  if (currentMcqIdx > 0) {
    currentMcqIdx--;
    renderQuizMcq();
  }
});

document.getElementById('btn-quiz-mcq-next').addEventListener('click', () => {
  if (currentMcqIdx < quizMcqs.length - 1) {
    currentMcqIdx++;
    renderQuizMcq();
  } else if (quizShortAnswers.length > 0) {
    // Navigate to Essay
    quizViewMode = 'essay';
    document.getElementById('quiz-mcq-container').style.display = 'none';
    document.getElementById('quiz-essay-container').style.display = 'block';
    renderQuizEssay();
  } else {
    alert("Quiz completed! Practice makes perfect.");
    navigateView('dashboard-view');
  }
});

// Essay Study Questions
function renderQuizEssay() {
  const q = quizShortAnswers[currentEssayIdx];
  document.getElementById('quiz-essay-number').innerText = `Question ${q.num} (Section B: Short-Answer & Scenario)`;
  document.getElementById('quiz-essay-text').innerText = q.question;
  
  const textarea = document.getElementById('quiz-essay-input');
  textarea.value = '';
  
  const solutionBox = document.getElementById('quiz-essay-solution-box');
  solutionBox.classList.remove('visible');
  
  const savedScore = state.essayProgress[`${currentActiveChapter.chapterNumber}_${currentEssayIdx}`];
  if (savedScore !== undefined) {
    textarea.value = "(Answer reviewed and self-graded)";
    solutionBox.classList.add('visible');
    document.getElementById('quiz-essay-solution-text').innerText = q.solution;
  }
}

document.getElementById('btn-quiz-essay-submit').addEventListener('click', () => {
  const q = quizShortAnswers[currentEssayIdx];
  const solutionBox = document.getElementById('quiz-essay-solution-box');
  solutionBox.classList.add('visible');
  document.getElementById('quiz-essay-solution-text').innerText = q.solution;
});

// Self eval grading event handlers
document.getElementById('btn-self-eval-incorrect').addEventListener('click', () => {
  saveEssayProgress(0);
});
document.getElementById('btn-self-eval-partial').addEventListener('click', () => {
  saveEssayProgress(50);
});
document.getElementById('btn-self-eval-correct').addEventListener('click', () => {
  saveEssayProgress(100);
});

function saveEssayProgress(score) {
  state.essayProgress[`${currentActiveChapter.chapterNumber}_${currentEssayIdx}`] = score;
  addXP(score);
  
  if (currentEssayIdx < quizShortAnswers.length - 1) {
    currentEssayIdx++;
    renderQuizEssay();
  } else {
    alert("🎉 Practice Quiz complete! Keep up the great work.");
    navigateView('dashboard-view');
  }
}

document.getElementById('btn-quiz-essay-prev').addEventListener('click', () => {
  if (currentEssayIdx > 0) {
    currentEssayIdx--;
    renderQuizEssay();
  } else if (quizMcqs.length > 0) {
    // Back to MCQs
    quizViewMode = 'mcq';
    document.getElementById('quiz-mcq-container').style.display = 'block';
    document.getElementById('quiz-essay-container').style.display = 'none';
    currentMcqIdx = quizMcqs.length - 1;
    renderQuizMcq();
  }
});

document.getElementById('btn-quiz-essay-next').addEventListener('click', () => {
  if (currentEssayIdx < quizShortAnswers.length - 1) {
    currentEssayIdx++;
    renderQuizEssay();
  } else {
    alert("Practice Quiz complete!");
    navigateView('dashboard-view');
  }
});


// --- MOCK EXAMINATION SIMULATOR ---
let examQuestions = [];
let examActiveIdx = 0;
let examTimerInterval = null;
let currentExamData = null;

// Helper to get/create per-exam state
function getExamState(examId) {
  if (!state.examStates[examId]) {
    state.examStates[examId] = {
      answers: {},
      scores: {},
      completed: false,
      active: false,
      timeRemaining: 10800
    };
  }
  return state.examStates[examId];
}

// Sync selected exam state into the legacy state fields (for backward compat)
function syncExamToLegacy(examId) {
  const es = getExamState(examId);
  state.mockAnswers = es.answers;
  state.mockScores = es.scores;
  state.mockCompleted = es.completed;
  state.mockActive = es.active;
  state.mockExamTimeRemaining = es.timeRemaining;
  state.selectedExamId = examId;
}

function syncLegacyToExam(examId) {
  const es = getExamState(examId);
  es.answers = state.mockAnswers;
  es.scores = state.mockScores;
  es.completed = state.mockCompleted;
  es.active = state.mockActive;
  es.timeRemaining = state.mockExamTimeRemaining;
}

function renderMockExam() {
  const intro = document.getElementById('mock-exam-intro-screen');
  const active = document.getElementById('mock-exam-active-screen');
  const results = document.getElementById('mock-exam-results-screen');
  
  const mainViewport = document.querySelector('.main-viewport');
  if (mainViewport) {
    mainViewport.scrollTop = 0;
  }
  
  // Render exam selector cards
  renderExamSelector();

  if (state.selectedExamId) {
    currentExamData = allExams.find(e => e.id === state.selectedExamId);
    syncExamToLegacy(state.selectedExamId);
  } else {
    currentExamData = null;
  }
  
  if (state.mockCompleted && currentExamData) {
    intro.style.display = 'none';
    active.style.display = 'none';
    results.style.display = 'block';
    renderMockResults();
  } else if (state.mockActive && currentExamData) {
    intro.style.display = 'none';
    active.style.display = 'block';
    results.style.display = 'none';
    initActiveMockExam();
  } else {
    intro.style.display = 'block';
    active.style.display = 'none';
    results.style.display = 'none';
  }
}

function renderExamSelector() {
  let selectorContainer = document.getElementById('exam-selector-container');
  if (!selectorContainer) return;
  selectorContainer.innerHTML = '';

  allExams.forEach((exam, idx) => {
    const es = getExamState(exam.id);
    const isSelected = state.selectedExamId === exam.id;
    const qCount = exam.questions ? exam.questions.length : 0;
    const totalMarks = exam.questions ? exam.questions.reduce((s, q) => s + q.marks, 0) : 100;
    
    let statusBadge = '';
    let statusClass = '';
    if (es.completed) {
      const totalScore = Object.values(es.scores).reduce((s, v) => s + v, 0);
      statusBadge = `<span class="exam-status-badge completed">✓ Scored: ${totalScore}/${totalMarks}</span>`;
      statusClass = 'completed';
    } else if (es.active) {
      statusBadge = '<span class="exam-status-badge active">⏱ In Progress</span>';
      statusClass = 'in-progress';
    }

    const card = document.createElement('div');
    card.className = `exam-select-card glass-panel ${isSelected ? 'selected' : ''} ${statusClass}`;
    card.innerHTML = `
      <div class="exam-select-number">Exam ${idx + 1}</div>
      <div class="exam-select-title">${exam.title}</div>
      <div class="exam-select-meta">${qCount} Questions · ${totalMarks} Marks · 3 Hours</div>
      ${statusBadge}
    `;
    card.addEventListener('click', () => {
      // Save current exam state if switching
      if (state.selectedExamId && state.selectedExamId !== exam.id) {
        syncLegacyToExam(state.selectedExamId);
      }
      state.selectedExamId = exam.id;
      saveState();
      renderMockExam();
    });
    selectorContainer.appendChild(card);
  });
}

document.getElementById('btn-start-mock-exam').addEventListener('click', () => {
  if (!currentExamData) {
    alert('Please select an exam first.');
    return;
  }
  state.mockActive = true;
  state.mockExamTimeRemaining = 10800; // 3 hours
  state.mockAnswers = {};
  state.mockScores = {};
  syncLegacyToExam(state.selectedExamId);
  saveState();
  
  renderMockExam();
});

function initActiveMockExam() {
  examQuestions = currentExamData ? currentExamData.questions || [] : [];
  examActiveIdx = 0;
  
  const solPane = document.getElementById('exam-solution-pane');
  if (solPane) solPane.classList.remove('active');
  
  // Render navigator dots
  renderNavigatorDots();
  
  // Render first question
  renderExamQuestion();
  
  // Start Timer
  if (examTimerInterval) clearInterval(examTimerInterval);
  examTimerInterval = setInterval(() => {
    state.mockExamTimeRemaining--;
    if (state.mockExamTimeRemaining <= 0) {
      clearInterval(examTimerInterval);
      alert("⏱️ Time is up! Submitting exam automatically.");
      submitMockExamAuto();
    } else {
      updateTimerDisplay();
      if (state.mockExamTimeRemaining % 30 === 0) {
        syncLegacyToExam(state.selectedExamId);
        saveState(); // Autosave every 30s
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const s = state.mockExamTimeRemaining;
  const hrs = Math.floor(s / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  
  const padded = (n) => String(n).padStart(2, '0');
  const timerDiv = document.getElementById('exam-timer-widget');
  document.getElementById('exam-time-display').innerText = `${padded(hrs)}:${padded(mins)}:${padded(secs)}`;
  
  if (s < 600) { // 10 minutes warning
    timerDiv.classList.add('warning');
  } else {
    timerDiv.classList.remove('warning');
  }
}

function renderNavigatorDots() {
  const populateSectionDots = (sectionName, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    examQuestions.forEach((q, idx) => {
      if (q.section === sectionName) {
        const dot = document.createElement('div');
        dot.className = 'exam-nav-dot';
        if (idx === examActiveIdx) dot.classList.add('current');
        if (state.mockAnswers[q.num] && state.mockAnswers[q.num].trim().length > 0) dot.classList.add('answered');
        
        dot.innerText = q.num;
        if (String(q.num).length > 2) {
          dot.style.fontSize = '11px';
        }
        dot.addEventListener('click', () => {
          // Save current answer draft first
          saveExamDraftAnswer();
          examActiveIdx = idx;
          renderExamQuestion();
          renderNavigatorDots();
        });
        container.appendChild(dot);
      }
    });
  };
  
  if (currentSubject === 'nhci') {
    // Show only Section A as the unified questions list
    document.getElementById('exam-nav-section-a').style.display = 'block';
    document.querySelector('#exam-nav-section-a .exam-section-label').innerText = 'Exam Questions';
    document.getElementById('exam-nav-section-b').style.display = 'none';
    document.getElementById('exam-nav-section-c').style.display = 'none';
    
    populateSectionDots('A', 'exam-sec-a-dots');
  } else {
    // Show all three sections for SE
    document.getElementById('exam-nav-section-a').style.display = 'block';
    document.querySelector('#exam-nav-section-a .exam-section-label').innerText = 'Section A';
    document.getElementById('exam-nav-section-b').style.display = 'block';
    document.getElementById('exam-nav-section-c').style.display = 'block';
    
    populateSectionDots('A', 'exam-sec-a-dots');
    populateSectionDots('B', 'exam-sec-b-dots');
    populateSectionDots('C', 'exam-sec-c-dots');
  }
}

function renderExamQuestion() {
  const q = examQuestions[examActiveIdx];
  document.getElementById('mock-q-title').innerText = `Question ${q.num}: ${q.title}`;
  document.getElementById('mock-q-marks').innerText = `${q.marks} Mark${q.marks === 1 ? '' : 's'}`;
  // Dynamic scenario pane rendering
  const scenarioPane = document.getElementById('exam-scenario-pane');
  const scenarioContent = document.getElementById('exam-scenario-content');
  if (q.scenario && q.scenario.trim().length > 0) {
    scenarioPane.style.display = 'flex';
    scenarioContent.innerText = q.scenario;
  } else {
    scenarioPane.style.display = 'none';
    scenarioContent.innerText = '';
  }
  
  document.getElementById('mock-q-description').innerText = q.description;
  
  if (currentSubject === 'nhci') {
    document.getElementById('exam-sec-title').innerText = currentExamData ? currentExamData.title : 'Exam Question';
  } else {
    const sectionLabels = {
      'A': 'Section A: Theory & Core Concepts [40 Marks Total]',
      'B': 'Section B: UML Modeling & Diagram Design [30 Marks Total]',
      'C': 'Section C: Case Studies & Scenario Analysis [30 Marks Total]'
    };
    document.getElementById('exam-sec-title').innerText = sectionLabels[q.section];
  }
  
  const textarea = document.getElementById('mock-q-answer-input');
  textarea.value = state.mockAnswers[q.num] || '';
  
  // Dynamic solution pane rendering (if active)
  const solPane = document.getElementById('exam-solution-pane');
  if (solPane && solPane.classList.contains('active')) {
    document.getElementById('exam-solution-content').innerText = q.solution || 'No solution key provided for this question.';
  }
}

function saveExamDraftAnswer() {
  const q = examQuestions[examActiveIdx];
  const val = document.getElementById('mock-q-answer-input').value;
  state.mockAnswers[q.num] = val;
  saveState();
}

document.getElementById('btn-mock-prev').addEventListener('click', () => {
  if (examActiveIdx > 0) {
    saveExamDraftAnswer();
    examActiveIdx--;
    renderExamQuestion();
    renderNavigatorDots();
  }
});

document.getElementById('btn-mock-next').addEventListener('click', () => {
  if (examActiveIdx < examQuestions.length - 1) {
    saveExamDraftAnswer();
    examActiveIdx++;
    renderExamQuestion();
    renderNavigatorDots();
  }
});

document.getElementById('btn-reveal-answer').addEventListener('click', () => {
  const solPane = document.getElementById('exam-solution-pane');
  if (solPane) {
    solPane.classList.toggle('active');
    if (solPane.classList.contains('active')) {
      const q = examQuestions[examActiveIdx];
      document.getElementById('exam-solution-content').innerText = q.solution || 'No solution key provided for this question.';
    }
  }
});

document.getElementById('btn-close-solution').addEventListener('click', () => {
  const solPane = document.getElementById('exam-solution-pane');
  if (solPane) {
    solPane.classList.remove('active');
  }
});

// Self-Evaluation Modal Dialog Flow
let evalQueue = [];
let currentEvalIdx = 0;

document.getElementById('btn-submit-mock-exam').addEventListener('click', () => {
  if (confirm("Are you ready to submit your exam and start the self-evaluation grading flow?")) {
    saveExamDraftAnswer();
    clearInterval(examTimerInterval);
    state.mockActive = false;
    syncLegacyToExam(state.selectedExamId);
    
    // Prepare the evaluation queue of all questions
    evalQueue = [...examQuestions];
    currentEvalIdx = 0;
    
    openEvaluationModal();
  }
});

function openEvaluationModal() {
  if (currentEvalIdx >= evalQueue.length) {
    // Finished all grading!
    state.mockCompleted = true;
    syncLegacyToExam(state.selectedExamId);
    saveState();
    checkAchievements();
    renderMockExam();
    return;
  }
  
  const q = evalQueue[currentEvalIdx];
  const userAns = state.mockAnswers[q.num] || "(No answer typed)";
  const modal = document.getElementById('mock-eval-modal');
  
  modal.style.display = 'flex';
  document.getElementById('modal-q-num').innerText = q.num;
  document.getElementById('modal-max-score').innerText = q.marks;
  document.getElementById('modal-user-ans').innerText = userAns;
  
  // Format model answer simply
  document.getElementById('modal-model-ans').innerText = q.solution;
  
  // Create grading buttons from 0 up to max marks
  const buttonGrid = document.getElementById('modal-mark-buttons');
  buttonGrid.innerHTML = '';
  for (let s = 0; s <= q.marks; s++) {
    const btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.style.padding = '8px 16px';
    btn.innerText = `${s} Mark${s === 1 ? '' : 's'}`;
    btn.addEventListener('click', () => {
      state.mockScores[q.num] = s;
      // Award XP equal to graded marks * 10
      addXP(s * 10);
      
      modal.style.display = 'none';
      currentEvalIdx++;
      openEvaluationModal();
    });
    buttonGrid.appendChild(btn);
  }
}

function submitMockExamAuto() {
  // Simulates automatic grading with 0 marks for un-submitted items
  examQuestions.forEach(q => {
    state.mockScores[q.num] = 0;
  });
  state.mockActive = false;
  state.mockCompleted = true;
  syncLegacyToExam(state.selectedExamId);
  saveState();
  renderMockExam();
}

function renderMockResults() {
  const tbody = document.getElementById('exam-results-tbody');
  tbody.innerHTML = '';
  
  let totalScore = 0;
  examQuestions.forEach(q => {
    const score = state.mockScores[q.num] || 0;
    totalScore += score;
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${q.num}</td>
      <td><strong>${q.title}</strong></td>
      <td>${q.marks}</td>
      <td><span style="font-weight:700; color:${score > q.marks/2 ? 'var(--secondary)' : 'var(--danger)'}">${score}</span></td>
      <td><button class="btn btn-secondary action-view-sol" style="font-size:10px; padding:4px 8px;">View Solution</button></td>
    `;
    
    row.querySelector('.action-view-sol').addEventListener('click', () => {
      alert(`Model Answer for Q${q.num}:\n\n${q.solution}`);
    });
    tbody.appendChild(row);
  });
  
  document.getElementById('exam-final-score').innerText = totalScore;
  
  const totalMarks = examQuestions.reduce((s, q) => s + q.marks, 0);
  const examTotalMarksEl = document.getElementById('exam-total-marks');
  if (examTotalMarksEl) examTotalMarksEl.innerText = totalMarks;
  
  const pct = totalMarks > 0 ? (totalScore / totalMarks) * 100 : 0;
  const banner = document.getElementById('exam-grade-banner');
  if (pct >= 75) {
    banner.innerText = `GRADE: A (EXCELLENT) 🏆 (${pct.toFixed(1)}%)`;
    banner.style.color = "var(--secondary)";
  } else if (pct >= 60) {
    banner.innerText = `GRADE: B (GOOD) 👍 (${pct.toFixed(1)}%)`;
    banner.style.color = "var(--primary-hover)";
  } else if (pct >= 50) {
    banner.innerText = `GRADE: C (PASSED) 🤝 (${pct.toFixed(1)}%)`;
    banner.style.color = "var(--warning)";
  } else {
    banner.innerText = `GRADE: F (FAIL - NEED REVIEW) ❌ (${pct.toFixed(1)}%)`;
    banner.style.color = "var(--danger)";
  }
}

document.getElementById('btn-close-exam-results').addEventListener('click', () => {
  // Reset so they can retake it if they want
  if (confirm("Return to dashboard? This will archive your results, allowing you to start a new mock exam later.")) {
    state.mockCompleted = false;
    state.mockAnswers = {};
    state.mockScores = {};
    syncLegacyToExam(state.selectedExamId);
    saveState();
    renderMockExam();
    navigateView('dashboard-view');
  }
});


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Initialize subject dropdown selector state
  const subjSelect = document.getElementById('subject-select');
  if (subjSelect) {
    subjSelect.value = currentSubject;
    subjSelect.addEventListener('change', (e) => {
      switchSubject(e.target.value);
    });
  }

  loadState();
  updateSubjectUI();
  updateUI();
  renderDashboard();
  
  document.getElementById('btn-reset-data').addEventListener('click', resetProgress);
  
  // Set up random daily motivation quotes
  const quotes = [
    "Active recall is 150% more effective for long-term memorization than passive reading.",
    "Bite-sized chunks are easier to digest. Spend 15 minutes per chapter daily.",
    "Gamification increases persistence. Unlock the 'Exam Graduate' badge by taking the mock test!",
    "Spaced repetition schedules counteract the forgetting curve. Review your weak deck weekly.",
    "Ethics is a major section of Chapter 1. Remember the 8 principles of the ACM/IEEE code."
  ];
  document.getElementById('motivational-quote').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
});
