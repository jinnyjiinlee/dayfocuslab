import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Day Focus Lab - 당신의 하루에 집중하다';
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #F0F4FF 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 상단 블루 라인 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg, #050A34 0%, #085CF0 100%)',
            display: 'flex',
          }}
        />

        {/* 메인 콘텐츠 - 중앙 600px 영역에 집중 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 600,
            padding: '0 40px',
          }}
        >
          {/* 로고 아이콘 */}
          <div
            style={{
              display: 'flex',
              marginBottom: 24,
            }}
          >
            <svg width="64" height="64" viewBox="0 0 100 120">
              <polygon points="0,30 50,0 50,60 0,90" fill="#085CF0" />
              <polygon points="50,0 100,30 100,90 50,60" fill="#713FFF" />
              <polygon points="0,30 50,60 50,120 0,90" fill="#085CF0" opacity="0.6" />
              <polygon points="50,60 100,90 100,120 50,120" fill="#713FFF" opacity="0.6" />
              <rect x="38" y="30" width="24" height="60" fill="white" />
            </svg>
          </div>

          {/* 로고 텍스트 - 크기 줄여서 크롭돼도 보이게 */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: '#050A34',
              letterSpacing: '-1px',
              marginBottom: 12,
              display: 'flex',
            }}
          >
            DayFocusLab
          </div>

          {/* 서브타이틀 */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: '#050A34',
              marginBottom: 16,
              display: 'flex',
            }}
          >
            당신의 하루에 집중하다
          </div>

          {/* 설명 */}
          <div
            style={{
              fontSize: 18,
              color: '#6B7280',
              marginBottom: 32,
              display: 'flex',
            }}
          >
            집중이 성장이 됩니다
          </div>

          {/* 서비스 태그들 */}
          <div
            style={{
              display: 'flex',
              gap: 10,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #050A34 0%, #020151 100%)',
                color: '#FFFFFF',
                padding: '8px 20px',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                display: 'flex',
              }}
            >
              AI PT
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                color: '#050A34',
                padding: '8px 20px',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                border: '1.5px solid #E5E7EB',
                display: 'flex',
              }}
            >
              AX 특강
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                color: '#050A34',
                padding: '8px 20px',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                border: '1.5px solid #E5E7EB',
                display: 'flex',
              }}
            >
              포커스 스페이스
            </div>
          </div>
        </div>

        {/* 하단 */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            display: 'flex',
            alignItems: 'center',
            color: '#9CA3AF',
            fontSize: 15,
            letterSpacing: '0.5px',
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
