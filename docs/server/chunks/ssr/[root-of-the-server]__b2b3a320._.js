module.exports = {

"[project]/.next-internal/server/app/article/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[project]/src/app/article/data/articles-content.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/app/article/data/articles-content.ts
__turbopack_context__.s({
    "articles": ()=>articles,
    "getAllArticles": ()=>getAllArticles,
    "getAllCategories": ()=>getAllCategories,
    "getArticle": ()=>getArticle,
    "getArticleContent": ()=>getArticleContent,
    "getArticleWithContent": ()=>getArticleWithContent,
    "getArticlesByCategory": ()=>getArticlesByCategory,
    "getFeaturedArticles": ()=>getFeaturedArticles,
    "getRecentArticles": ()=>getRecentArticles
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
;
;
;
const articles = [
    {
        id: '1',
        title: 'AI와 함께하는 UX 디자인의 미래',
        excerpt: 'AI 도구들이 UX 디자인 프로세스를 어떻게 변화시키고 있는지, 그리고 디자이너가 준비해야 할 것들에 대해 이야기합니다.',
        category: 'AI & Design',
        date: '2024-07-15',
        readTime: '8분',
        tags: [
            'AI',
            'UX Design',
            'Future',
            'Technology'
        ],
        author: 'Jjine',
        featured: true
    },
    {
        id: '2',
        title: '디자인 시스템을 구축하며 배운 것들',
        excerpt: '스타트업에서 디자인 시스템을 처음부터 구축하면서 겪었던 시행착오와 교훈들을 공유합니다.',
        category: 'Design System',
        date: '2024-07-10',
        readTime: '5분',
        tags: [
            'Design System',
            'Figma',
            'Component',
            'Startup'
        ],
        author: 'Jjine',
        featured: true
    },
    {
        id: '3',
        title: '사용자 리서치가 제품을 구했던 순간',
        excerpt: '정량적 데이터만으로는 알 수 없었던 사용자의 진짜 문제를 발견하고, 제품 방향을 완전히 바꾼 경험을 공유합니다.',
        category: 'User Research',
        date: '2024-07-05',
        readTime: '6분',
        tags: [
            'User Research',
            'Product Strategy',
            'Data Analysis'
        ],
        author: 'Jjine',
        featured: false
    },
    {
        id: '4',
        title: '모바일 퍼스트 디자인 실전 가이드',
        excerpt: '모바일 환경을 우선으로 고려한 디자인 접근법과 실제 프로젝트에서 적용한 방법론을 소개합니다.',
        category: 'Mobile Design',
        date: '2024-06-28',
        readTime: '7분',
        tags: [
            'Mobile Design',
            'Responsive',
            'UX Strategy'
        ],
        author: 'Jjine',
        featured: false
    },
    {
        id: '5',
        title: '디자이너를 위한 코드 기초 지식',
        excerpt: '개발자와 더 나은 협업을 위해 디자이너가 알아두면 좋은 기본적인 코드 지식들을 정리했습니다.',
        category: 'Design & Development',
        date: '2024-06-20',
        readTime: '4분',
        tags: [
            'HTML',
            'CSS',
            'Collaboration',
            'Frontend'
        ],
        author: 'Jjine',
        featured: false
    },
    {
        id: '6',
        title: '원격 근무 환경에서의 디자인 협업',
        excerpt: '팬데믹 이후 변화한 원격 근무 환경에서 효과적인 디자인 협업 방법과 도구들을 소개합니다.',
        category: 'Remote Work',
        date: '2024-06-15',
        readTime: '5분',
        tags: [
            'Remote Work',
            'Collaboration',
            'Design Tools',
            'Productivity'
        ],
        author: 'Jjine',
        featured: false
    }
];
function getArticle(id) {
    return articles.find((article)=>article.id === id);
}
function getAllArticles() {
    return articles.sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
}
function getFeaturedArticles() {
    return articles.filter((article)=>article.featured);
}
function getArticlesByCategory(category) {
    if (category === 'All') return getAllArticles();
    return articles.filter((article)=>article.category === category);
}
function getAllCategories() {
    const categories = [
        'All',
        ...new Set(articles.map((article)=>article.category))
    ];
    return categories;
}
function getRecentArticles(limit = 3) {
    return getAllArticles().slice(0, limit);
}
function getArticleContent(id) {
    try {
        const contentDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/app/article/data/content');
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(contentDir, `article-${id}.md`);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) {
            return '아티클 내용을 찾을 수 없습니다.';
        }
        const fileContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf8');
        const { content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(fileContent);
        return content;
    } catch (error) {
        console.error(`Error reading article ${id}:`, error);
        return '아티클 내용을 불러올 수 없습니다.';
    }
}
function getArticleWithContent(id) {
    try {
        const article = getArticle(id);
        if (!article) return null;
        const content = getArticleContent(id);
        return {
            ...article,
            content
        };
    } catch (error) {
        console.error(`Error getting article with content ${id}:`, error);
        return null;
    }
}
}),
"[project]/src/app/article/[id]/ArticleDetailClient [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/article/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/app/article/[id]/page.tsx (서버 컴포넌트)
__turbopack_context__.s({
    "default": ()=>ArticleDetailPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$article$2f$data$2f$articles$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/article/data/articles-content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$article$2f5b$id$5d2f$ArticleDetailClient__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/article/[id]/ArticleDetailClient [app-rsc] (ecmascript)");
;
;
;
;
async function ArticleDetailPage({ params }) {
    const { id } = await params;
    const article = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$article$2f$data$2f$articles$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticle"])(id);
    if (!article) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$article$2f$data$2f$articles$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticleContent"])(id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$article$2f5b$id$5d2f$ArticleDetailClient__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        article: article,
        content: content
    }, void 0, false, {
        fileName: "[project]/src/app/article/[id]/page.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/article/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/article/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b2b3a320._.js.map