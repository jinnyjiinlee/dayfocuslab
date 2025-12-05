'use client';

import { useRef, useEffect, useState } from 'react';

const COVER_WIDTH = 1584;
const COVER_HEIGHT = 396;

type CoverStyle = {
  id: number;
  name: string;
  bgStyle: 'gradient1' | 'gradient2' | 'solid' | 'gradient3' | 'gradient4';
  textColor: string;
  accentColor: string;
};

const coverStyles: CoverStyle[] = [
  { id: 1, name: 'Classic Black', bgStyle: 'solid', textColor: '#ffffff', accentColor: '#888888' },
  { id: 2, name: 'Gradient Dark', bgStyle: 'gradient1', textColor: '#ffffff', accentColor: '#cccccc' },
  { id: 3, name: 'Gradient Light', bgStyle: 'gradient2', textColor: '#000000', accentColor: '#555555' },
  { id: 4, name: 'Minimal White', bgStyle: 'gradient3', textColor: '#000000', accentColor: '#666666' },
  { id: 5, name: 'Deep Focus', bgStyle: 'gradient4', textColor: '#ffffff', accentColor: '#aaaaaa' },
];

export default function LinkedInCovers() {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const [downloaded, setDownloaded] = useState<number | null>(null);

  const drawCover = (canvas: HTMLCanvasElement, style: CoverStyle) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    if (style.bgStyle === 'solid') {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, COVER_WIDTH, COVER_HEIGHT);
    } else if (style.bgStyle === 'gradient1') {
      const gradient = ctx.createLinearGradient(0, 0, COVER_WIDTH, COVER_HEIGHT);
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, COVER_WIDTH, COVER_HEIGHT);
    } else if (style.bgStyle === 'gradient2') {
      const gradient = ctx.createLinearGradient(0, 0, COVER_WIDTH, 0);
      gradient.addColorStop(0, '#f5f5f5');
      gradient.addColorStop(1, '#ffffff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, COVER_WIDTH, COVER_HEIGHT);
    } else if (style.bgStyle === 'gradient3') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, COVER_WIDTH, COVER_HEIGHT);
      // Add subtle border
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, COVER_WIDTH - 2, COVER_HEIGHT - 2);
    } else if (style.bgStyle === 'gradient4') {
      const gradient = ctx.createLinearGradient(0, 0, COVER_WIDTH, COVER_HEIGHT);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.5, '#1a1a1a');
      gradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, COVER_WIDTH, COVER_HEIGHT);
    }

    // Brand name - bottom right, simple
    ctx.fillStyle = style.textColor;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';

    // "Day Focus" bold + "Lab" light
    const text1 = 'Day Focus ';
    const text2 = 'Lab';

    ctx.font = 'bold 36px system-ui, -apple-system, sans-serif';
    const w1 = ctx.measureText(text1).width;
    ctx.font = '300 36px system-ui, -apple-system, sans-serif';
    const w2 = ctx.measureText(text2).width;

    const rightPadding = 60;
    const bottomPadding = 50;
    const startX = COVER_WIDTH - rightPadding - w2;

    ctx.font = 'bold 36px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(text1, startX, COVER_HEIGHT - bottomPadding);

    ctx.font = '300 36px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(text2, startX, COVER_HEIGHT - bottomPadding);
  };

  useEffect(() => {
    coverStyles.forEach((style, index) => {
      const canvas = canvasRefs.current[index];
      if (canvas) {
        drawCover(canvas, style);
      }
    });
  }, []);

  const downloadImage = (index: number) => {
    const canvas = canvasRefs.current[index];
    if (canvas) {
      const link = document.createElement('a');
      link.download = `dayfocuslab-linkedin-cover-${index + 1}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setDownloaded(index);
      setTimeout(() => setDownloaded(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">LinkedIn Cover Images</h1>
          <p className="text-gray-600">Day Focus Lab 링크드인 커버 이미지 (1584 x 396px)</p>
          <p className="text-sm text-gray-500 mt-2">클릭하여 다운로드하세요</p>
        </div>

        <div className="space-y-8">
          {coverStyles.map((style, index) => (
            <div key={style.id} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  #{style.id} - {style.name}
                </h2>
                <button
                  onClick={() => downloadImage(index)}
                  className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  {downloaded === index ? '다운로드 완료!' : '다운로드'}
                </button>
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <canvas
                  ref={(el) => { canvasRefs.current[index] = el; }}
                  width={COVER_WIDTH}
                  height={COVER_HEIGHT}
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => downloadImage(index)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
