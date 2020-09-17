# Odparowanie termiczne

Od Mekanism 9.7.0 jest teraz możliwe wyświetlenie wszystkich ciągów receptur odparowania termicznego poprzez polecenie `/ct mekrecipes thermalepaporation`

## Dodanie

```zenscript
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack liquidOutput);

mods.mekanism.thermalevaporation.addRecipe(<liquid:liquidfusionfuel>, <liquid:lava>);
```

## Usuwanie

```zenscript
mods.mekanism.thermalevaporation.removeRecipe(Identalny płynny Input, @Optional IIngredient liquidOutput);

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:brine>);
```

Określenie parametru wyjściowego usunie tylko konkretny przepis, który daje ten wyjście z tego wejścia. Pominięcie parametru wyjściowego usunie wszystkie przepisy, które może wytwarzać element wejściowy.

## Usuwanie wszystkich przepisów

Począwszy od Mekanism 9.7.0 możliwe jest obecnie usunięcie wszystkich przepisów dotyczących termicznej oczyszczalni. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.thermalevaporation.removeAllRecipes();
```