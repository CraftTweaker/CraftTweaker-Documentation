::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Emptying

Die Emptying Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten und Lava (Flüssigkeit) ausgibt, wenn ein Stück Erde mit einer Dauer von 100 Ticks geleert wird.

```zenscript
// <recipetype:create:emptying>.addRecipe(String name, IItemStack outputItem, IFluidStack outputFluid, IIngredient inputContainer, @Optional(100) int duration)

<recipetype:create:emptying>.addRecipe("emptying_test", <item:minecraft:diamond>, <fluid:minecraft:lava>, <item:minecraft:dirt>);
```

#### Remove Recipes

Das folgende Skript wird alle Rezepte entfernen, die einen Eimer ausgeben.

```zenscript
// <recipetype:create:emptying>.removeRecipe(IItemStack output)

<recipetype:create:emptying>.removeRecipe(<item:minecraft:bucket>);
```



