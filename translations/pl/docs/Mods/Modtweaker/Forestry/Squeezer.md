# Wyciszacz

ModTweaker pozwala na dodanie lub usunięcie przepisów dotyczących leśnictwa

## Dzwonienie

Możesz wywołać pakiet używając `mods.forestry.Squeezer`

## Usuwanie przepisów

Bądź, nie możesz usunąć przepisów, które wypełniają lub odprowadzają zbiorniki płynów, takich jak puszek!

```zenscript
//mods.forestry.Squeezer.removeRecipe(ILiquidStack płyn, @Optional IIngredient[] składniki);
mods.forestry.Squeezer.removeRecipe(<liquid:juice>);
mods.forestry.Squeezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```

## Dodawanie przepisów

```zenscript
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, IItemStack[] składniki, int timePerItem, @Optional WeightedItemStack itemOutput);
//mods. orestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:redstone>], 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:obsidian>], 120, <minecraft:redstone> % 20);
```

| Parametr    | Typ                                                          | opis                                               |
| ----------- | ------------------------------------------------------------ | -------------------------------------------------- |
| fluidOutput | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)               | Wyjście przepisu                                   |
| składniki   | [IItemStack](/Vanilla/Items/IItemStack/)[]                   | Dane wejściowe Przepisu                            |
| timePerItem | odcień                                                       | Wymagana ilość inputFluid na materiale organicznym |
| itemOutput  | [Ważony Stos Przedmiotów](/Vanilla/Items/WeightedItemStack/) | Mnożnik wyjściowy                                  |