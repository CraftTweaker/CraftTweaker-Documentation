# MiniBlocks Utils

## Erhalte bestimmte Mini-Blöcke

Dies ist eine Util-Funktion, um einen IIngredient für einen bestimmten MiniBlock zu erhalten, so dass man merkwürdige NBT vermeiden kann.

* Der Typ-Parameter gibt "Seiten", "Formen" oder "Ecke" an
* Der parentBlock ist der Block, von dem die Miniblock seine Textur erhalten hat, denn dieser parentBlock ist ein IIngredientum wie oredictionary auch funktioniert.

```zenscript
mods.betterwithmods.MiniBlocks.getMiniBlock(String-Typ, IIngredient parentBlock)


//Beispiel
//Ruft alle Seiten ab, die eine Basis von Brettern
mods.betterwithmods.MiniBlocks.getMiniBlock("siding", <ore:plankWood>);
```