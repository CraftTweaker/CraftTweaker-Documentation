# Stop hutniczy

## Pakiet

`import mods.enderio.AlloySmelter;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.
- **[Składnik](/Vanilla/Variable_Types/IIngredient/)[] wejścia** Składniki. Musi zawierać od 1 do 3 składników.
- **int energyCost** Ile FE używa przepisu. Domyślnie 5000.
- **float xp** xp jest przyznany z tego przepisu. Nie może być negatywny.

## Dodanie

```zenscript
mods.enderio.AlloySmelter.addRecipe(IItemStack output, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.AlloySmelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
```

## Usuwanie

```zenscript
mods.enderio.AlloySmelter.removeRecipe(IItemStack output);

mods.enderio.AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:7>);
```