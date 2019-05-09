# IBlockPattern

IBlockPattern은 복수의 블록을 하나의 객체로 표현하기 위한 인터페이스입니다.  
[IIngredient](/Vanilla/Variable_Types/IIngredient/) 인터페이스와 그에 속하는 [IItemStack](/Vanilla/Items/IItemStack/) 간의 관계와 유사합니다.

## 패키지 임포트하기

예를 들어 [Array](/AdvancedFunctions/Arrays_and_Loops/)를 캐스팅하려면 관련된 패키지를 임포트해야만 합니다. 안전을 위해서도 말입니다.   
`import crafttweaker.block.IBlockPattern;`

## IBlockDefinition 객체 호출

사실 내부적으로는 매번 [IBlock](/Vanilla/Blocks/IBlock/) 객체를 호출할때 IBlockPattern 객체를 호출합니다.  
몇몇의 경우에는 반환 타입으로 IBlockPattern 객체를 받겠다고 명시하는 경우도 있습니다.

* OR two [IBlocks](/Vanilla/Blocks/IBlock/)

## ZenGetters

| ZenGetter   | What does it do                                | Return Type                             |
| ----------- | ---------------------------------------------- | --------------------------------------- |
| blocks      | Lists all possible blocks for this object      | List<[IBlock](/Vanilla/Blocks/IBlock/)> |
| displayName | Returns the displayNames of the fitting blocks | String                                  |

## OR

You can OR two IBlockPattern Objects using the OR `|` Operator

## Matching

You can check if an IBlockPatternObject contains another using the `in` keyword.  
For example, you could check if a Block is in an IBlockPattern.