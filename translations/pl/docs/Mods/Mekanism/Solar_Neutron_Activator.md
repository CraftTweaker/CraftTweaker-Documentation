# Aktywator Solar Neutron

Od Mekanism 9.7. możliwe jest teraz wyświetlenie wszystkich ciągów receptur aktywatora Solar Neutron poprzez polecenie `/ct mekrecipes solarneutronactivator`

## Dodanie

```zenscript
mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput);

mods.mekanism.solarneutronactivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
```

## Usuwanie

```zenscript
mods.mekanizm.solarneutronactivator.removeRecipe(Input, @Optional IIngredient gas);

mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
```

Określenie parametru wyjściowego usunie tylko konkretny przepis, który daje ten wyjście z tego wejścia. Pominięcie parametru wyjściowego usunie wszystkie przepisy, które może wytwarzać element wejściowy.

## Usuwanie wszystkich przepisów

Od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy o aktywatorze Solar Neutron. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanizmu.solarneutronaktywator.removeAllRecipes();
```