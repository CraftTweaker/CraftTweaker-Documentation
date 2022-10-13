# IBlock
An IBlock Object consists of a [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), a metadata and a TileData.  
It refers to a block in the game.

## 패키지 임포트하기
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlock;`

## IBlock객체 호출

IBlock 객체를 반환하는 방법은 여러가지입니다.

* [ItemStack](/Vanilla/Items/IItemStack/)을 IBlock으로 캐스팅(`as` 키워드를 사용하거나 `asBlock()` 메소드를 사용)
* Using the getBlock(x,y,z) on an [IWorld](/Vanilla/World/IWorld/).
* ContentTweaker의 [ICTBlockStat](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)에 getBlock()을 사용

Warning: Only using the second method is it possible for `data` ZenGetter to return a nonnull IData!

## Zengetters

| Getter     | 역할                        | 반환 타입                                                    |
| ---------- | ------------------------- | -------------------------------------------------------- |
| definition | 블럭의 정의를 반환                | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)    |
| meta       | 블럭의 메타정보를 반환              | int                                                      |
| data       | 블럭의 타일 정보를 반환             | [IData](/Vanilla/Data/IData/)                            |
| fluid      | Returns the Block's fluid | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/) |



# IBlockPattern

IBlocks extend [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) Objects. That means, all functions that are available to IBlockPattern objects can also be used for IBlock objects:

* `blocks` ZenGetter를 사용
* OR'ing
* `in`키워드 사용에 의한 매칭
* `displayName` ZenGetter를 사용
