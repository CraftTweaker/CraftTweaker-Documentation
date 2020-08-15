# Komora ciśnieniowa

Komora ciśnieniowa jest konstrukcją wieloblokową, która wykorzystuje sprężone powietrze do konwersji jednego lub więcej elementów wejściowych na jeden lub więcej elementów wyjściowych. Przepisy komory ciśnieniowej mają odpowiednią wartość ciśnieniową, czyli ciśnienie powietrza w barach wymagane do przeprowadzenia konwersji.

## Dzwonienie

Pakiet komory ciśnieniowej można wywołać za pomocą `mods.pneumaticcraft.pressure`.

## Usuwanie

This function removes the first recipe it finds with the given [IItemStack](/Vanilla/Items/IItemStack/) `outputs` array:

```zenscript
mods.pneumaticcraft.pressurechamber.removeRecipe(IItemStack[] wyjście);
// Przykład
mods.pneumaticcraft.pressurechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
```

Ta funkcja usuwa *wszystkie* przepisy komory ciśnieniowej:

```zenscript
mods.pneumaticcraft.pressurechamber.removeAllRecipes();
```

## Dodawanie

Ta funkcja służy do dodawania nowych przepisów do komory ciśnieniowej:

```zenscript
mods.pneumaticcraft.pressurechamber.addRecipe(IIngredient[] wejść, podwójne ciśnienie, IItemStack[] wyjście);

// Przykład
mods.pneumaticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);
```