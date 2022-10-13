# IBlock
An IBlock Object consists of a [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), a metadata and a TileData.  
It refers to a block in the game.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlock;`

## Calling an IBlock Object

There are multiple ways thet return an IBlock object:

* Casting a [IItemStack](/Vanilla/Items/IItemStack/) as IBlock (using the `AS` keyword, or the `asBlock()` method)
* Using the getBlock(x,y,z) on an [IWorld](/Vanilla/World/IWorld/).
* Using getBlock() on ContentTweaker's [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

Ostrzeżenie: Tylko użycie drugiej metody jest możliwe, aby `data` ZenGetter zwrócił nie-null IData!

## Zengetters

| Getter     | What does it do                | Return Type                                              |
| ---------- | ------------------------------ | -------------------------------------------------------- |
| definition | Returns the Block's definition | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)    |
| meta       | Returns the Block's metadata   | int                                                      |
| data       | Returns the Block's tileData   | [IData](/Vanilla/Data/IData/)                            |
| fluid      | Returns the Block's fluid      | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/) |



# IBlockPattern

IBlocks rozszerza [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) obiektów. Oznacza to, że wszystkie funkcje, które są dostępne dla obiektów IBlockPattern mogą być również używane dla obiektów IBlock:

* Use the `blocks` ZenGetter
* OR'ing
* Matching using the `in` keyword
* Use the `displayName` ZenGetter
