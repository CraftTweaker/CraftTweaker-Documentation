# 전역 상수와 정적 상수

스크립트를 작성하다보면 같은 변수를 스크립트마다 돌려가며 계속 써야 할 상황이 올 때가 있습니다.  
이 작업을 계속 붙여넣기로 구현하면 굉장히 비효율적일 겁니다. 그러면 이러한 것을 가능케 할 기능이 없을까요?

이러한 생각을 가진 분들을 위해 모든 스크립트에서 참조 가능한 전역 상수와 스크립트 파일 안에서 참조 가능한 정적 상수를 제공합니다.  
이 값들은 한 번 선언되면 값을 변경할 수 없습니다.

## 전역과 정적의 차이

Both, statics and globals are scriptbound and instantiated before the script is executed.  
Both cannot be changed.  
The difference is how they are called:  
Globals can be called from everywhere simply by their name unless you already have a local variable that has the same name.  
Statics on the other hand, need to use the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference/) to be accessed.

global 상수는 `global` 키워드로, static 상수는 `static` 키워드로 선언할 수 있습니다.

그걸 제외하면 이 둘은 동일합니다.

## 전역 상수의 사용

전역 상수의 선언은 지역 상수 선언과 마찬가지로 간단합니다.

```zenscript
import crafttweaker.item.IItemStack;


global myGlobalValue as IItemStack = <minecraft:dirt>;
static myStaticValue as IItemStack = <minecraft:sand>;
```

자, 위 예제를 살펴볼까요?

1. `global` 키워드는 global 상수의 선언을 가리킵니다.
2. `myGlobalValue`는 현재 선언된 global 상수의 식별자입니다.
3. `as IItemStack` the type of the value (It is recommended to [import](/AdvancedFunctions/Import/) the types before casting the variable)
4. `= <minecraft:dirt>;`는 초기화할 값입니다. 전역 상수는 전부 선언 당시에 딱 한 번만 값이 할당되기에 선언하기 위해선 반드시 값을 초기화해야 합니다!

## 조언

- 먼저 선언된 전역 상수만이 참조 가능합니다. [우선순위 전처리기](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/)를 통해 전역 상수를 사용하기 전에 전역 상수가 선언된 스크립트가 불러올 수 있도록 합시다.
- global 상수는 반드시 scripts 폴더 안의 스크립트에서만 선언되어야 합니다. 만약 그 하위 폴더 안에서 global 상수를 선언할 경우 컴파일은 되지만, FileNotFound 예외가 떠 참조가 불가능하게 됩니다.
- `IAny` 자료형의 인터페이스는 아직 불완전합니다. 따라서 `as`를 생략할 수도 있지만, 가급적 자료형을 분명하게 하기 위해 생략하지 않는 것을 추천드립니다. 더욱이 생략하지 않는 편이 더 코드 읽기가 수월해지고, 디버깅이 쉬워집니다!
- 지역 변수/상수는 전역 상수를 숨길 수 있습니다. 이 말은 즉슨 만약 전역 상수와 지역 변수가 동일한 이름의 식별자를 가질 경우 가장 내부에 있는 스코프의 식별자가 가리키는 값을 우선적으로 선정하게 됩니다.