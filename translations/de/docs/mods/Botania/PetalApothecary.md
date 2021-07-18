# Botania Petal Apothecary

Die Petal-Apotheke ist vom Typ  [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt dem Petal-Apothecary ein Rezept hinzu, das einen Diamanten gibt, wenn der Petal-Apothecary ein Stück Erde gegeben wird (du musst das Rezept trotzdem vervollständigen, indem du Weizensamen in die Petal-Apothecary wirfst).

```zenscript
// <recipetype:botania:petal_apothecary>.addRecipe(String name, IItemStack output, IIngredient... inputs)

<recipetype:botania:petal_apothecary>.addRecipe("petal_apothecary_test", <item:minecraft:diamond>, <item:minecraft:dirt>);
```

#### Remove Recipes

Das folgende Skript wird alle Petal-Apothecary-Rezepte entfernen, die eine Hydroangeas ausgeben

```zenscript
// <recipetype:botania:petal_apothecary>.removeRecipe(IItemStack output);

<recipetype:botania:petal_apothecary>.removeRecipe(<item:botania:hydroangeas>);
```



