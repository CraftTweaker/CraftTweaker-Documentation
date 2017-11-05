# IBlock
An IBlock Object consists of a [IBlockDefinition](IBlockDefinition), a metadata and a TileData.  
It refers to a block in the game.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlock;`

## Calling an IBlock Object

There are multiple ways thet return an IBlock object:

* Casting a [IItemStack](/Vanilla/Items/IItemStack) as IBlock (using the `AS` keyword)
* Using the getBlock(x,y,z) on an IBlockGroup or an [IDimension](/AdvancedFunctions/Recipe_Functions/#idimension) Object
* Using getBlock() on ContentTweaker's [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState)

## Zengetters

| Getter     | What does it do                | Return Type                            |
|------------|--------------------------------|----------------------------------------|
| definition | Returns the Block's definition | [IBlockDefinition](IBlockDefinition)   |
| meta       | Returns the Block's metadata   | int                                    |
| data       | Returns the Block's tileData   | [IData](/Vanilla/Data/IData)           |



# IBlockPattern

IBlocks extend [IBlockPattern](IBlockPattern) Objects. That means, all functions that are available to IBlockPattern objects can also be used for IBlock objects:

* Use the `blocks` ZenGetter
* OR'ing
* Matching using the `in` keyword
* Use the `displayName` ZenGetter