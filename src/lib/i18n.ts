export type Locale = 'ko' | 'en';

export const translations = {
  ko: {
    nav: {
      home: '홈',
      services: '서비스',
      about: '회사소개',
      contact: '문의',
    },
    hero: {
      title: '당신의 하루에 집중하다',
      subtitle: '집중이 성장이 됩니다',
      description: 'Day Focus Lab은 AI Transformation 컨설팅과 집중 공간 제공을 통해 당신의 성장을 돕습니다.',
      cta: '서비스 알아보기',
    },
    services: {
      title: '서비스',
      subtitle: '집중을 통한 성장, Day Focus Lab이 함께합니다',
      ax: {
        title: 'AI PT',
        subtitle: '1:1 AI 퍼스널 트레이닝',
        description: '업무에 AI를 활용해 효율화하고 싶지만 어디서부터 시작할지 모르는 직장인, 사업장에 AI를 도입해 자동화하고 싶지만 AI에 대해 잘 모르는 자영업자를 위한 1:1 맞춤형 대면 컨설팅입니다.',
        target: {
          office: {
            title: '직장인',
            description: '업무에 AI를 활용해 효율화하고 싶은데 어디서부터 시작할지 모르는 분들',
          },
          business: {
            title: '자영업자',
            description: '사업장에 AI를 활용해 자동화하고 싶은데 AI에 대해 너무 모르는 분들',
          },
        },
        price: '시간당 20만원 (최소 3시간)',
        location: '패스트파이브 성수 2호점',
        process: ['무료 설문지 작성', '무료 상담 진행', '결제 후 AI PT 시작'],
        features: ['1:1 맞춤 대면 컨설팅', '업무 프로세스 분석 및 자동화', '실전 AI 도구 활용법', '즉시 적용 가능한 솔루션 제공'],
      },
      workshop: {
        title: '클로드코드 특강',
        subtitle: '비개발자를 위한 AI 자동화 강의',
        description: '코딩 없이 말로 명령하면 파일 정리, 디자인, PDF 저장이 자동으로 완성됩니다. 비개발자도 업무 자동화율 90%를 달성할 수 있는 실전 강의입니다.',
        price: '30만원 (4시간)',
        location: '패스트파이브 성수 2호점',
        date: '2026년 3월 21일(토) 오후 1:00~5:00',
        capacity: '선착순 10명',
        features: ['환경 세팅: VSCode + 클로드코드 설치', '파일 관리: 컴퓨터 파일 자동 정리', '디자인 자동화: AI로 포스터 제작', 'PDF 자동화: VSCode에서 PDF 저장'],
        link: 'https://claude-code-landing-zzso.vercel.app/',
      },
      studycafe: {
        title: '포커스 스페이스',
        subtitle: 'Focus Space',
        description: '포커스할 수 있는 최적의 공간을 제공합니다. 조용하고 쾌적한 환경에서 당신의 목표에 온전히 몰입하세요.',
        features: ['집중을 위한 최적의 환경', '24시간 운영', '개인 공간 및 미팅룸', '프리미엄 편의시설'],
      },
    },
    about: {
      title: '회사소개',
      subtitle: 'About Day Focus Lab',
      founder: {
        title: '대표 소개',
        name: '이지인 (Jinny)',
        role: '대표',
        bio: 'Day Focus Lab의 대표 이지인입니다. 집중과 성장의 가치를 믿으며, 사람들이 자신의 잠재력을 최대한 발휘할 수 있는 환경을 만들기 위해 노력하고 있습니다. AI 기술을 활용한 비즈니스 혁신과 실제 집중 공간 운영을 통해, 이론과 실천이 조화를 이루는 성장 생태계를 구축하고자 합니다.',
        expertise: ['AI Transformation', '비즈니스 컨설팅', '공간 운영'],
        linkedin: 'https://www.linkedin.com/in/%EC%A7%80%EC%9D%B8-%EC%9D%B4-15b4072b8/',
        experience: [
          '전) 코르카 AX Engineer',
          '전) 얼라이브 커뮤니티 미래내일일경험 코칭 멘토',
          '전) 코드잇 LX Planning Manager',
          '전) Korea Campus Crusade for Christ Education Planning Manager',
        ],
      },
      focusSpace: {
        title: '포커스 스페이스',
        subtitle: '집중을 위한 최적의 공간',
        location1: {
          name: '서울 군자점',
          address: '서울시 광진구 군자역 인근',
          status: '운영중',
          description: '지니 24 스터디카페와 제휴하여 운영하는 첫 번째 집중 공간입니다. 24시간 운영되며, 노트북 작업에 최적화된 쾌적한 공간과 휴식을 위한 빈백존을 제공합니다.',
          website: 'https://gunjageinie24.vercel.app/',
        },
        location2: {
          name: '경기 산본점',
          address: '경기도 군포시 산본',
          status: '2026년 1월 12일 오픈 예정',
          description: '더 넓고 쾌적한 환경으로 여러분을 찾아갑니다. 산본에서 더 나은 집중 경험을 제공하겠습니다.',
        },
        location3: {
          name: '3호점',
          address: '준비중',
          status: '2026년 3월 오픈 예정',
          description: '지속적인 성장과 확장을 통해 더 많은 분들께 최고의 집중 공간을 제공하겠습니다.',
        },
      },
      mission: {
        title: '미션',
        description: '우리는 사람들이 집중을 통해 성장할 수 있도록 돕습니다. 올바른 환경과 도구, 그리고 전문적인 가이드를 제공하여 모든 사람이 자신의 잠재력을 최대한 발휘할 수 있게 합니다.',
      },
      vision: {
        title: '비전',
        description: '집중이 일상이 되는 세상을 만듭니다. Day Focus Lab은 기술과 공간, 그리고 사람을 연결하여 지속 가능한 성장의 문화를 만들어갑니다.',
      },
      values: {
        title: '핵심 가치',
        items: [
          { title: '집중', description: '한 가지에 몰입할 때 최고의 결과가 나옵니다' },
          { title: '성장', description: '매일 조금씩 나아가는 것이 큰 변화를 만듭니다' },
          { title: '혁신', description: '새로운 기술과 방법으로 더 나은 방법을 찾습니다' },
          { title: '신뢰', description: '진정성 있는 관계가 모든 것의 기초입니다' },
        ],
      },
    },
    contact: {
      title: '문의하기',
      subtitle: '궁금한 점이 있으시면 언제든 문의해주세요',
      form: {
        name: '이름',
        email: '이메일',
        subject: '제목',
        message: '메시지',
        submit: '문의 보내기',
        sending: '전송 중...',
        success: '문의가 성공적으로 전송되었습니다.',
        error: '전송 중 오류가 발생했습니다. 다시 시도해주세요.',
      },
      info: {
        title: '연락처',
        description: '문의 폼을 통해 연락주시면 빠르게 답변드리겠습니다.',
      },
    },
    footer: {
      copyright: '© 2024 Day Focus Lab. All rights reserved.',
      tagline: '당신의 하루에 집중하다',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Focus on Your Day',
      subtitle: 'Focus Becomes Growth',
      description: 'Day Focus Lab helps your growth through AI Transformation consulting and focus spaces.',
      cta: 'Explore Services',
    },
    services: {
      title: 'Services',
      subtitle: 'Growth through Focus, Day Focus Lab is with you',
      ax: {
        title: 'AI PT',
        subtitle: '1:1 AI Personal Training',
        description: 'Personalized 1:1 in-person consulting for office workers who want to leverage AI but don\'t know where to start, and business owners who want to automate with AI but lack technical knowledge.',
        target: {
          office: {
            title: 'Office Workers',
            description: 'For those who want to streamline work with AI but don\'t know where to start',
          },
          business: {
            title: 'Business Owners',
            description: 'For those who want to automate their business with AI but lack AI knowledge',
          },
        },
        price: '200,000 KRW/hour (min. 3 hours)',
        location: 'FastFive Seongsu Branch 2',
        process: ['Free survey', 'Free consultation', 'Payment & AI PT starts'],
        features: ['1:1 In-person Consulting', 'Workflow Analysis & Automation', 'Practical AI Tool Training', 'Ready-to-Apply Solutions'],
      },
      workshop: {
        title: 'Claude Code Workshop',
        subtitle: 'AI Automation for Non-developers',
        description: 'Just speak commands — file organization, design, and PDF creation happen automatically. A hands-on workshop where non-developers can achieve 90% workflow automation.',
        price: '300,000 KRW (4 hours)',
        location: 'FastFive Seongsu Branch 2',
        date: 'March 21, 2026 (Sat) 1:00 PM - 5:00 PM',
        capacity: 'Limited to 10 seats',
        features: ['Setup: VSCode + Claude Code installation', 'File Management: Automatic file organization', 'Design Automation: AI poster creation', 'PDF Automation: PDF export from VSCode'],
        link: 'https://claude-code-landing-zzso.vercel.app/',
      },
      studycafe: {
        title: 'Focus Space',
        subtitle: 'Dedicated Space',
        description: 'We provide the optimal space for deep focus. Fully immerse yourself in your goals in a quiet and comfortable environment.',
        features: ['Optimal Environment for Focus', '24/7 Operation', 'Private Spaces & Meeting Rooms', 'Premium Amenities'],
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'About Day Focus Lab',
      founder: {
        title: 'Meet the Founder',
        name: 'Jiin Lee (Jinny)',
        role: 'CEO',
        bio: 'I am Jiin Lee, CEO of Day Focus Lab. I believe in the value of focus and growth, and am committed to creating an environment where people can maximize their potential. Through AI-powered business innovation and hands-on space management, I aim to build a growth ecosystem where theory and practice harmonize.',
        expertise: ['AI Transformation', 'Business Consulting', 'Space Management'],
        linkedin: 'https://www.linkedin.com/in/%EC%A7%80%EC%9D%B8-%EC%9D%B4-15b4072b8/',
        experience: [
          'Former AX Engineer at Korka',
          'Former Coaching Mentor at Alive Community (Future Tomorrow Work Experience Program)',
          'Former LX Planning Manager at Codeit',
          'Former Education Planning Manager at Korea Campus Crusade for Christ',
        ],
      },
      focusSpace: {
        title: 'Focus Space',
        subtitle: 'Optimal Space for Concentration',
        location1: {
          name: 'Seoul Gunja',
          address: 'Near Gunja Station, Gwangjin-gu, Seoul',
          status: 'Now Open',
          description: 'Our first focus space operated in partnership with Genie 24 Study Cafe. Open 24/7, featuring laptop-friendly workspaces and a relaxing bean bag zone.',
          website: 'https://gunjageinie24.vercel.app/',
        },
        location2: {
          name: 'Gyeonggi Sanbon',
          address: 'Sanbon, Gunpo-si, Gyeonggi-do',
          status: 'Opening on January 12, 2026',
          description: 'We are coming to you with a larger and more comfortable environment in Sanbon, offering an even better focus experience.',
        },
        location3: {
          name: 'Location 3',
          address: 'Coming Soon',
          status: 'Opening by March 2026',
          description: 'Through continuous growth and expansion, we will provide the best focus spaces to more people.',
        },
      },
      mission: {
        title: 'Mission',
        description: 'We help people grow through focus. By providing the right environment, tools, and professional guidance, we enable everyone to maximize their potential.',
      },
      vision: {
        title: 'Vision',
        description: 'Creating a world where focus becomes routine. Day Focus Lab connects technology, space, and people to create a culture of sustainable growth.',
      },
      values: {
        title: 'Core Values',
        items: [
          { title: 'Focus', description: 'The best results come from deep immersion in one thing' },
          { title: 'Growth', description: 'Small daily progress creates big changes' },
          { title: 'Innovation', description: 'Finding better ways with new technology and methods' },
          { title: 'Trust', description: 'Authentic relationships are the foundation of everything' },
        ],
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Feel free to reach out with any questions',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Your message has been sent successfully.',
        error: 'An error occurred. Please try again.',
      },
      info: {
        title: 'Contact Info',
        description: 'Please use the contact form and we will get back to you promptly.',
      },
    },
    footer: {
      copyright: '© 2024 Day Focus Lab. All rights reserved.',
      tagline: 'Focus on Your Day',
    },
  },
};

export type Translations = typeof translations.ko;
