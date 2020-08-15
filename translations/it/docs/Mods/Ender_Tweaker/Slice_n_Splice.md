# Fetta 'n' Splice

## Pacchetto

`import mods.enderio.SliceNSplice;`

## Metodi

**- [IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.

**- [Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)[]** Gli ingredienti. Deve essere compreso tra 1 e 6 ingredienti.

**- int energyCost** Quanto FE usa la ricetta. Predefinito a 5000.

**- float xp** L'xp è concesso da questa ricetta. Non può essere negativo.

## Addizione

```zenscript
mods.enderio.SliceNSplice.  
addRecipe(IItemStack output, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0);
```

## Rimozione

```zenscript
mods.enderio.SliceNSplice.removeRecipe(IItemStack output);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```