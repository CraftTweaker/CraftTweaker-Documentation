# Wzmywarka chemiczna

Od Mekanism 9.7.0 jest teraz możliwe oglądanie wszystkich ciągów receptur w zmywarce chemicznej poprzez polecenie `/ct mekrecipes washer`

## Dodanie

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas);

mods.mekanism.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## Usuwanie

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

Określenie parametru wejściowego usunie tylko konkretny przepis, który wykorzystuje dane wejściowe. Odrzucenie parametru wejściowego usunie wszystkie receptury, które wytwarzają dane wyjściowe.

## Usuwanie wszystkich przepisów

Począwszy od Mekanism 9.7.0 możliwe jest obecnie usunięcie wszystkich przepisów dotyczących zmywarek chemicznych. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.chemical.washer.removeAllRecipes();
```