# Saul Leiter Inspired Cinema

사울레이터에게 영감받아 인스타그램에 업로드 된 사진들(`#saulleiterinspired`)을 가져와 보여주는 이미지 슬라이드입니다.

![preview](/public/preview-saul-leiter-inspired.gif)

## 이슈와 해결

- CORS 이슈로 인스타그램 링크의 이미지를 가져올 수 없기에 proxy 서버에서 받아온 이미지 데이터를 사용합니다.
- 간혹 이미지 링크에 요청을 보냈을 때 에러페이지를 펫칭해오는 이슈가 있습니다.
  - 이를 해결하기 위해 일정주기로 요청을 보내 가져오지 못했던 이미지들을 채워넣는 작업을 진행할 예정입니다. (깃허브의 Issues => Projects에 정리)

---

전시공간 Piknic의 의뢰로 개발되었으며, 개발에 필요한 디자인과 데이터 링크는 Piknic에서 제공받았음을 알립니다.
