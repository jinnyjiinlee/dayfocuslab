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
          backgroundColor: '#050A34',
          backgroundImage: 'linear-gradient(135deg, #050A34 0%, #020151 50%, #092676 100%)',
        }}
      >
        {/* 배경 장식 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            opacity: 0.15,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #085CF0 0%, #713FFF 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -150,
              left: -150,
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #AFE9FD 0%, #085CF0 100%)',
            }}
          />
        </div>

        {/* 메인 콘텐츠 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* 로고/타이틀 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-2px',
              }}
            >
              DayFocusLab
            </div>
          </div>

          {/* 서브타이틀 */}
          <div
            style={{
              fontSize: 32,
              color: '#AFE9FD',
              marginBottom: 48,
            }}
          >
            당신의 하루에 집중하다
          </div>

          {/* 서비스 태그들 */}
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #085CF0 0%, #092676 100%)',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: 30,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              AI PT
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #085CF0 0%, #713FFF 100%)',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: 30,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              AX 특강
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #713FFF 0%, #AFE9FD 100%)',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: 30,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              포커스 스페이스
            </div>
          </div>
        </div>

        {/* 하단 URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            color: '#AFE9FD',
            fontSize: 18,
            opacity: 0.6,
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
