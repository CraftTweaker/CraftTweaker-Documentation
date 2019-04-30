# 스크립트 간 참조

[전역 변수](/AdvancedFunctions/Global_Static_Variables/)나 [사용자 정의 함수](/AdvancedFunctions/Custom_Functions/)를 가지는 모든 스크립트는 스크립트 간 참조 목록에 등록됩니다.

## 설명

- 스크립트 간 참조는 `scripts` 경로서부터 시작됩니다.
- `scripts.mySubfolder.a.zs`와 같이 스크립트 디렉토리를 기준으로 경로를 지칭할 수 있습니다.
- [import 선언](/AdvancedFunctions/Import/)과 같은 표기법을 사용하여 참조할 스크립트를 고를 수 있습니다.
- ZenScript에서 먼저 매칭되는 디렉토리를 먼저 확인한 후 파일이나 값을 확인합니다.

## 예제

`scripts` 폴더에 `a.zs`와 `b.zs` 두 스크립트 파일이 있다고 가정해봅시다.

a.zs:

```kotlin
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs

```kotlin
print(scripts.a.myVal);
scripts.a.makeLine();
```