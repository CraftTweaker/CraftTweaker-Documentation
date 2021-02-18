# Botania Terra Plate

Die Terra-Plate ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird ein Rezept zur Terra-Plate hinzufügen, das 2000 Mana verwendet und einen Diamanten dazu gibt, nachdem er der Terraplate ein Erde gegeben hat.

```zenscript
// <recipetype:botania:terra_plate>.addRecipe(String name, IItemStack output, int mana, IIngredient... inputs)

<recipetype:botania:terra_plate>.addRecipe("terra_plate_test", <item:minecraft:diamond>, 2000, <item:minecraft:dirt>);
```

#### Remove Recipes

Das folgende Skript wird alle Rezepte der Terraplate entfernen, die einen Terrastahlbarren ausgeben.

```zenscript
// <recipetype:botania:terra_plate>.removeRecipe(IItemStack output);

<recipetype:botania:terra_plate>.removeRecipe(<item:botania:terrasteel_ingot>);
```



