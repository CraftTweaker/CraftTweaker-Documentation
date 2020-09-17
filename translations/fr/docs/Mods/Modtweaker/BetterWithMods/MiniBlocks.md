# MiniBlocks Utils

## Obtenir des Mini Blocs spécifiques

Ceci est une fonction utile pour obtenir un ingrédient pour un MiniBlock spécifique afin que vous puissiez éviter un NBT bizarre.

* Le paramètre type spécifie "siding", "moulding" ou "corner"
* Le parentBlock est le bloc dont le miniblock a obtenu sa texture, parce que ce parentBlock est un Igredient des choses comme l'oredictionnaire fonctionne aussi.

```zenscript
mods.betterwithmods.MiniBlocks.getMiniBlock(String type, IIngredient parentBlock)


//Exemple
//Renvoie tous les côtés qui ont une base de planches
mods.betterwithmods.MiniBlocks.getMiniBlocks.Block("siding", <ore:plankWood>);
```