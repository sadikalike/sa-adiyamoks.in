'use client'
import { useState } from 'react'

export default function LazyYouTube({
  id,
  title,
}: {
  id: string
  title: string
}) {
  const [play, setPlay] = useState(false)

  return (
    <div className="relative w-full aspect-video bg-black">
      {play ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="absolute inset-0 w-full h-full group flex items-center justify-center"
          aria-label={title}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="relative z-10 w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-600 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}