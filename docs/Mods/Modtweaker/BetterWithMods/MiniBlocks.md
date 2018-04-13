# MiniBlocks Utils

## Get specific Mini Blocks
This is a util function for getting an IIngredient for a specific MiniBlock so you can avoid weird NBT.

* The type parameter specifies "siding", "moulding" or "corner"
* The parentBlock is the block of which the miniblock got its texture from, because this parentBlock is an IIngredient things like oredictionary also work.

```
mods.betterwithmods.MiniBlocks.getMiniBlock(String type, IIngredient parentBlock)


//Example
//Gets all sidings that have a base of planks
mods.betterwithmods.MiniBlocks.getMiniBlock("siding", <ore:plankWood>);
```



