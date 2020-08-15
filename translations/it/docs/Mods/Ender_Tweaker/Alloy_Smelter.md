# Fusione Leghe Metalliche

## Pacchetto

`import mods.enderio.AlloySmelter;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] input** Gli ingredienti. Deve essere compreso tra 1 e 3 ingredienti.
- **int energyCost** Quanto FE usa la ricetta. Predefinito a 5000.
- **float xp** L'xp è concesso da questa ricetta. Non può essere negativo.

## Addizione

```zenscript
mods.enderio.AlloySmelter.addRecipe(IItemStack output, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.AlloySmelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
```

## Rimozione

```zenscript
mods.enderio.AlloySmelter.removeRecipe(IItemStack output);

mods.enderio.AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:7>);
```