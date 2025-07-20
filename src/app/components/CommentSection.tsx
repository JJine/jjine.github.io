'use client'

import { useState, useRef, useEffect } from 'react'
import { Heart, MessageCircle, Send, MoreHorizontal, Reply, Flag } from 'lucide-react'

interface Comment {
  id: string
  author: string
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
  replies?: Comment[]
  avatar?: string
}

interface CommentSectionProps {
  projectId: string
  initialComments?: Comment[]
}

export default function CommentSection({ projectId, initialComments = [] }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const replyTextareaRef = useRef<HTMLTextAreaElement>(null)

  // 샘플 댓글 데이터
  useEffect(() => {
    if (initialComments.length === 0) {
      setComments([
        {
          id: '1',
          author: '김디자이너',
          content: '정말 인상적인 프로젝트네요! 특히 사용자 경험 부분에서 많은 고민이 담겨있다는 것이 느껴집니다. 혹시 디자인 시스템 구축 과정에서 가장 어려웠던 부분이 무엇인지 궁금합니다.',
          timestamp: '2시간 전',
          likes: 12,
          isLiked: false,
          avatar: '🎨',
          replies: [
            {
              id: '1-1',
              author: '진',
              content: '감사합니다! 가장 어려웠던 부분은 다양한 디바이스에서의 일관성을 유지하는 것이었어요. 특히 모바일과 데스크탑 간의 인터랙션 패턴을 조화롭게 만드는 과정이 도전적이었습니다.',
              timestamp: '1시간 전',
              likes: 8,
              isLiked: true,
              avatar: '👨‍💻'
            }
          ]
        },
        {
          id: '2',
          author: '개발자박',
          content: '기술 스택 선택이 흥미롭네요. React Native와 네이티브 기능 연동 부분에서 성능 이슈는 없었나요?',
          timestamp: '3시간 전',
          likes: 7,
          isLiked: false,
          avatar: '⚡'
        },
        {
          id: '3',
          author: 'PM이수진',
          content: '프로젝트 관리 관점에서 정말 잘 정리되어 있어요. 일정 관리나 이해관계자 소통에서 특별히 신경 쓴 부분이 있다면 공유해주실 수 있나요?',
          timestamp: '5시간 전',
          likes: 15,
          isLiked: true,
          avatar: '📋'
        }
      ])
    }
  }, [initialComments])

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: '방문자',
      content: newComment,
      timestamp: '방금 전',
      likes: 0,
      isLiked: false,
      avatar: '👤'
    }

    setComments([comment, ...comments])
    setNewComment('')
    
    // 텍스트영역 높이 초기화
    if (textareaRef.current) {
      textareaRef.current.style.height = '60px'
    }
  }

  const handleSubmitReply = (parentId: string) => {
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: `${parentId}-${Date.now()}`,
      author: '방문자',
      content: replyContent,
      timestamp: '방금 전',
      likes: 0,
      isLiked: false,
      avatar: '👤'
    }

    setComments(comments.map(comment => 
      comment.id === parentId 
        ? { ...comment, replies: [...(comment.replies || []), reply] }
        : comment
    ))
    
    setReplyContent('')
    setReplyingTo(null)
  }

  const handleLike = (commentId: string, isReply: boolean = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => 
        comment.id === parentId 
          ? {
              ...comment,
              replies: comment.replies?.map(reply => 
                reply.id === commentId
                  ? {
                      ...reply,
                      likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                      isLiked: !reply.isLiked
                    }
                  : reply
              )
            }
          : comment
      ))
    } else {
      setComments(comments.map(comment => 
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              isLiked: !comment.isLiked
            }
          : comment
      ))
    }
  }

  const autoResize = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = '60px'
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="space-y-8">
        {/* 댓글 헤더 */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
            댓글 <span className="text-lg text-gray-500 dark:text-gray-400">({comments.length})</span>
          </h3>
        </div>

        {/* 댓글 작성 */}
        <div className="bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="space-y-4">
            <textarea
              ref={textareaRef}
              value={newComment}
              onChange={(e) => {
                setNewComment(e.target.value)
                autoResize(e.target)
              }}
              placeholder="이 프로젝트에 대한 의견을 남겨주세요..."
              className="w-full p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl resize-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              style={{ minHeight: '60px', maxHeight: '120px' }}
            />
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                건설적인 피드백을 남겨주세요
              </p>
              <button
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>댓글 달기</span>
              </button>
            </div>
          </div>
        </div>

        {/* 댓글 목록 */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="space-y-4">
              {/* 메인 댓글 */}
              <div className="bg-white dark:bg-black border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6">
                <div className="space-y-4">
                  {/* 댓글 헤더 */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-lg">
                        {comment.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          {comment.author}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {comment.timestamp}
                        </p>
                      </div>
                    </div>
                    
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <MoreHorizontal className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>

                  {/* 댓글 내용 */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {comment.content}
                  </p>

                  {/* 댓글 액션 */}
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center space-x-2 text-sm transition-colors ${
                        comment.isLiked 
                          ? 'text-red-500' 
                          : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                      <span>{comment.likes}</span>
                    </button>
                    
                    <button
                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                      className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      <Reply className="h-4 w-4" />
                      <span>답글</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 답글 작성 */}
              {replyingTo === comment.id && (
                <div className="ml-8 bg-gray-50/50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="space-y-3">
                    <textarea
                      ref={replyTextareaRef}
                      value={replyContent}
                      onChange={(e) => {
                        setReplyContent(e.target.value)
                        autoResize(e.target)
                      }}
                      placeholder={`${comment.author}님에게 답글을 남겨보세요...`}
                      className="w-full p-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                      style={{ minHeight: '50px', maxHeight: '100px' }}
                    />
                    
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => {
                          setReplyingTo(null)
                          setReplyContent('')
                        }}
                        className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      >
                        취소
                      </button>
                      <button
                        onClick={() => handleSubmitReply(comment.id)}
                        disabled={!replyContent.trim()}
                        className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                      >
                        답글 달기
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 답글 목록 */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-8 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200/30 dark:border-gray-700/30 rounded-xl p-4">
                      <div className="space-y-3">
                        {/* 답글 헤더 */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm">
                              {reply.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                                {reply.author}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {reply.timestamp}
                              </p>
                            </div>
                          </div>
                          
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                            <MoreHorizontal className="h-3 w-3 text-gray-400" />
                          </button>
                        </div>

                        {/* 답글 내용 */}
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {reply.content}
                        </p>

                        {/* 답글 액션 */}
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handleLike(reply.id, true, comment.id)}
                            className={`flex items-center space-x-1 text-xs transition-colors ${
                              reply.isLiked 
                                ? 'text-red-500' 
                                : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
                            }`}
                          >
                            <Heart className={`h-3 w-3 ${reply.isLiked ? 'fill-current' : ''}`} />
                            <span>{reply.likes}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 더 보기 */}
        {comments.length > 0 && (
          <div className="text-center pt-8">
            <button className="px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              댓글 더 보기
            </button>
          </div>
        )}
      </div>
    </div>
  )
}