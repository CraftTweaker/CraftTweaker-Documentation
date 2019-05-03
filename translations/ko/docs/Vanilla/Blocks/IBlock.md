# IBlock

IBlock 개체는 IBlockDefinition</ 0>, 메타 데이터 및 TileData로 구성됩니다. <1 /> 게임내에서는 블록을 나타냅니다.</p> 

## 패키지 임포트하기

예를 들어 [Array](/AdvancedFunctions/Arrays_and_Loops/)의 캐스팅하려면 관련된 패키지를 임포트해야만 합니다. 안전을 위해서도 말입니다.   
`import crafttweaker.block.IBlock;`

## IBlock객체 호출

IBlock 객체를 반환하는 방법은 여러가지입니다. 

* [ItemStack](/Vanilla/Items/IItemStack/)을 IBlock으로 캐스팅(`as` 키워드를 사용하거나 `asBlock()` 메소드를 사용)
* Using the getBlock(x,y,z) on an [IWorld](/Vanilla/World/IWorld/).
* ContentTweaker의 [ICTBlockStat](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)에 getBlock()을 사용

## Zengetters

| Getter     | 기능            | 반환 타입                                                 |
| ---------- | ------------- | ----------------------------------------------------- |
| definition | 블럭의 정의를 반환    | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| meta       | 블럭의 메타정보를 반환  | int                                                   |
| data       | 블럭의 타일 정보를 반환 | [IData](/Vanilla/Data/IData/)                         |

# IBlockPattern

IBlock은 [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) 객체를 확장합니다. That means, all functions that are available to IBlockPattern objects can also be used for IBlock objects:

* Use the `blocks` ZenGetter
* OR'ing
* Matching using the `in` keyword
* Use the `displayName` ZenGetter