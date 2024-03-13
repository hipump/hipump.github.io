---
title: "가이드 임시 포스팅"
date: 2024-03-13T18:15:25+09:00
description: 가이드 임시 포스팅 문서
menu:
  sidebar:
    name: Guide
    identifier: introduction
    weight: 500
tags: ["Guide"]
categories: ["Guide"]
---

<aside>

📌 실제로 방송서비스기획팀에서 쓰고있는 템플릿이나 자세한 내용들은
 3/13 16시에 회의에서 공유드리도록 하겠습니다. 🙂

내용 듣기전에 간단하게 피그마를 사용해보시고, 훑어보시면 더 이해하기 편하실 것 같아요 :)
개인용은 무료로 사용 가능합니다!

</aside>

## 1. 배경

방송서비스기획팀에서 피그마로 공통 기획서 포맷을 맞춘 이유는 이렇습니다 😃

1. **작업 효율성 증대 측면**
- **모든 영역에 있는 공통 화면을 한번에 바꿀 수 있는 컴포넌트 기능을 통해 반복, 수정 작업을 줄일 수 있습니다.** 기획서를 작업하다보면 동일한 규칙을 갖고있는 요소들이 보일텐데요. 그런 부분에서 수정 리소스를 획기적으로 줄일 수 있었어요.
- 피그마는 세로 길이에 제약받지 않아서 기존에 긴 와이어 프레임을 다음 장으로 넘겨 작업해야하는 번거로움을 없앨 수 있어요.
1. **효율 높은 협업 방식**
- 클라우드 기반이라 각자 진행하고 있는 프로젝트의 기획서를 쉽게 접근할 수 있어서 진행중인 작업들을 같이 검토하며 협업이 더 편리해졌어요. 공통된 기획 라이브러리를 구축하고 동일한 영역에 대한 작업을 넘겨받을때 재사용할 수 있도록 구성했어요.
- 코멘트 기능을 통해서 직관적으로 어떤 화면에서 논의가 필요한지 알 수 있어요.
- 하나의 파일에서 여러가지 버전을 확인할 수 있도록 페이지를 복제해서 관리하고 있어요.

![팀 프로젝트 관리](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/c06a12ed-eb2a-4ee7-9260-4c7e937b8deb/Untitled.png)

팀 프로젝트 관리

![썸네일로 진행중, 완료 상태 구분](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/26a1b520-202d-4667-80c6-9ac97650b917/Untitled.png)

썸네일로 진행중, 완료 상태 구분

![코멘트 기능으로 즉각적인 피드백](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/d3b54b3f-e5a9-4d27-b4ee-764a37a22b48/Untitled.png)

코멘트 기능으로 즉각적인 피드백

![한개의 프로젝트 파일에서 버전 관리](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/beeb0238-d0b8-476e-a620-38414bd7ffc7/Untitled.png)

한개의 프로젝트 파일에서 버전 관리

현재 사용하는 기획서는 피그마 커뮤니티에 올라온 와이어프레임을 가공하여 사용했습니다!

개인 draft에 복제해서 살펴보세요!

[https://www.figma.com/file/YSMejRgqDrROXqnT6fTiES/(%EA%B8%B0%ED%9A%8D)%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C-%ED%85%9C%ED%94%8C%EB%A6%BF-UX%2FUI-Wireframe-Template(KOR)-UX%2FUI-(Community)?type=design&node-id=1%3A9&mode=design&t=rJRTbELAqxsIoy77-1](https://www.figma.com/file/YSMejRgqDrROXqnT6fTiES/(%EA%B8%B0%ED%9A%8D)%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C-%ED%85%9C%ED%94%8C%EB%A6%BF-UX%2FUI-Wireframe-Template(KOR)-UX%2FUI-(Community)?type=design&node-id=1%3A9&mode=design&t=rJRTbELAqxsIoy77-1)

## 2. 반복 작업 줄이는 꿀기능

피그마에는 UI 작업을 위한 다양한 기능을 제공하고 있는데요. 기획서 작성만 한다면, 모든 기능을 알고 있을 필요는 없습니다. (물론 많이 알수록 유용하고 손이 빨라지긴 합니다 🤣)

아래 기능들은 저희 팀에서도 잘 사용하고 있는 꿀기능들 입니다 !

### 컴포넌트와 인스턴스

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/93e981d1-eb5d-4880-a83d-ecac2b47ebde/Untitled.png)

`**PPT**`

- 동일한 버튼을 1,000개의 영역에 사용했을 때, 1000개 영역 다 선택하고 하나씩 수정해야하고..그 중 누락도 생기기도 하겠죠?

`**FIGMA**`

- 이럴때 처음부터 컴포넌트로 만들어두고, 복사한 인스턴스를 1000개 영역에 사용하면 1번의 변경으로 모든 영역이 같이 바뀌게 됩니다.

**관련 설명**

[피그마 핵심2) 컴포넌트와 인스턴스 차이 & 스타일화](https://figma-play.tistory.com/10)

### 오토 레이아웃

영역의 크기를 갑자기 일괄 변경해야 할때, 하나 하나 요소를 잡고 크기를 다시 변경하면서 여백도 맞추고 하는 여러 과정을 거쳐본 경험이 있으시죠..? 그럴때 요소들을 오토레이아웃으로 걸면 자동으로 영역을 채워주거나 줄여주면서 더 빠르게 정리할 수 있어요

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/58a91e0a-bef7-4fd9-8cc7-470e6cb6c557/Untitled.png)

<aside>
🔥 **오토레이아웃으로 요소를 정리하면 좋은점**

1. 정리된 레이아웃은 재가공, 재활용이 쉽다 → 리소스 단축
2. 요소 간 여백이나 순서를 수정할 때 하나 하나…눌러서 맞추지 않아도 된다.
   → 반복 작업을 줄일 수 있다!

</aside>

처음엔 손에 익지않아서 하나씩 만드는게 편할 수 있지만 구조를 이해하고 학습되는 순가부터 작업 속도가 가장 빨라지는 기능입니다!!

Auto Layout은 처음 사용한다면 난이도가 있어서 아래 링크의 공식 튜토리얼을 한번 훑어보시는걸 추천해요.

사용하시면서도 이런 공식 영상들을 참고하시면 금방 손에 익히실 수 있을거에요!

https://www.figma.com/file/J0jgeyJQfhuniEB3cl34TW/Figma-auto-layout-playground-(Community)?type=design&node-id=1620%3A1097&mode=design&t=O0xakRialctRX2Wx-1

https://www.youtube.com/watch?v=u4K2m-3MmQQ

### ETC

`**Figma Community**`

템플릿, 아이콘, 시스템 UI 등 이미 만들어진 UI 요소들을 다운받고 활용할 수 있는 곳이에요.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/35739157-a590-4599-a7e1-82c1f796b777/Untitled.png)

`**Widget, Plugin**`

![위젯 기능- 차트](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/f8d6e8ae-31bf-4b17-a4d4-153999868fd2/Untitled.png)

위젯 기능- 차트

![플러그인 기능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4b735ba8-2aa7-4c1b-a062-814644dee5d1/c3b45d41-0170-4bcd-bf9a-f95d9c481a8f/Untitled.png)

플러그인 기능

[html.to.design](https://www.figma.com/community/plugin/1159123024924461424) 웹 주소를 UI로 변형해주는 플러그인

[Iconify](https://www.figma.com/community/plugin/735098390272716381) : 무료 아이콘

[Autoflow](https://www.figma.com/community/plugin/733902567457592893) : 프레임과 프레임을 자동으로 화살표로 연결

[pager](https://www.figma.com/community/plugin/914250706909410339) : 프레임 내 페이지 번호 자동 카운트

[Google Sheets Sync](https://www.figma.com/community/plugin/735770583268406934) : 엑셀 파일이나 구글 시트를 연동시켜 데이터를 동기화할 수 있는 플러그인

여러 유용한 위젯, 플러그인을 통해서도 작업 속도를 향상시킬 수 있으니 활용해보세요!

아이콘, 테이블, 포스트잇 등 기본 메뉴 외에 유용한 기능들

[알아두면 쓸모 있는 피그마 플러그인 추천 7가지 | 요즘IT](https://yozm.wishket.com/magazine/detail/2212/)

## 기본 개념

프레임은 대지(도화지)라고 생각해주시면 편해요!

[피그마 핵심3) 프레임 설정방법, 컨스트레인트에 대해 알아보자](https://figma-play.tistory.com/12?category=1351371)

[피그마 핵심3) 프레임과 그룹, 아트보드 차이에 대해 알아보자](https://figma-play.tistory.com/11)

[Figma Component 컴포넌트 만들기](https://brunch.co.kr/@applehong/14)


{{ $script := resources.Get "scripts/Notion_data.js" }}
<script src="{{ $script.RelPermalink }}" integrity="{{ $script.Data.Integrity }}"></script>

