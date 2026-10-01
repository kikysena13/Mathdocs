/* ==========================================
   PROGRAMMER MATHEMATICS HANDBOOK
   JavaScript - Interactive Features
   ========================================== */

// ==========================================
// DATA & CONFIGURATION
// ==========================================

const CHAPTERS = {
    1: {
        title: 'Linear Algebra',
        subtitle: 'Fondasi Matematika untuk Machine Learning & Graphics',
        pages: [2, 3, 4, 5],
        topics: ['Matrix', 'Vector', 'Eigenvalue', 'Tensor', 'PCA']
    },
    2: {
        title: 'Calculus',
        subtitle: 'Fondasi Optimisasi & Machine Learning',
        pages: [6, 7, 8],
        topics: ['Derivative', 'Gradient Descent', 'Differential Equation', 'Jacobian', 'Hessian']
    },
    3: {
        title: 'Discrete Mathematics',
        subtitle: 'Algoritma, Struktur Data & Graph Theory',
        pages: [9, 10, 11],
        topics: ['Graph Theory', 'Logic', 'Set Theory', 'Combinatorics', 'Automata']
    },
    4: {
        title: 'Probability & Statistics',
        subtitle: 'Data Analysis & Machine Learning Foundations',
        pages: [12, 13, 14],
        topics: ['Bayesian', 'Gaussian Distribution', 'Markov Chain', 'Entropy', 'Variance']
    },
    5: {
        title: 'Computational Complexity',
        subtitle: 'Algorithm Analysis & Performance Optimization',
        pages: [15, 16, 17],
        topics: ['Big O', 'NP Complete', 'Optimization', 'Recursion Tree']
    },
    6: {
        title: 'Cryptography Mathematics',
        subtitle: 'Security, Encryption & Privacy',
        pages: [18, 19, 20],
        topics: ['Modular Arithmetic', 'RSA', 'Prime Number', 'Elliptic Curve', 'Hashing']
    },
    7: {
        title: 'Numerical Methods',
        subtitle: 'Computational Mathematics & Simulation',
        pages: [21, 22, 23],
        topics: ['Newton Raphson', 'Interpolation', 'Numerical Integration', 'Floating Point Error']
    }
};

const QUIZZES = [
    {
        chapter: 1,
        question: 'Apa itu eigenvector dari matrix A?',
        options: [
            'Vector yang arahnya tidak berubah ketika dikali matrix A',
            'Vector random dari matrix A',
            'Baris dari matrix A',
            'Kolom dari matrix A'
        ],
        correct: 0
    },
    {
        chapter: 1,
        question: 'PCA digunakan untuk apa?',
        options: [
            'Meningkatkan dimensi data',
            'Mengurangi dimensi sambil mempertahankan varians',
            'Mengenkripsi data',
            'Menghapus data'
        ],
        correct: 1
    },
    {
        chapter: 2,
        question: 'Apa dasar dari backpropagation dalam neural networks?',
        options: [
            'Matrix multiplication',
            'Chain rule dari calculus',
            'Linear algebra',
            'Graph theory'
        ],
        correct: 1
    },
    {
        chapter: 2,
        question: 'Gradient descent mencari apa?',
        options: [
            'Maksimum fungsi',
            'Rata-rata fungsi',
            'Minimum fungsi',
            'Derivative fungsi'
        ],
        correct: 2
    },
    {
        chapter: 3,
        question: 'Apa perbedaan DFS dan BFS?',
        options: [
            'DFS lebih cepat dari BFS',
            'DFS menggunakan stack, BFS menggunakan queue',
            'BFS lebih cepat dari DFS',
            'Tidak ada perbedaan'
        ],
        correct: 1
    },
    {
        chapter: 3,
        question: 'Permutation P(n,r) menghitung apa?',
        options: [
            'Kombinasi r items dari n',
            'Jumlah unique arrangements dari r items dari n',
            'Jumlah total items',
            'Jumlah subset'
        ],
        correct: 1
    },
    {
        chapter: 4,
        question: 'Bayes\' theorem digunakan untuk apa?',
        options: [
            'Menghitung probability absolut',
            'Menghitung conditional probability',
            'Menghitung variance',
            'Menghitung mean'
        ],
        correct: 1
    },
    {
        chapter: 5,
        question: 'O(n²) berarti apa?',
        options: [
            'Constant time',
            'Linear time',
            'Quadratic time',
            'Exponential time'
        ],
        correct: 2
    },
    {
        chapter: 6,
        question: 'RSA security bergantung pada apa?',
        options: [
            'Kesulitan integer factorization',
            'Kesulitan matrix inversion',
            'Kesulitan sorting',
            'Kesulitan searching'
        ],
        correct: 0
    },
    {
        chapter: 7,
        question: 'Newton-Raphson method digunakan untuk apa?',
        options: [
            'Mencari maksimum fungsi',
            'Mencari roots/zeros dari fungsi',
            'Menghitung integral',
            'Menghitung derivative'
        ],
        correct: 1
    }
];

const FLASHCARDS = [
    { front: 'Eigenvalue λ dari matrix A', back: 'Av = λv, scalar yang memenuhi persamaan tersebut' },
    { front: 'Eigenvector v dari matrix A', back: 'Vector non-zero yang direction-nya tidak berubah ketika dikali A' },
    { front: 'PCA Formula', back: 'X_reduced = X * W, di mana W adalah eigenvectors dari covariance matrix' },
    { front: 'Derivative', back: 'f\'(x) = lim(h→0) [f(x+h) - f(x)] / h' },
    { front: 'Gradient', back: '∇f = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]' },
    { front: 'Gradient Descent Update', back: 'w = w - learning_rate * ∇L' },
    { front: 'Bayes\' Theorem', back: 'P(A|B) = P(B|A) * P(A) / P(B)' },
    { front: 'Gaussian PDF', back: 'f(x) = (1 / (σ√(2π))) * e^(-(x-μ)² / (2σ²))' },
    { front: 'Big O Classes', back: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)' },
    { front: 'RSA Encryption', back: 'c = m^e mod n (m = plaintext, e = public exponent, n = modulus)' },
    { front: 'Newton-Raphson', back: 'xₙ₊₁ = xₙ - f(xₙ) / f\'(xₙ)' },
    { front: 'Shannon Entropy', back: 'H(X) = -Σ P(x) * log₂(P(x))' },
    { front: 'Matrix Multiplication Rule', back: '(m×n) * (n×p) = (m×p), inner dimensions harus match' },
    { front: 'DFS Time Complexity', back: 'O(V + E), V = vertices, E = edges' },
    { front: 'Elliptic Curve Equation', back: 'y² ≡ x³ + ax + b (mod p)' },
];

// ==========================================
// STATE MANAGEMENT
// ==========================================

let currentPage = 0;
const totalPages = 25;

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
let progress = JSON.parse(localStorage.getItem('progress')) || {};
let currentFlashcard = 0;
let currentQuizQuestion = 0;

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    createParticles();
    setupEventListeners();
    loadProgress();
    updatePageDisplay();
});

function initializeApp() {
    // Initialize progress for all chapters
    for (let i = 1; i <= 7; i++) {
        if (!progress[i]) {
            progress[i] = 0;
        }
    }
    
    // Generate TOC modal content
    generateTOCModal();
    
    // Update page counter
    document.getElementById('totalPages').textContent = totalPages;
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEventListeners() {
    // Navigation buttons
    document.getElementById('nextBtn').addEventListener('click', nextPage);
    document.getElementById('prevBtn').addEventListener('click', prevPage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') prevPage();
    });
    
    // Header buttons
    document.getElementById('tocBtn').addEventListener('click', () => openModal('tocModal'));
    document.getElementById('searchBtn').addEventListener('click', () => openModal('searchModal'));
    document.getElementById('bookmarkBtn').addEventListener('click', () => openModal('bookmarkModal'));
    document.getElementById('quizBtn').addEventListener('click', () => startQuiz());
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
    
    // Copy code buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const codeBlock = e.target.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = btn.textContent;
                btn.textContent = '✓ Copied!';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            });
        });
    });
    
    // TOC items click
    document.querySelectorAll('.toc-item').forEach(item => {
        item.addEventListener('click', () => {
            const chapter = parseInt(item.dataset.chapter);
            goToChapter(chapter);
        });
    });
    
    // Bookmark current page button
    const bookmarkCurrentBtn = document.getElementById('bookmarkCurrentBtn');
    if (bookmarkCurrentBtn) {
        bookmarkCurrentBtn.addEventListener('click', bookmarkCurrentPage);
    }
    
    // Flashcard click to flip
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.addEventListener('click', () => {
            const inner = flashcard.querySelector('.flashcard-inner');
            inner.classList.toggle('flipped');
        });
    }
    
    // Flashcard navigation
    document.getElementById('prevFlashcard')?.addEventListener('click', prevFlashcard);
    document.getElementById('nextFlashcard')?.addEventListener('click', nextFlashcard);
    
    // Career roadmap items
    document.querySelectorAll('.roadmap-item').forEach(item => {
        item.addEventListener('click', () => {
            const path = item.dataset.path;
            highlightCareerPath(path);
        });
    });
}

// ==========================================
// PAGE NAVIGATION
// ==========================================

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updatePageDisplay();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePageDisplay();
    }
}

function goToPage(pageNumber) {
    if (pageNumber >= 0 && pageNumber < totalPages) {
        currentPage = pageNumber;
        updatePageDisplay();
        closeAllModals();
    }
}

function updatePageDisplay() {
    // Update active page
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, idx) => {
        page.classList.remove('active', 'prev');
        
        if (idx === currentPage) {
            page.classList.add('active');
        } else if (idx < currentPage) {
            page.classList.add('prev');
        }
    });
    
    // Update page counter
    document.getElementById('currentPage').textContent = currentPage + 1;
    
    // Update progress
    updateProgress(currentPage);
    
    // Scroll to top of page content
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        activePage.scrollTop = 0;
    }
}

function goToChapter(chapterNumber) {
    const chapter = CHAPTERS[chapterNumber];
    if (chapter) {
        const firstPage = chapter.pages[0];
        goToPage(firstPage);
    }
}

// ==========================================
// BOOKMARK FUNCTIONALITY
// ==========================================

function bookmarkCurrentPage() {
    const pageNum = currentPage + 1;
    const pageElement = document.querySelector('.page.active');
    const pageTitle = pageElement.querySelector('.page-title');
    
    if (!bookmarks[pageNum]) {
        bookmarks[pageNum] = {
            title: pageTitle ? pageTitle.textContent : `Page ${pageNum}`,
            timestamp: new Date().toLocaleString()
        };
        
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        showNotification('Page bookmarked! 🔖');
        updateBookmarkList();
    }
}

function removeBookmark(pageNum) {
    delete bookmarks[pageNum];
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkList();
}

function updateBookmarkList() {
    const bookmarkList = document.getElementById('bookmarkList');
    
    if (Object.keys(bookmarks).length === 0) {
        bookmarkList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No bookmarks yet. Start bookmarking pages!</p>';
        return;
    }
    
    bookmarkList.innerHTML = Object.entries(bookmarks)
        .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
        .map(([pageNum, data]) => `
            <div class="bookmark-item">
                <div class="bookmark-info">
                    <div class="bookmark-page">Page ${pageNum}</div>
                    <div class="bookmark-title">${data.title}</div>
                </div>
                <button class="bookmark-remove" onclick="goToPage(${parseInt(pageNum) - 1})">Go</button>
            </div>
        `)
        .join('');
}

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================

function performSearch(query) {
    const results = document.getElementById('searchResults');
    
    if (!query || query.length < 2) {
        results.innerHTML = '';
        return;
    }
    
    const searchQuery = query.toLowerCase();
    const searchableContent = {
        1: ['Linear Algebra', 'Matrix', 'Vector', 'Eigenvalue', 'Eigenvector', 'PCA', 'Tensor'],
        2: ['Calculus', 'Derivative', 'Gradient', 'Gradient Descent', 'Jacobian', 'Hessian'],
        3: ['Discrete Mathematics', 'Graph Theory', 'DFS', 'BFS', 'Combinatorics', 'Logic'],
        4: ['Probability', 'Statistics', 'Bayesian', 'Gaussian', 'Markov Chain', 'Entropy'],
        5: ['Computational Complexity', 'Big O', 'NP Complete', 'Recursion', 'Algorithm'],
        6: ['Cryptography', 'RSA', 'Prime Numbers', 'Elliptic Curve', 'Encryption'],
        7: ['Numerical Methods', 'Newton Raphson', 'Integration', 'Interpolation', 'Floating Point']
    };
    
    const searchResults = [];
    
    for (let chapter in searchableContent) {
        searchableContent[chapter].forEach(topic => {
            if (topic.toLowerCase().includes(searchQuery)) {
                searchResults.push({
                    chapter: chapter,
                    topic: topic,
                    page: CHAPTERS[chapter].pages[0]
                });
            }
        });
    }
    
    if (searchResults.length === 0) {
        results.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No results found.</p>';
        return;
    }
    
    results.innerHTML = searchResults
        .map(result => `
            <div class="search-result-item" onclick="goToPage(${result.page - 1}); closeModal('searchModal')">
                <div class="search-result-title">Chapter ${result.chapter}: ${CHAPTERS[result.chapter].title}</div>
                <div class="search-result-preview">${result.topic}</div>
            </div>
        `)
        .join('');
}

// ==========================================
// QUIZ FUNCTIONALITY
// ==========================================

function startQuiz() {
    currentQuizQuestion = 0;
    displayQuizQuestion();
    openModal('quizModal');
}

function displayQuizQuestion() {
    if (currentQuizQuestion >= QUIZZES.length) {
        showQuizResults();
        return;
    }
    
    const quiz = QUIZZES[currentQuizQuestion];
    const quizContent = document.getElementById('quizContent');
    
    const optionsHTML = quiz.options
        .map((option, idx) => `
            <div class="quiz-option" onclick="selectQuizAnswer(${idx}, ${quiz.correct})">
                ${option}
            </div>
        `)
        .join('');
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            Question ${currentQuizQuestion + 1}/${QUIZZES.length}
            <br><small style="color: var(--text-secondary);">Chapter ${quiz.chapter}</small>
        </div>
        <div style="font-size: 1.1rem; margin-bottom: var(--spacing-lg); color: var(--text-primary);">
            ${quiz.question}
        </div>
        <div class="quiz-options">
            ${optionsHTML}
        </div>
    `;
}

function selectQuizAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((option, idx) => {
        if (idx === correct) {
            option.classList.add('correct');
        } else if (idx === selected && idx !== correct) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    setTimeout(() => {
        currentQuizQuestion++;
        displayQuizQuestion();
    }, 1500);
}

function showQuizResults() {
    const quizContent = document.getElementById('quizContent');
    const score = Math.round((currentQuizQuestion / QUIZZES.length) * 100);
    
    quizContent.innerHTML = `
        <div class="quiz-result">
            <div class="quiz-score">${score}%</div>
            <p>Quiz Completed!</p>
            <p style="color: var(--text-secondary); margin-top: var(--spacing-md);">
                You answered ${currentQuizQuestion} questions correctly.
            </p>
            <button class="cta-button" onclick="startQuiz()" style="margin-top: var(--spacing-lg);">
                Try Again
            </button>
        </div>
    `;
}

// ==========================================
// FLASHCARD FUNCTIONALITY
// ==========================================

function displayFlashcard() {
    const flashcardInner = document.querySelector('.flashcard-inner');
    const counter = document.getElementById('flashcardCounter');
    
    if (currentFlashcard >= FLASHCARDS.length) {
        currentFlashcard = 0;
    }
    
    const flashcard = FLASHCARDS[currentFlashcard];
    
    flashcardInner.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Front</div>
            <div>${flashcard.front}</div>
        </div>
    `;
    
    flashcardInner.classList.remove('flipped');
    
    // Setup back side (hidden initially)
    flashcardInner.dataset.back = flashcard.back;
    
    counter.textContent = `Card ${currentFlashcard + 1}/${FLASHCARDS.length}`;
}

function nextFlashcard() {
    currentFlashcard++;
    if (currentFlashcard >= FLASHCARDS.length) currentFlashcard = 0;
    displayFlashcard();
}

function prevFlashcard() {
    currentFlashcard--;
    if (currentFlashcard < 0) currentFlashcard = FLASHCARDS.length - 1;
    displayFlashcard();
}

// Override flashcard display to show back when flipped
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const flashcardInner = document.querySelector('.flashcard-inner');
        if (flashcardInner) {
            const originalFlashcard = flashcardInner.parentElement;
            originalFlashcard.addEventListener('click', () => {
                const inner = flashcardInner;
                if (inner.classList.contains('flipped')) {
                    const back = inner.dataset.back;
                    inner.innerHTML = `
                        <div style="text-align: center;">
                            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Back</div>
                            <div>${back}</div>
                        </div>
                    `;
                } else {
                    const front = FLASHCARDS[currentFlashcard].front;
                    inner.innerHTML = `
                        <div style="text-align: center;">
                            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Front</div>
                            <div>${front}</div>
                        </div>
                    `;
                }
            });
        }
    }, 100);
});

// ==========================================
// MODAL MANAGEMENT
// ==========================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Special handling for specific modals
        if (modalId === 'bookmarkModal') {
            updateBookmarkList();
        } else if (modalId === 'flashcardModal') {
            displayFlashcard();
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
}

// ==========================================
// TOC MODAL GENERATION
// ==========================================

function generateTOCModal() {
    const tocModalList = document.querySelector('.toc-modal-list');
    
    let html = '';
    for (let i = 1; i <= 7; i++) {
        const chapter = CHAPTERS[i];
        html += `
            <div class="toc-modal-item" onclick="goToChapter(${i}); closeModal('tocModal')">
                <div>
                    <div style="font-weight: 600; color: var(--primary);">Chapter ${i}: ${chapter.title}</div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary);">${chapter.subtitle}</div>
                    <div style="font-size: 0.75rem; color: var(--text-tertiary); margin-top: 0.25rem;">
                        Topics: ${chapter.topics.join(', ')}
                    </div>
                </div>
                <span>→</span>
            </div>
        `;
    }
    
    tocModalList.innerHTML = html;
}

// ==========================================
// PROGRESS TRACKING
// ==========================================

function updateProgress(pageNum) {
    // Determine which chapter the page belongs to
    for (let i = 1; i <= 7; i++) {
        const chapter = CHAPTERS[i];
        if (chapter.pages.includes(pageNum + 1)) {
            progress[i] = Math.min(100, (pageNum / totalPages) * 100);
            break;
        }
    }
    
    localStorage.setItem('progress', JSON.stringify(progress));
    updateProgressDisplay();
}

function loadProgress() {
    progress = JSON.parse(localStorage.getItem('progress')) || {};
}

function updateProgressDisplay() {
    let totalProgress = 0;
    
    for (let i = 1; i <= 7; i++) {
        const progressPercent = progress[i] || 0;
        totalProgress += progressPercent;
    }
    
    const averageProgress = Math.round(totalProgress / 7);
    document.getElementById('progressPercent').textContent = averageProgress + '%';
    
    // Update progress bars if visible
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, idx) => {
        const chapterProgress = progress[idx + 1] || 0;
        bar.style.setProperty('--progress', chapterProgress);
        const text = bar.closest('.progress-item').querySelector('.progress-text');
        if (text) {
            text.textContent = Math.round(chapterProgress) + '%';
        }
    });
}

// ==========================================
// PARTICLE ANIMATION
// ==========================================

function createParticles() {
    const container = document.getElementById('particleContainer');
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 3 + 2;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(0, 217, 255, 0.8), rgba(0, 217, 255, 0));
            border-radius: 50%;
            box-shadow: 0 0 ${size * 2}px rgba(0, 217, 255, 0.5);
            animation: float ${duration}s infinite ease-in-out;
        `;
        
        container.appendChild(particle);
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 1;
            }
            50% {
                transform: translateY(-100px) translateX(50px);
                opacity: 0.3;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// CAREER PATH HIGHLIGHTING
// ==========================================

function highlightCareerPath(path) {
    const careerPaths = {
        ai: [5, 6, 2, 4],
        game: [1, 2, 3, 5],
        security: [6, 3, 4, 7],
        backend: [1, 5, 3, 7],
        datascience: [2, 4, 1, 5]
    };
    
    const chapters = careerPaths[path];
    if (!chapters) return;
    
    alert(`For ${path.toUpperCase()} career, focus on chapters: ${chapters.join(', ')}`);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add slide animations
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ==========================================
// RESPONSIVE ADJUSTMENTS
// ==========================================

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024 && document.querySelector('.sidebar')) {
        document.querySelector('.sidebar').style.display = 'none';
    } else if (window.innerWidth >= 1024 && document.querySelector('.sidebar')) {
        document.querySelector('.sidebar').style.display = 'block';
    }
});

// ==========================================
// ADDITIONAL FEATURES
// ==========================================

// Add button to bookmark current page
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const navBtns = document.querySelector('.header-nav');
        if (navBtns && !document.getElementById('bookmarkCurrentBtn')) {
            const bookmarkCurrentBtn = document.createElement('button');
            bookmarkCurrentBtn.id = 'bookmarkCurrentBtn';
            bookmarkCurrentBtn.className = 'nav-btn';
            bookmarkCurrentBtn.title = 'Bookmark this page';
            bookmarkCurrentBtn.innerHTML = '<span>🔖 Bookmark</span>';
            bookmarkCurrentBtn.addEventListener('click', bookmarkCurrentPage);
            navBtns.insertBefore(bookmarkCurrentBtn, navBtns.lastChild);
        }
    }, 100);
});

// Syntax highlighting for code blocks (simple implementation)
document.addEventListener('DOMContentLoaded', () => {
    const keywords = ['function', 'if', 'for', 'while', 'return', 'const', 'let', 'var', 'class', 'import', 'export'];
    const codeBlocks = document.querySelectorAll('code');
    
    codeBlocks.forEach(block => {
        // This is a simple implementation; full syntax highlighting would require a library
        let text = block.textContent;
        
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            text = text.replace(regex, `<span style="color: var(--secondary)">${keyword}</span>`);
        });
    });
});

// Export for developer console
window.MathHandbook = {
    goToPage,
    goToChapter,
    startQuiz,
    bookmarkCurrentPage,
    updateProgress,
    currentPage: () => currentPage,
    getCurrentChapter: () => {
        for (let i = 1; i <= 7; i++) {
            if (CHAPTERS[i].pages.includes(currentPage + 1)) {
                return i;
            }
        }
        return 0;
    }
};

console.log('%cProgrammer Mathematics Handbook', 'font-size: 24px; font-weight: bold; color: #00d9ff; text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);');
console.log('%cUse MathHandbook.goToPage(n), MathHandbook.goToChapter(n), MathHandbook.startQuiz() for quick navigation', 'color: #a0a0a0;');
