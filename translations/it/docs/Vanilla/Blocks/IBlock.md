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

Attenzione: Solo usando il secondo metodo è possibile che i dati `` ZenGetter restituiscano un IData non nulla!

## Zengetters

| Getter     | What does it do                | Return Type                                           |
| ---------- | ------------------------------ | ----------------------------------------------------- |
| definition | Returns the Block's definition | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| meta       | Returns the Block's metadata   | int                                                   |
| data       | Returns the Block's tileData   | [IData](/Vanilla/Data/IData/)                         |

# IBlockPattern

IBlocks estende [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) Objects. Ciò significa che tutte le funzioni disponibili per gli oggetti IBlockPattern possono essere utilizzate anche per gli oggetti IBlock:

* Use the `blocks` ZenGetter
* OR'ing
* Matching using the `in` keyword
* Use the `displayName` ZenGetter