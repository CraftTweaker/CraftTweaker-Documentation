# 온 사전처리기

## 사전처리기란?

이름에서 알 수 있듯이, 사전 처리기는 스크립트가 실행되기 전에 실행된다.  
그들은 디버그 모드 또는 억제 대괄호 오류와 같은 다양한 작업을 수행할 수 있다.

## 사전 처리기 호출

사전처리기는는 #comment 함수를 사용하여 호출할 수 있다.  
사전처리기 키워드로 시작할 수 있으므로 주의하십시오.

```JAVA
#debug is my favorite word I like to add it everywhere as a comment
```

↑ Would enable debug mode as `#debug` is found. If you really want to ensure such a rare case doesn't happen, use `//` for comments.