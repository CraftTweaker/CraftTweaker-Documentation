::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Cutting

Die Cutting Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten ausgibt, wenn ein Glasstück mit einer Dauer von 100 Ticks geschnitten wird.

```zenscript
// <recipetype:create:cutting>.addRecipe(String name, IItemStack output, IIngredient input, @Optional(100) int duration)

<recipetype:create:cutting>.addRecipe("cutting_test", <item:minecraft:diamond>, <item:minecraft:glass>);
```

#### Remove Recipes

Das folgende Skript wird alle Schneidrezepte entfernen, die ein gestreiftes Dschungelholz ausgeben.

```zenscript
// <recipetype:create:cutting>.removeRecipe(IItemStack output)

<recipetype:create:cutting>.removeRecipe(<item:minecraft:stripped_jungle_wood>);
```


