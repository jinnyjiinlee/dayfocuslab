'use client';

import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B1222]">이용약관</h1>
          <p className="text-gray-500 text-sm mb-12">시행일: 2026년 1월 1일</p>

          <div className="prose prose-gray max-w-none space-y-10 text-sm leading-relaxed text-gray-700">
            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제1조 (목적)</h2>
              <p>
                본 약관은 데이포커스랩(이하 &quot;회사&quot;)이 제공하는 AI PT(AI 퍼스널 트레이닝) 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제2조 (정의)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>&quot;서비스&quot;란 회사가 제공하는 AI PT 컨설팅 서비스를 의미합니다.</li>
                <li>&quot;이용자&quot;란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                <li>&quot;AI PT&quot;란 직장인 및 사업자(자영업자)를 대상으로 AI 활용 역량 강화를 위해 제공하는 1:1 대면 퍼스널 트레이닝을 의미합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제3조 (약관의 효력 및 변경)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
                <li>회사는 관련 법령에 위배되지 않는 범위에서 본 약관을 변경할 수 있으며, 변경 시 적용일자 및 변경사유를 명시하여 최소 7일 전에 공지합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제4조 (서비스의 내용)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>회사는 다음과 같은 서비스를 제공합니다.
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>AI PT (AI 퍼스널 트레이닝): 1:1 대면 컨설팅</li>
                    <li>대상: 직장인, 사업자(자영업자)</li>
                    <li>장소: 패스트파이브 성수 2호점 (서울)</li>
                  </ul>
                </li>
                <li>서비스 이용 절차는 다음과 같습니다.
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>무료 설문지 작성 (구글폼)</li>
                    <li>무료 상담 진행</li>
                    <li>결제 후 AI PT 진행</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제5조 (서비스 요금)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>AI PT 서비스 요금은 시간당 200,000원(부가세 별도)입니다.</li>
                <li>최소 이용 시간은 3시간이며, 최소 결제 금액은 600,000원(부가세 별도)입니다.</li>
                <li>결제는 토스페이먼츠를 통한 온라인 결제로 진행됩니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제6조 (환불 및 취소 정책)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>PT 시작 전 취소:</strong> 전액 환불됩니다.</li>
                <li><strong>PT 시작 후 취소:</strong> 이미 진행한 시간을 차감한 나머지 금액이 환불됩니다.</li>
                <li><strong>환불 불가:</strong> PT 당일 사전 연락 없이 불참(노쇼)한 경우, 해당 회차는 환불이 불가합니다.</li>
                <li>환불 처리는 환불 요청일로부터 영업일 기준 5~7일 이내에 처리됩니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제7조 (이용자의 의무)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>이용자는 서비스 신청 시 정확한 정보를 제공해야 합니다.</li>
                <li>이용자는 약속된 일정에 참석해야 하며, 일정 변경 시 최소 24시간 전에 회사에 통보해야 합니다.</li>
                <li>이용자는 서비스를 통해 제공받은 자료 및 정보를 회사의 사전 동의 없이 제3자에게 공유하거나 상업적으로 이용할 수 없습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제8조 (회사의 의무)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>회사는 이용자에게 안정적이고 전문적인 서비스를 제공하기 위해 최선을 다합니다.</li>
                <li>회사는 이용자의 개인정보를 관련 법령에 따라 보호하며, 개인정보처리방침에 따라 관리합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제9조 (면책조항)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임을 지지 않습니다.</li>
                <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
                <li>서비스를 통해 제공되는 컨설팅 결과의 활용 및 그에 따른 성과는 이용자의 책임 하에 이루어집니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">제10조 (분쟁 해결)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 전속 관할 법원으로 합니다.</li>
                <li>본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.</li>
              </ol>
            </section>

            <section className="border-t border-blue-100 pt-8">
              <h2 className="text-lg font-bold text-[#0B1222] mb-3">사업자 정보</h2>
              <div className="space-y-1">
                <p>상호: 데이포커스랩</p>
                <p>대표: 이지인</p>
                <p>사업자등록번호: 546-10-03346</p>
                <p>주소: 서울특별시 광진구 능동로 330, 5층(중곡동, 우진빌딩)</p>
                <p>이메일: dayfocuslab@gmail.com</p>
                <p>전화: 010-4067-5392</p>
              </div>
            </section>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors">
              &larr; 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
