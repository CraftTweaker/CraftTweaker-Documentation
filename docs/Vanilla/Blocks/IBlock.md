# IBlock
An IBlock Object consists of a IBlockDefinition, a metadata and a TileData.  
It refers to a block in the game.

## Calling an IBlock Object

There are multiple ways thet return an IBlock object:

* Casting a IItemStack as IBlock (using the `AS` keyword)
* Using the getBlock(x,y,z) on an IBlockGroup or an IDimension Object
* Using ContentTweaker's Block bracket handler

## Zengetters

| Getter     | What does it do                | Return Type      |
|------------|--------------------------------|------------------|
| definition | Returns the Block's definition | IBlockDefinition |
| meta       | Returns the Block's metadata   | int              |
| data       | Returns the Block's tileData   | IData            |