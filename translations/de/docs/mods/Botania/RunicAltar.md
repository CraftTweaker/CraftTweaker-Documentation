# Botania Runic Altar

Der Runic Altar ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die dem IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt dem Runic Altar ein Rezept hinzu, das 200 Mana verwendet und einen Diamanten gibt, wenn ein Stück Erde und ein Apfel in den Runic Altar gelegt werden (Du musst das Rezept trotzdem vervollständigen, indem du dem Altar ein Living Rock gibst).

```zenscript
// <recipetype:botania:runic_altar>.addRecipe(String name, IItemStack output, int mana, IIngredient... inputs)

<recipetype:botania:runic_altar>.addRecipe("rune_altar_test", <item:minecraft:diamond>, 200, <item:minecraft:dirt>, <item:minecraft:apple>);
```

#### Remove Recipes

Das folgende Skript wird alle Runic Altar-Rezepte entfernen, die eine Rune des Zorns ausgeben

```zenscript
// <recipetype:botania:runic_altar>.removeRecipe(IItemStack output);

<recipetype:botania:runic_altar>.removeRecipe(<item:botania:rune_wrath>);
```



