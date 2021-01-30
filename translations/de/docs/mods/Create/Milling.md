::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Milling

Die Milling Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten und einen Apple mit einer Chance von 45% ausgibt, in der ein Stück Erde mit einer Dauer von 100 Ticks gefräst wird.

```zenscript
// <recipetype:create:milling>.addRecipe(String name, MCWeightedItemStack[] output, IIngredient input, @Optional(100) int duration)

<recipetype:create:milling>.addRecipe("milling_test", [<item:minecraft:diamond>, <item:minecraft:apple> % 45], <item:minecraft:dirt>);
```

#### Remove Recipes

Das folgende Skript entfernt alle Fräsrezepte, die Limesand ausgeben.

```zenscript
// <recipetype:create:milling>.removeRecipe(IItemStack output)

<recipetype:create:milling>.removeRecipe(<item:create:limesand>);
```