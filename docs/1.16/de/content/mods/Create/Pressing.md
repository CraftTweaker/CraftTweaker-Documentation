::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Pressing

Die Pressing Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten und einen Apfel mit einer Chance von 45% ausgibt, in der ein Stück Erde mit einer Dauer von 100 Ticks zerdrückt wird.

```zenscript
// <recipetype:create:pressing>.addRecipe(String name, MCWeightedItemStack[] output, IIngredient input, @Optional(100) int duration)

<recipetype:create:pressing>.addRecipe("pressing_test", [<item:minecraft:diamond>, <item:minecraft:apple> % 45], <item:minecraft:dirt>);
```

#### Remove Recipes

Das folgende Skript entfernt alle Druckrezepte, die Papier ausgeben.

```zenscript
// <recipetype:create:pressing>.removeRecipe(IItemStack output)

<recipetype:create:pressing>.removeRecipe(<item:minecraft:paper>);
```

