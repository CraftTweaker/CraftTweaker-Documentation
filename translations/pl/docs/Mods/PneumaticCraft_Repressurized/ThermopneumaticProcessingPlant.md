# Termopneumatyczny zakład przetwórczy

Przetwórnia termopneumatyczna (TPP) wykorzystuje ciśnienie i ciepło do konwersji jednego płynu lub jednego składnika stałego na inny płyn. Temperatury należy określić w Kelvin: 273 K = 0°C (32°F), 373 K = 100°C (212°F).

*Technicznie 273,16 K = 0°C, ale do celów tego moda jest uproszczona do wyrównania całkowitego.*

## Dzwonienie

Możesz wywołać pakiet TPP używając `mods.pneumaticcraft.thermopneumaticprocessingplant`.

## Usuwanie

Ta funkcja usuwa pierwszy przepis, który znajduje z podanym [IIngredient](/Vanilla/Variable_Types/IIngredient/) `wyjście`:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(IIngredient output);
// Przykład
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

Ta funkcja usuwa *wszystkie* przepisy TPP:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeAllRecipes();
```

## Dodawanie

Następujące funkcje mogą być używane do dodawania przepisów do TPP:

```zenscript
// Dodaj przepis konwertujący element wejściowy na płyn wyjściowy
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(IItemStack itemInput, podwójne ciśnienie, podwójna temperatura, wyjście ILiquidStack);

// Dodaj przepis konwertujący płyn wejściowy i element na płyn wyjściowy (pozycja może być null)
modyfikacje. pneumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, podwójne ciśnienie, podwójna temperatura, ILiquidStack output);

// Przykład: przekształć wodę i czerwony płyn w płyn z czerwonego kamienia w 3. bar i 473K (200C)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3. , 473, <liquid:redstone> * 250);
// Przykład: przekształć olej 10mB w lawę 5mB przy 3,0 barach i 473K
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// Przykład: przekształć 1 netherrack w 50mB lava na 1. pasek i 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50);
```