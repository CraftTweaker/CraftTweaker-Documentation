# 스크립트 간 참조

[전역 변수](/AdvancedFunctions/Global_Static_Variables/)나 [사용자 정의 함수](/AdvancedFunctions/Custom_Functions/)를 가지는 모든 스크립트는 스크립트 간 참조 목록에 등록됩니다.

## 설명

- 스크립트 간 참조는 `scripts` 경로서부터 시작됩니다.
- You specify the path relative from the scripts folder (e.g. `scripts.mySubfolder.a.zs`)
- You can use the dot-notation in an [import statement](/AdvancedFunctions/Import/) should you choose to do so.
- ZS first checks for matching directories then for matching files or values.

## Example

Let's say we have two scripts: `a.zs` and `b.zs`.

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