# MiniBlocks Utils

## Consigue Mini Blocks específicos

Esta es una función utilitaria para obtener un IIngredient para un MiniBlock específico para que puedas evitar raros NBT.

* El parámetro de tipo especifica "lating", "moldeando" o "esquina"
* El parentBlock es el bloque del que el minibloque tiene su textura, porque este parentBlock es un IIngredient cosas como el orediccionario también funcionan.

```zenscript
mods.betterwithmods.MiniBlocks.getMiniBlock(String type, IIngredient parentBlock)


//Ejemplo
//Obtiene todos los lados que tienen una base de planks
mods.betterwithmods.MiniBlocks.getMiniBlock("siding", <ore:plankWood>);
```