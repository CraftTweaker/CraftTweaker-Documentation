# IBlockPattern

An IBlockPattern is an interface that allows for combining several blocks into one object.  
It is comparable to what the [IIngredient](/Vanilla/Variable_Types/IIngredient/) Interface is to [IItemStacks](/Vanilla/Items/IItemStack/).

## 패키지 임포트하기
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockPattern;`


## IBlockPattern 객체 호출

Technically, each time you call an [IBlock](/Vanilla/Blocks/IBlock/) object, you call an IBlockPattern object.  
But there are cases when you explicitly get an IBlockPattern Object as return.

* 두 [IBlock](/Vanilla/Blocks/IBlock/) 객체를 OR(`|`) 연산하는 경우

## ZenGetters

| ZenGetter   | 역할                                                                                                                                       | 반환 타입                                   |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| blocks      | 이 객체에 속하는 모든 블록의 리스트를 반환합니다.                                                                                                             | List<[IBlock](/Vanilla/Blocks/IBlock/)> |
| displayName | 해당 객체에 속하는 블록들의 게임 내 이름들을 반환합니다. 예를 들어, 게임상에서의 이름이 각각 "A"와 "B"인 BlockA와 BlockB가 있다면 이 둘을 포함하는 IBlockPattern의 displayName은 "A | B"와 같습니다. | string                                  |

## OR

두 IBlockPattern 객체를 OR(`|`) 연산자로 합쳐 새로운 IBlockPattern 객체를 만들 수 있습니다.

## 블록 매칭하기
You can check if an IBlockPatternObject contains another using the `in` keyword.  
For example, you could check if a Block is in an IBlockPattern.