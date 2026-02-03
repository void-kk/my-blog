# jylog

Next.js와 MDX를 사용하여 만든 개발 블로그입니다. 개발과 일상에 대한 이야기를 공유합니다.

🔗 **Live Link:** [https://void-kk.github.io/my-blog](https://void-kk.github.io/my-blog)

## 사용한 기술 스택

- **Next.js**: React 기반 프레임워크 (App Router)
- **TypeScript**: 정적 타입 안정성 보장
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **MDX**: Markdown 문서 내에서 React 컴포넌트 사용
- **GitHub Pages**: 정적 호스팅

## 주요 기능

### 1. MDX 지원
MDX를 사용하여 Markdown 안에서 React 컴포넌트를 직접 사용할 수 있습니다. 이를 통해 코드 블록, 커스텀 컴포넌트 등을 활용한 풍부한 콘텐츠 작성이 가능합니다.

### 2. 다크 모드 (Dark Mode)
`next-themes`를 사용하여 시스템 설정에 반응하는 다크 모드를 구현했습니다.
헤더의 토글 버튼을 통해 수동으로 모드를 전환할 수도 있습니다.
- 라이트 모드 / 다크 모드 / 시스템 설정 지원

### 3. 반응형 디자인 (Responsive Design)
모바일, 태블릿, 데스크탑 등 다양한 화면 크기에 최적화된 레이아웃을 제공합니다.
`lucide-react` 아이콘을 사용하여 깔끔한 네비게이션을 구현했습니다.

### 4. 정적 배포 (Static Export)
`output: 'export'` 설정을 통해 완전한 정적 HTML로 빌드되며, GitHub Pages를 통해 배포됩니다.
이미지와 에셋 경로 최적화를 통해 서브 디렉토리 배포 환경에서도 안정적으로 동작합니다.
