# 📌 OpenAI 요약 노트 (Plota's Note)

- **배포 주소**: [https://openai-daaf0.web.app/](https://openai-daaf0.web.app/)
- **개발 기간**: 2025년 7월 1일 ~ 7월 21일
- **개발 형태**: 개인 프로젝트 / 프론트엔드 중심

---

## 🧠 프로젝트 개요

OpenAI API를 활용해 사용자가 입력한 영어 문장을 **자동으로 한글 요약**해주는 메모형 서비스입니다.  
사용자는 여러 개의 노트를 생성할 수 있으며, 각 노트에 메모와 요약 결과를 관리할 수 있습니다.

---

## 🛠 기술 스택

| 분야         | 기술                                |
|--------------|-------------------------------------|
| 개발환경     | Vite, React, JavaScript             |
| 상태관리     | Redux Toolkit                       |
| 스타일링     | Tailwind CSS                        |
| API 연동     | OpenAI API (3.5 turbo)         |
| 백엔드/저장소| Firebase Hosting & Firestore        |
| 배포         | Firebase Hosting                    |

---

## 💡 주요 기능

- ✅ **노트 추가 / 삭제 / 선택 기능**  
  - 좌측 사이드바에서 노트 관리  
  - 날짜 기반으로 생성됨

- ✅ **영문 입력 → 한글 요약 결과 표시**
  - 사용자가 왼쪽 textarea에 영어 문장을 입력 후 '요약' 버튼 클릭  
  - OpenAI API를 통해 요약 결과를 우측 textarea에 표시

- ✅ **Redux 기반 상태관리**
  - `notesSlice.js`로 노트 리스트 및 선택된 노트를 관리

- ✅ **Firebase 연동**
  - 노트 정보는 Firebase Firestore에 저장
  - 배포는 Firebase Hosting 사용

---

## 🧩 디렉토리 구조

```
recap_first/
├── src/
│   ├── api/               # OpenAI API 연동
│   ├── components/        # UI 컴포넌트 (NoteList, NoteDetail, Sidebar 등)
│   ├── pages/             # 단일 페이지 구성 (Home)
│   ├── store/             # Redux 설정 및 slice
│   ├── App.jsx, main.jsx  # 진입점 및 루트 구성
│   └── index.css          # TailwindCSS 설정
├── firebaseConfig.js      # Firebase 설정
├── firebase.json          # Firebase 배포 설정
├── tailwind.config.js     # TailwindCSS 커스터마이징
└── README.md              # 프로젝트 설명
```

---

## ⚙️ 요약 처리 흐름

1. 사용자가 "메모" 입력란에 텍스트 입력
2. "요약" 버튼 클릭
3. `api/index.js`에서 OpenAI API 호출
4. 요약된 결과를 `notesSlice`를 통해 상태 업데이트
5. 결과가 우측 "요약 결과"란에 실시간 렌더링

---

## 🔍 주요 이슈 및 해결

- **OpenAI API Key 노출 방지**  
  → `.env` 파일로 분리하여 보안 관리

- **요약 속도 최적화**  
  → debounce 적용 고려 및 loading 상태 구현

- **Firebase 배포 시 이미지/경로 깨짐 현상**  
  → `vite.config.js`의 `base: './'` 설정으로 해결

---

## 🎯 핵심 성과

- 간단한 UI로 **실시간 AI 요약 기능 구현**
- Redux와 Firebase를 함께 사용해 **SPA 앱의 구조적 설계 학습**
- OpenAI API와 프론트엔드 연동 경험 축적

---

## 📎 기타 자료

- GitHub 저장소: https://github.com/smyuDev/openai_recap
- Notion 문서: https://bloom-onion-458.notion.site/1-2377d9b21164809ba871df863f9e58ed?source=copy_link
