# IBlockPattern

IBlockPattern은 복수의 블록을 하나의 객체로 표현하기 위한 인터페이스입니다.  
[IIngredient](/Vanilla/Variable_Types/IIngredient/) 인터페이스와 그에 속하는 [IItemStack](/Vanilla/Items/IItemStack/)들 간의 관계와 유사합니다.

## 패키지 임포트하기

만일의 사태를 대비하여 사용 전엔 아래와 같이 import를 선언해줘야 합니다. (마치 [Array](/AdvancedFunctions/Arrays_and_Loops/)를 캐스팅하는 것처럼요.) 안전을 위해서도 말입니다.   
`import crafttweaker.block.IBlockPattern;`

## IBlockPattern 객체 호출

사실 내부적으로는 매번 [IBlock](/Vanilla/Blocks/IBlock/) 객체를 호출할때 IBlockPattern 객체를 호출합니다.  
아래와 같이 몇몇의 경우에는 반환 타입으로 IBlockPattern 객체를 받겠다고 명시하는 경우도 있습니다.

* 두 [IBlock](/Vanilla/Blocks/IBlock/) 객체를 OR(`|`) 연산하는 경우

## ZenGetters

| ZenGetter   | 역할                                                                                                                                       | 반환 타입                                   |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| blocks      | 이 객체에 속하는 모든 블록의 리스트를 반환합니다.                                                                                                             | List<[IBlock](/Vanilla/Blocks/IBlock/)> |
| displayName | 해당 객체에 속하는 블록들의 게임 내 이름들을 반환합니다. 예를 들어, 게임상에서의 이름이 각각 "A"와 "B"인 BlockA와 BlockB가 있다면 이 둘을 포함하는 IBlockPattern의 displayName은 "A | B"와 같습니다. | String                                  |

## OR 연산

두 IBlockPattern 객체를 OR(`|`) 연산자로 합쳐 새로운 IBlockPattern 객체를 만들 수 있습니다.

## 블록 매칭하기

IBlockPattern 객체는 일종의 IBlock 컬렉션이므로, `in`이나 `has` 연산자를 사용하여 찾고자 하는 블록이 포함되어 있는지 확인할 수 있습니다.  
예로 `<IBlockPattern> has <IBlock>`와 같은 형태로 사용할 수 있습니다.