# 스크립트 간 참조

All scripts that have [static variables](/AdvancedFunctions/Global_Static_Variables/) or [custom functions](/AdvancedFunctions/Custom_Functions/) are registered to the cross-script reference.  
This allows you to access these fields/functions using the dot-notation.

## 설명

- 스크립트 간 참조는 `scripts` 경로서부터 시작됩니다.
- `scripts.mySubfolder.a.zs`와 같이 스크립트 디렉토리를 기준으로 경로를 지칭할 수 있습니다.
- [import 선언](/AdvancedFunctions/Import/)과 같은 표기법을 사용하여 참조할 스크립트를 고를 수 있습니다.
- ZenScript에서 먼저 매칭되는 디렉토리를 먼저 확인한 후 파일이나 값을 확인합니다.



## 예제
`a.zs`와 `b.zs` 두 스크립트 파일이 있다고 가정해봅시다.

a.zs:
```zenscript
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs
```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```