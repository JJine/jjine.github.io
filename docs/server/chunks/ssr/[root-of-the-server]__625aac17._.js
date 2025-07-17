module.exports = {

"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "minpath": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "minproc": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "urlToPath": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/src/app/article/[id]/ArticleDetailClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ArticleDetailClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-html/lib/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const processMarkdown = async (content1)=>{
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remark"])().use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).process(content1);
    return result.toString();
};
// 사용법
const [processedContent, setProcessedContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
useEffect(()=>{
    processMarkdown(content).then(setProcessedContent);
}, [
    content
]);
return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
    dangerouslySetInnerHTML: {
        __html: processedContent
    }
}, void 0, false, {
    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
    lineNumber: 31,
    columnNumber: 8
}, ("TURBOPACK compile-time value", void 0));
function ArticleDetailClient({ article, content: content1 }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    const handleShare = async ()=>{
        setIsSharing(true);
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('링크가 클립보드에 복사되었습니다!');
        }
        setIsSharing(false);
    };
    // 마크다운 스타일 콘텐츠를 JSX로 변환하는 함수
    const formatContent = (content1)=>{
        const lines = content1.split('\n');
        const elements = [];
        let currentIndex = 0;
        for(let i = 0; i < lines.length; i++){
            const line = lines[i];
            if (line.startsWith('# ')) {
                elements.push(/*#__PURE__*/ _jsxDEV("h1", {
                    className: "text-3xl font-bold mt-8 mb-4 first:mt-0 text-gray-900 dark:text-white",
                    children: line.slice(2)
                }, `h1-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this));
            } else if (line.startsWith('## ')) {
                elements.push(/*#__PURE__*/ _jsxDEV("h2", {
                    className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white",
                    children: line.slice(3)
                }, `h2-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this));
            } else if (line.startsWith('### ')) {
                elements.push(/*#__PURE__*/ _jsxDEV("h3", {
                    className: "text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white",
                    children: line.slice(4)
                }, `h3-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this));
            } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
                elements.push(/*#__PURE__*/ _jsxDEV("h4", {
                    className: "text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-white",
                    children: line.slice(2, -2)
                }, `h4-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this));
            } else if (line.startsWith('- ')) {
                elements.push(/*#__PURE__*/ _jsxDEV("li", {
                    className: "ml-4 mb-1 list-disc text-gray-700 dark:text-gray-300",
                    children: line.slice(2)
                }, `li-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this));
            } else if (line.startsWith('> ')) {
                elements.push(/*#__PURE__*/ _jsxDEV("blockquote", {
                    className: "border-l-4 border-blue-500 pl-4 py-2 my-4 bg-gray-50 dark:bg-gray-800 rounded-r-lg italic text-gray-700 dark:text-gray-300",
                    children: line.slice(2)
                }, `blockquote-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this));
            } else if (line.startsWith('*') && line.endsWith('*') && line.length > 2) {
                elements.push(/*#__PURE__*/ _jsxDEV("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 italic text-center my-6",
                    children: line.slice(1, -1)
                }, `italic-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this));
            } else if (line.startsWith('---')) {
                elements.push(/*#__PURE__*/ _jsxDEV("hr", {
                    className: "border-gray-200 dark:border-gray-700 my-8"
                }, `hr-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this));
            } else if (line.trim() === '') {
                elements.push(/*#__PURE__*/ _jsxDEV("br", {}, `br-${currentIndex++}`, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 125,
                    columnNumber: 23
                }, this));
            } else if (line.trim() !== '') {
                // 코드 블록 처리
                if (line.startsWith('```')) {
                    elements.push(/*#__PURE__*/ _jsxDEV("div", {
                        className: "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200",
                        children: line.slice(3)
                    }, `code-${currentIndex++}`, false, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this));
                } else if (line.startsWith('**') && line.includes(':**')) {
                    const parts = line.split(':**');
                    elements.push(/*#__PURE__*/ _jsxDEV("p", {
                        className: "mb-4 leading-relaxed text-gray-700 dark:text-gray-300",
                        children: [
                            /*#__PURE__*/ _jsxDEV("strong", {
                                className: "text-gray-900 dark:text-white",
                                children: [
                                    parts[0].slice(2),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            parts[1]
                        ]
                    }, `bold-${currentIndex++}`, true, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this));
                } else {
                    elements.push(/*#__PURE__*/ _jsxDEV("p", {
                        className: "mb-4 leading-relaxed text-gray-700 dark:text-gray-300",
                        children: line
                    }, `p-${currentIndex++}`, false, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this));
                }
            }
        }
        return elements;
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "container mx-auto max-w-4xl px-4 py-12",
        children: [
            /*#__PURE__*/ _jsxDEV(motion.div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 0.3
                },
                className: "mb-8",
                children: /*#__PURE__*/ _jsxDEV(Link, {
                    href: "/article",
                    className: "inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",
                    children: [
                        /*#__PURE__*/ _jsxDEV(ArrowLeft, {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        "아티클 목록으로 돌아가기"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.header, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                className: "mb-12",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "mb-4 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide",
                                children: article.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            article.featured && /*#__PURE__*/ _jsxDEV("span", {
                                className: "px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full",
                                children: "Featured"
                            }, void 0, false, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("h1", {
                        className: "text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white",
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8",
                        children: article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Calendar, {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    formatDate(article.date)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Clock, {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    article.readTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Tag, {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    article.author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: ()=>setIsLiked(!isLiked),
                                className: `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${isLiked ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`,
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Heart, {
                                        className: `h-4 w-4 ${isLiked ? 'fill-current' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-sm",
                                        children: "좋아요"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: ()=>setIsBookmarked(!isBookmarked),
                                className: `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${isBookmarked ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`,
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Bookmark, {
                                        className: `h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-sm",
                                        children: "북마크"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: handleShare,
                                disabled: isSharing,
                                className: "flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Share2, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-sm",
                                        children: isSharing ? '공유 중...' : '공유'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.2
                },
                className: "mb-12",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center",
                        children: /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: "Article Hero Image"
                        }, void 0, false, {
                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.3
                },
                className: "mb-12",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex flex-wrap gap-2",
                    children: article.tags.map((tag)=>/*#__PURE__*/ _jsxDEV("span", {
                            className: "px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full",
                            children: [
                                "#",
                                tag
                            ]
                        }, tag, true, {
                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.article, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.4
                },
                className: "prose prose-lg max-w-none",
                children: formatContent(content1)
            }, void 0, false, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.section, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.5
                },
                className: "mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex items-start space-x-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0",
                            children: /*#__PURE__*/ _jsxDEV("span", {
                                className: "text-sm text-gray-500 dark:text-gray-400",
                                children: "Photo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "font-semibold mb-2 text-gray-900 dark:text-white",
                                    children: [
                                        "작성자: ",
                                        article.author
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm text-gray-600 dark:text-gray-300 leading-relaxed",
                                    children: "UX/UI 디자이너이자 프론트엔드 개발자입니다. 사용자 중심의 디자인과 기술을 통해 의미 있는 경험을 만들어가는 것을 좋아합니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ _jsxDEV(Link, {
                                        href: "/about",
                                        className: "text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline underline-offset-4",
                                        children: "더 알아보기 →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.section, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.6
                },
                className: "mt-16",
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        className: "text-xl font-semibold mb-6 text-gray-900 dark:text-white",
                        children: "관련 글"
                    }, void 0, false, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h4", {
                                        className: "font-medium mb-2 text-gray-900 dark:text-white",
                                        children: "다른 흥미로운 글들"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: "더 많은 아티클을 준비 중입니다."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h4", {
                                        className: "font-medium mb-2 text-gray-900 dark:text-white",
                                        children: "추천 글"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: "비슷한 주제의 글들을 곧 추가할 예정입니다."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.nav, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.7
                },
                className: "mt-16 pt-8 border-t border-gray-200 dark:border-gray-700",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex flex-col sm:flex-row justify-between gap-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV(Link, {
                            href: "/article",
                            className: "inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",
                            children: [
                                /*#__PURE__*/ _jsxDEV(ArrowLeft, {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                "모든 아티클 보기"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex space-x-4",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Link, {
                                    href: "/about",
                                    className: "inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",
                                    children: "작성자 소개"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Link, {
                                    href: "/info",
                                    className: "inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",
                                    children: [
                                        "연락하기",
                                        /*#__PURE__*/ _jsxDEV(ArrowLeft, {
                                            className: "ml-2 h-4 w-4 rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.section, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.8
                },
                className: "mt-16 pt-8 border-t border-gray-200 dark:border-gray-700",
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        className: "text-xl font-semibold mb-6 text-gray-900 dark:text-white",
                        children: "댓글"
                    }, void 0, false, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center",
                        children: /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-gray-600 dark:text-gray-400",
                            children: [
                                "댓글 시스템을 준비 중입니다.",
                                /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                "의견이나 질문이 있으시면 ",
                                /*#__PURE__*/ _jsxDEV(Link, {
                                    href: "/info",
                                    className: "underline underline-offset-4 text-gray-900 dark:text-white",
                                    children: "연락처"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                                    lineNumber: 392,
                                    columnNumber: 27
                                }, this),
                                "를 통해 문의해주세요."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/article/[id]/ArticleDetailClient.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__625aac17._.js.map