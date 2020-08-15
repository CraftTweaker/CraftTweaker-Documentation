# Infuler chemiczny

Od Mekanism 9.7.0 jest teraz możliwe oglądanie wszystkich ciągów receptur Infusa chemicznego poprzez polecenie `/ct mekrecipes chemicalInfuser`

## Dodanie

```zenscript
mods.mekanism.chemical.infuser.addRecipe(IGasStack inputGas1, IGasStack inputGas2, IGasStack outputGas);

mods.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:tritium>);
```

## Usuwanie

```zenscript
mods.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas1, @Optional IIngredient inputGas2);

mods.mekanism.chemical.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
mods.mekanism.chemical.infuser.removeRecipe(<gas:fusionfuel>);
```

Określenie parametru wejściowego usunie tylko konkretny przepis, który wykorzystuje dane wejściowe. Odrzucenie parametru wejściowego usunie wszystkie receptury, które wytwarzają dane wyjściowe.

## Usuwanie wszystkich przepisów

Począwszy od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy dotyczące pieczenia chemicznego. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.chemical.infuser.removeAllRecipes();
```