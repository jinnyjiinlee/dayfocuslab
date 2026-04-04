import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'DayFocusLab - 기업의 AI Transformation을 설계합니다';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#050A34',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(8,92,240,0.3) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: 200,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(113,63,255,0.2) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 70px',
            flex: 1,
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              marginBottom: 28,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.06)',
              }}
            >
              <svg width="14" height="16" viewBox="0 0 100 120">
                <polygon points="0,30 50,0 50,60 0,90" fill="#AFE9FD" />
                <polygon points="50,0 100,30 100,90 50,60" fill="#085CF0" />
                <polygon points="0,30 50,60 50,120 0,90" fill="#AFE9FD" opacity="0.6" />
                <polygon points="50,60 100,90 100,120 50,120" fill="#085CF0" opacity="0.6" />
                <rect x="38" y="30" width="24" height="60" fill="#050A34" />
              </svg>
              <span style={{ color: '#AFE9FD', fontSize: 13, fontWeight: 600 }}>
                AI Transformation Partner
              </span>
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: 16,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>기업의 AI</span>
            <span style={{ color: '#085CF0' }}>Transformation을</span>
            <span>설계합니다</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 32,
              display: 'flex',
            }}
          >
            생산성은 높이고, 방식은 새롭게
          </div>

          {/* Service tags */}
          <div style={{ display: 'flex', gap: 8 }}>
            <div
              style={{
                background: '#085CF0',
                color: '#FFFFFF',
                padding: '8px 20px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                display: 'flex',
              }}
            >
              기업 AX 솔루션
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.7)',
                padding: '8px 20px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
              }}
            >
              AI PT
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.7)',
                padding: '8px 20px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
              }}
            >
              AX 특강
            </div>
          </div>
        </div>

        {/* Right side - Large symbol */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 350,
            opacity: 0.08,
          }}
        >
          <svg width="280" height="336" viewBox="0 0 100 120">
            <polygon points="0,30 50,0 50,60 0,90" fill="#085CF0" />
            <polygon points="50,0 100,30 100,90 50,60" fill="#713FFF" />
            <polygon points="0,30 50,60 50,120 0,90" fill="#085CF0" opacity="0.6" />
            <polygon points="50,60 100,90 100,120 50,120" fill="#713FFF" opacity="0.6" />
          </svg>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #085CF0, #713FFF, #AFE9FD)',
            display: 'flex',
          }}
        />

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            color: 'rgba(175,233,253,0.4)',
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          dayfocuslab.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
