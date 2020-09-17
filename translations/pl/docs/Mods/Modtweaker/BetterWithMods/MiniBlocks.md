# Narzędzia MiniBlocks

## Zdobądź konkretne Mini Bloki

Jest to funkcja util dla uzyskania IIngredient dla określonego MiniBlocka, dzięki czemu można uniknąć dziwnego NBT.

* Parametr typu określa "bocznica", "formowanie" lub "narożnik"
* Blok rodzicielski jest blokiem, z którego minimblok dostał swoją teksturę, ponieważ ten blok rodzicielski jest elementami IIngredient takimi jak oredictionary również działa.

```zenscript
mods.betterwithmods.MiniBlocks.getMiniBlock(Typ String, IIngredient parentBlock)


//Example
//Gets all sidings that have a base of planks
mods.betterwithmods.MiniBlocks.getMiniBlocks.getMiniBlock("siding", <ore:plankWood>);
```