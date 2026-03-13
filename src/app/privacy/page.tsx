'use client';

import Link from 'next/link';

export default function Privacy() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">개인정보처리방침</h1>
          <p className="text-gray-500 text-sm mb-12">시행일: 2026년 1월 1일</p>

          <div className="prose prose-gray max-w-none space-y-10 text-sm leading-relaxed text-gray-700">
            <p>
              데이포커스랩(이하 &quot;회사&quot;)은 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제1조 (수집하는 개인정보 항목)</h2>
              <p className="mb-3">회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.</p>
              <div className="bg-gray-50 p-5 rounded-xl space-y-4">
                <div>
                  <h3 className="font-semibold text-black mb-2">1. 무료 상담 신청 시 (구글폼)</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>필수: 이름, 이메일</li>
                    <li>선택: 업종/직무, 소속 조직/팀 규모, 현재 사용 중인 툴, 기술 숙련도, 예산 범위, 희망 일정, 업무 현황, 자동화 희망 영역</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">2. 결제 시</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>필수: 이름, 이메일, 연락처, 결제 정보</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">3. 문의 시</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>필수: 이름, 이메일</li>
                    <li>선택: 연락처, 문의 내용</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제2조 (개인정보의 수집 및 이용 목적)</h2>
              <p className="mb-3">회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>서비스 제공:</strong> 무료 상담 진행, AI PT 서비스 제공, 맞춤형 컨설팅 준비</li>
                <li><strong>결제 및 환불 처리:</strong> 서비스 요금 결제, 환불 처리</li>
                <li><strong>고객 관리:</strong> 서비스 이용 관련 안내, 문의 응대</li>
                <li><strong>서비스 개선:</strong> 서비스 품질 향상을 위한 통계 분석</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제3조 (개인정보의 보유 및 이용 기간)</h2>
              <p className="mb-3">회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 의거하여 보존할 필요가 있는 경우 아래와 같이 보관합니다.</p>
              <div className="bg-gray-50 p-5 rounded-xl space-y-2">
                <p><strong>계약 또는 청약 철회 등에 관한 기록:</strong> 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                <p><strong>대금 결제 및 재화 등의 공급에 관한 기록:</strong> 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                <p><strong>소비자의 불만 또는 분쟁 처리에 관한 기록:</strong> 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제4조 (개인정보의 제3자 제공)</h2>
              <p className="mb-3">회사는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제5조 (개인정보 처리의 위탁)</h2>
              <p className="mb-3">회사는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다.</p>
              <div className="bg-gray-50 p-5 rounded-xl">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-black">수탁업체</th>
                      <th className="text-left py-2 font-semibold text-black">위탁 업무</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">토스페이먼츠</td>
                      <td className="py-2">결제 처리</td>
                    </tr>
                    <tr>
                      <td className="py-2">Google (구글폼)</td>
                      <td className="py-2">설문 데이터 수집 및 저장</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제6조 (개인정보의 파기)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</li>
                <li>전자적 파일 형태의 정보는 복구 및 재생할 수 없도록 안전하게 삭제하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제7조 (이용자의 권리와 행사 방법)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>이용자는 언제든지 자신의 개인정보에 대해 열람, 수정, 삭제, 처리정지를 요청할 수 있습니다.</li>
                <li>위 권리 행사는 이메일(dayfocuslab@gmail.com)을 통해 요청할 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제8조 (개인정보의 안전성 확보 조치)</h2>
              <p className="mb-3">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>개인정보 접근 제한: 개인정보를 처리하는 인원을 최소화하고 접근 권한을 관리합니다.</li>
                <li>개인정보의 암호화: 이용자의 개인정보는 암호화되어 저장 및 관리됩니다.</li>
                <li>보안 프로그램 설치 및 갱신: 해킹이나 바이러스 등에 의한 개인정보 유출을 방지하기 위해 보안 프로그램을 설치하고 주기적으로 갱신합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제9조 (개인정보 보호책임자)</h2>
              <div className="bg-gray-50 p-5 rounded-xl space-y-1">
                <p><strong>성명:</strong> 이지인</p>
                <p><strong>직위:</strong> 대표</p>
                <p><strong>이메일:</strong> dayfocuslab@gmail.com</p>
                <p><strong>전화:</strong> 010-4067-5392</p>
              </div>
              <p className="mt-3">
                기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우 아래 기관에 문의하시기 바랍니다.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>개인정보 침해신고센터 (한국인터넷진흥원): 118</li>
                <li>개인정보 분쟁조정위원회: 1833-6972</li>
                <li>대검찰청 사이버수사과: 1301</li>
                <li>경찰청 사이버수사국: 182</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">제10조 (개인정보처리방침 변경)</h2>
              <p>본 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항 시행 7일 전부터 공지사항을 통하여 고지합니다.</p>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-bold text-black mb-3">사업자 정보</h2>
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
            <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
              &larr; 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
