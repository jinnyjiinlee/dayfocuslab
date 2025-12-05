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
      description: 'Day Focus Lab은 AI Transformation 컨설팅, 집중 공간 제공, 개인 코칭을 통해 당신의 성장을 돕습니다.',
      cta: '서비스 알아보기',
    },
    services: {
      title: '서비스',
      subtitle: '집중을 통한 성장, Day Focus Lab이 함께합니다',
      ax: {
        title: 'AX 컨설팅',
        subtitle: 'AI Transformation',
        description: 'AI 기술을 활용한 비즈니스 혁신을 돕습니다. 업무 자동화부터 데이터 분석까지, 맞춤형 AI 솔루션을 제공합니다.',
        features: ['AI 도입 전략 수립', '업무 프로세스 자동화', '데이터 분석 및 인사이트', '맞춤형 AI 솔루션'],
      },
      studycafe: {
        title: '포커스 스페이스',
        subtitle: 'Focus Space',
        description: '포커스할 수 있는 최적의 공간을 제공합니다. 조용하고 쾌적한 환경에서 당신의 목표에 온전히 몰입하세요.',
        features: ['집중을 위한 최적의 환경', '24시간 운영', '개인 공간 및 미팅룸', '프리미엄 편의시설'],
      },
      coaching: {
        title: '코칭',
        subtitle: 'Personal Growth',
        description: '개인 맞춤형 코칭으로 당신의 잠재력을 최대한 발휘할 수 있도록 돕습니다. 목표 설정부터 실행까지 함께합니다.',
        features: ['목표 설정 및 계획', '시간 관리 코칭', '생산성 향상 전략', '정기적인 피드백'],
      },
    },
    about: {
      title: '회사소개',
      subtitle: 'About Day Focus Lab',
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
      description: 'Day Focus Lab helps your growth through AI Transformation consulting, focus spaces, and personal coaching.',
      cta: 'Explore Services',
    },
    services: {
      title: 'Services',
      subtitle: 'Growth through Focus, Day Focus Lab is with you',
      ax: {
        title: 'AX Consulting',
        subtitle: 'AI Transformation',
        description: 'We help business innovation using AI technology. From workflow automation to data analysis, we provide customized AI solutions.',
        features: ['AI Adoption Strategy', 'Process Automation', 'Data Analysis & Insights', 'Custom AI Solutions'],
      },
      studycafe: {
        title: 'Focus Space',
        subtitle: 'Dedicated Space',
        description: 'We provide the optimal space for deep focus. Fully immerse yourself in your goals in a quiet and comfortable environment.',
        features: ['Optimal Environment for Focus', '24/7 Operation', 'Private Spaces & Meeting Rooms', 'Premium Amenities'],
      },
      coaching: {
        title: 'Coaching',
        subtitle: 'Personal Growth',
        description: 'We help you maximize your potential with personalized coaching. From goal setting to execution, we are with you.',
        features: ['Goal Setting & Planning', 'Time Management', 'Productivity Strategies', 'Regular Feedback'],
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'About Day Focus Lab',
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
