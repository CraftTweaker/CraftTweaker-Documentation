# IBlock

IBlock 개체는 IBlockDefinition</ 0>, 메타 데이터 및 TileData로 구성됩니다. <1 /> 게임내에서는 블록을 나타냅니다.</p> 

## 패키지 임포트하기

예를 들어 [Array](/AdvancedFunctions/Arrays_and_Loops/)의 캐스팅하려면 관련된 패키지를 임포트해야만 합니다. 안전을 위해서도 말입니다.   
`import crafttweaker.block.IBlock;`

## IBlock객체 호출

IBlock 객체를 반환하는 방법은 여러가지입니다. 

* Casting a [IItemStack](/Vanilla/Items/IItemStack/) as IBlock (using the `AS` keyword, or the `asBlock()` method)
* Using the getBlock(x,y,z) on an [IWorld](/Vanilla/World/IWorld/).
* Using getBlock() on ContentTweaker's [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

## Zengetters

| Getter     | What does it do                | Return Type                                           |
| ---------- | ------------------------------ | ----------------------------------------------------- |
| definition | Returns the Block's definition | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| meta       | Returns the Block's metadata   | int                                                   |
| data       | Returns the Block's tileData   | [IData](/Vanilla/Data/IData/)                         |

# IBlockPattern

IBlocks extend [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) Objects. That means, all functions that are available to IBlockPattern objects can also be used for IBlock objects:

* Use the `blocks` ZenGetter
* OR'ing
* Matching using the `in` keyword
* Use the `displayName` ZenGetter