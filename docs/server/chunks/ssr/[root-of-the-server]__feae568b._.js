module.exports = {

"[project]/.next-internal/server/app/project/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

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
"[project]/src/app/project/data/projects-content.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/app/project/data/projects-content.ts
__turbopack_context__.s({
    "getAllCategories": ()=>getAllCategories,
    "getAllProjectIds": ()=>getAllProjectIds,
    "getAllProjects": ()=>getAllProjects,
    "getFeaturedProjects": ()=>getFeaturedProjects,
    "getProject": ()=>getProject,
    "getProjectContent": ()=>getProjectContent,
    "getProjectWithContent": ()=>getProjectWithContent,
    "getProjectsByCategory": ()=>getProjectsByCategory,
    "projects": ()=>projects
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
;
;
;
const projects = [
    {
        id: '1',
        title: 'E-commerce Platform Redesign',
        description: '사용자 경험을 개선한 이커머스 플랫폼 리디자인 프로젝트',
        excerpt: '복잡한 이커머스 플랫폼을 사용자 중심으로 재설계하여 전환율을 35% 향상시킨 프로젝트입니다.',
        category: 'UX/UI Design',
        year: '2024',
        duration: '3개월',
        team: [
            'UX Designer',
            'Frontend Developer',
            'Product Manager'
        ],
        tags: [
            'Figma',
            'React',
            'TypeScript',
            'User Research',
            'Prototyping'
        ],
        images: [
            '/images/project-1-hero.jpg',
            '/images/project-1-process.jpg'
        ],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project',
        featured: true
    },
    {
        id: '2',
        title: 'Mobile Banking App',
        description: '직관적이고 안전한 모바일 뱅킹 애플리케이션 디자인',
        excerpt: '복잡한 금융 서비스를 간단하고 안전하게 만든 차세대 모바일 뱅킹 앱입니다.',
        category: 'Mobile Design',
        year: '2024',
        duration: '4개월',
        team: [
            'Mobile Designer',
            'iOS Developer',
            'Android Developer',
            'Security Expert'
        ],
        tags: [
            'Mobile',
            'Fintech',
            'UX',
            'Security',
            'React Native'
        ],
        images: [
            '/images/project-2-hero.jpg',
            '/images/project-2-screens.jpg'
        ],
        liveUrl: 'https://app.example.com',
        githubUrl: '',
        featured: true
    },
    {
        id: '3',
        title: 'Brand Identity System',
        description: '스타트업을 위한 일관성 있는 브랜드 아이덴티티 시스템 구축',
        excerpt: '브랜드의 핵심 가치를 시각적으로 표현한 포괄적인 아이덴티티 시스템입니다.',
        category: 'Branding',
        year: '2023',
        duration: '2개월',
        team: [
            'Brand Designer',
            'Graphic Designer',
            'Marketing Manager'
        ],
        tags: [
            'Branding',
            'Visual Identity',
            'Guidelines',
            'Logo Design'
        ],
        images: [
            '/images/project-3-hero.jpg'
        ],
        featured: false
    },
    {
        id: '4',
        title: 'Design System Library',
        description: '확장 가능한 디자인 시스템과 컴포넌트 라이브러리 개발',
        excerpt: '개발 효율성과 디자인 일관성을 위한 포괄적인 디자인 시스템입니다.',
        category: 'Design System',
        year: '2023',
        duration: '5개월',
        team: [
            'Design System Lead',
            'Frontend Developer',
            'UX Designer'
        ],
        tags: [
            'Design System',
            'Storybook',
            'Components',
            'Documentation'
        ],
        images: [
            '/images/project-4-hero.jpg'
        ],
        featured: false
    },
    {
        id: '5',
        title: 'Healthcare Dashboard',
        description: '의료진을 위한 직관적인 환자 관리 대시보드 설계',
        excerpt: '복잡한 의료 데이터를 한눈에 파악할 수 있는 직관적인 대시보드입니다.',
        category: 'Dashboard Design',
        year: '2023',
        duration: '3개월',
        team: [
            'UX Designer',
            'Data Analyst',
            'Healthcare Expert'
        ],
        tags: [
            'Healthcare',
            'Dashboard',
            'Data Visualization',
            'UX Research'
        ],
        images: [
            '/images/project-5-hero.jpg'
        ],
        featured: false
    },
    {
        id: '6',
        title: 'Educational Platform',
        description: '온라인 학습을 위한 인터랙티브 교육 플랫폼 개발',
        excerpt: '학습자 중심의 맞춤형 교육 경험을 제공하는 온라인 플랫폼입니다.',
        category: 'EdTech',
        year: '2022',
        duration: '6개월',
        team: [
            'Product Designer',
            'Full-stack Developer',
            'Education Specialist'
        ],
        tags: [
            'Education',
            'Interactive',
            'Learning',
            'Gamification'
        ],
        images: [
            '/images/project-6-hero.jpg'
        ],
        featured: false
    }
];
function getProject(id) {
    return projects.find((project)=>project.id === id);
}
function getAllProjects() {
    return projects;
}
function getFeaturedProjects() {
    return projects.filter((project)=>project.featured);
}
function getProjectsByCategory(category) {
    if (category === 'All') return projects;
    return projects.filter((project)=>project.category === category);
}
function getAllCategories() {
    const categories = [
        'All',
        ...new Set(projects.map((project)=>project.category))
    ];
    return categories;
}
function getAllProjectIds() {
    return projects.map((project)=>({
            id: project.id
        }));
}
function getProjectContent(id) {
    try {
        const contentDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/app/project/data/content');
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(contentDir, `project-${id}.md`);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) {
            return '프로젝트 내용을 찾을 수 없습니다.';
        }
        const fileContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf8');
        const { content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(fileContent);
        return content;
    } catch (error) {
        console.error(`Error reading project ${id}:`, error);
        return '프로젝트 내용을 불러올 수 없습니다.';
    }
}
function getProjectWithContent(id) {
    try {
        const project = getProject(id);
        if (!project) return null;
        const content = getProjectContent(id);
        return {
            ...project,
            content
        };
    } catch (error) {
        console.error(`Error getting project with content ${id}:`, error);
        return null;
    }
}
}),
"[project]/src/app/project/[id]/ProjectDetailClient.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/project/[id]/ProjectDetailClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/project/[id]/ProjectDetailClient.tsx <module evaluation>", "default");
}),
"[project]/src/app/project/[id]/ProjectDetailClient.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/project/[id]/ProjectDetailClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/project/[id]/ProjectDetailClient.tsx", "default");
}),
"[project]/src/app/project/[id]/ProjectDetailClient.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f5b$id$5d2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/project/[id]/ProjectDetailClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f5b$id$5d2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/project/[id]/ProjectDetailClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f5b$id$5d2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/project/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/app/project/[id]/page.tsx (서버 컴포넌트)
__turbopack_context__.s({
    "default": ()=>ProjectDetailPage,
    "generateStaticParams": ()=>generateStaticParams
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$data$2f$projects$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/data/projects-content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f5b$id$5d2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/[id]/ProjectDetailClient.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$data$2f$projects$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProjectIds"])();
}
async function ProjectDetailPage({ params }) {
    const { id } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$data$2f$projects$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProject"])(id);
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$data$2f$projects$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectContent"])(id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f5b$id$5d2f$ProjectDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        project: project,
        content: content
    }, void 0, false, {
        fileName: "[project]/src/app/project/[id]/page.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/project/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/project/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__feae568b._.js.map