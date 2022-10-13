# PriorityPreprocessor

PriorityPreprocessor를 사용하면 스크립트 로드에 우선 순위를 부여할 수 있습니다.

## 호출
스크립트에 `#priority number`를 추가하여 PriorityPreprocessor를 호출하고, 설정하려는 우선 순위 번호는 `number`로 설정하십시오.

## 역할
The higher a script's priority the earlier it is getting executed.  
Scripts with the same priority will be sorted alphabetically using their pathname.