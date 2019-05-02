# IBlock

IBlock 개체는 IBlockDefinition</ 0>, 메타 데이터 및 TileData로 구성됩니다. <1 /> 게임내에서는 블록을 나타냅니다.</p> 

## 패키지 임포트하기

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlock;`

## Calling an IBlock Object

There are multiple ways thet return an IBlock object:

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