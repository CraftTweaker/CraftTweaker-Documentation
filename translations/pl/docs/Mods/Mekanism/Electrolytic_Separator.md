# Separator elektrolityczny

Od Mekanism 9.7.0 możliwe jest teraz wyświetlenie wszystkich ciągów receptur separatora elektrolitycznego poprzez separator polecenia `/ct mekrecipes`

## Dodanie

```zenscript
mods.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2);

mods.mekanism.separator.addRecipe(<liquid:liquidfusionfuel>, 5000, <gas:deuterium>, <gas:tritium>);
```

## Usuwanie

```zenscript
mods.mekanism.separator.removeRecipe(IInputFluid, @Optional IIngredient outputGas1, @Optional IIngredient outputGas2);

mods.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mods.mekanism.separator.removeRecipe(<liquid:water>);
```

Określenie parametru wyjściowego usunie tylko konkretny przepis, który daje ten wyjście z tego wejścia. Pominięcie parametru wyjściowego usunie wszystkie przepisy, które może wytwarzać element wejściowy.

## Usuwanie wszystkich przepisów

Od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy separatora elektrolitycznego. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.separator.removeAllRecipes();
```