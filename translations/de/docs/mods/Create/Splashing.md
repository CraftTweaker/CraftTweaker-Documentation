::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Splashing

Die Splashing Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten und einen Apfel mit einer Chance von 45% ausgibt, in der ein Stück Erde mit einer Dauer von 100 Ticks bespritzt wird.

```zenscript
// <recipetype:create:splashing>.addRecipe(String name, MCWeightedItemStack[] output, IIngredient input, @Optional(100) int duration)

<recipetype:create:splashing>.addRecipe("splashing_test", [<item:minecraft:diamond>, <item:minecraft:apple> % 45], <item:minecraft:dirt>);
```

#### Remove Recipes

Das folgende Skript wird alle Splashing-Rezepte entfernen, die Gelben Beton ausgeben.

```zenscript
// <recipetype:create:splashing>.removeRecipe(IItemStack output)

<recipetype:create:splashing>.removeRecipe(<item:minecraft:yellow_concrete>);
```

