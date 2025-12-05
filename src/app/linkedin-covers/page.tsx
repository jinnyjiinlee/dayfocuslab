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

    // Decorative circles
    ctx.globalAlpha = 0.05;
    ctx.strokeStyle = style.textColor;
    ctx.lineWidth = 1;

    // Circle 1
    ctx.beginPath();
    ctx.arc(200, COVER_HEIGHT / 2, 150, 0, Math.PI * 2);
    ctx.stroke();

    // Circle 2
    ctx.beginPath();
    ctx.arc(COVER_WIDTH - 300, COVER_HEIGHT / 2, 200, 0, Math.PI * 2);
    ctx.stroke();

    // Circle 3
    ctx.beginPath();
    ctx.arc(COVER_WIDTH / 2, COVER_HEIGHT / 2, 250, 0, Math.PI * 2);
    ctx.stroke();

    ctx.globalAlpha = 1;

    // Logo text - "Day Focus Lab"
    ctx.font = 'bold 72px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = style.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Main title
    const mainY = COVER_HEIGHT / 2 - 30;
    ctx.fillText('Day Focus', COVER_WIDTH / 2, mainY);

    // "Lab" in lighter weight
    ctx.font = '300 72px system-ui, -apple-system, sans-serif';
    const dayFocusWidth = ctx.measureText('Day Focus ').width;
    ctx.font = 'bold 72px system-ui, -apple-system, sans-serif';
    const totalWidth = ctx.measureText('Day Focus Lab').width;

    // Redraw with proper spacing
    ctx.clearRect(0, 0, COVER_WIDTH, COVER_HEIGHT);

    // Redraw background
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

    // Redraw circles
    ctx.globalAlpha = 0.05;
    ctx.strokeStyle = style.textColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(200, COVER_HEIGHT / 2, 150, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(COVER_WIDTH - 300, COVER_HEIGHT / 2, 200, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(COVER_WIDTH / 2, COVER_HEIGHT / 2, 250, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Draw "Day Focus" bold
    ctx.fillStyle = style.textColor;
    ctx.font = 'bold 72px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const text1 = 'Day Focus';
    const text2 = 'Lab';
    ctx.font = 'bold 72px system-ui, -apple-system, sans-serif';
    const w1 = ctx.measureText(text1 + ' ').width;
    ctx.font = '300 72px system-ui, -apple-system, sans-serif';
    const w2 = ctx.measureText(text2).width;
    const totalW = w1 + w2;
    const startX = (COVER_WIDTH - totalW) / 2;

    ctx.font = 'bold 72px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(text1 + ' ', startX, mainY);

    ctx.font = '300 72px system-ui, -apple-system, sans-serif';
    ctx.fillText(text2, startX + w1, mainY);

    // Tagline
    ctx.font = '24px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = style.accentColor;
    ctx.textAlign = 'center';
    ctx.fillText('당신의 하루에 집중하다', COVER_WIDTH / 2, mainY + 60);

    // Small decorative line
    ctx.strokeStyle = style.accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(COVER_WIDTH / 2 - 50, mainY + 90);
    ctx.lineTo(COVER_WIDTH / 2 + 50, mainY + 90);
    ctx.stroke();
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
