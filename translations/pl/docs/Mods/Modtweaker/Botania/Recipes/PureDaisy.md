# Pure Daisy

Opakowanie PureDaisy jest używane do dodawania lub usuwania przepisów do/z czystej Daisy Botanii.

## Dzwonienie

Możesz wywołać pakiet PureDaisy używając `mods.botania.PureDaisy`

## Znajdź wszystkie zarejestrowane przepisy

Wszystkie zarejestrowane receptury na czyste Daisy można znaleźć za pomocą [`/ct botania daisy`](/Mods/Modtweaker/Botania/Commands/).

## Dodanie przepisu

Czas domyślny dla 150 ticków

```zenscript
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, IItemStack blockOutput, @Opcjonalny int time);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## Usuwanie przepisów

```zenscript
//mods.botania.PureDaisy.removeRecipe(Wyjście Składników);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```