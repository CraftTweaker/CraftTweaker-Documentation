# 우선 순위 사전처리기

우선 순위 사전처리기를 사용하면 스크립트 로드에 우선 순위를 부여할 수 있다.

## 호출

You call the Priority Preprocessor by adding `#priority number` to your script with `number` being the priority number you want to set.

## What it does

The higher a script's priority the earlier it is getting executed.  
Scripts with the same priority will be sorted alphabetically using their pathname.