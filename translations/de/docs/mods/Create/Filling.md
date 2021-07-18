::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Filling

Die Filling Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten ausgibt, wenn ein Stück Erde mit Lava (Flüssigkeit) mit einer Dauer von 100 Ticks gefüllt wird.

```zenscript
// <recipetype:create:filling>.addRecipe(String name, IItemStack output, IIngredient inputContainer, IFluidStack inputFluid, @Optional(100) int duration)

<recipetype:create:filling>.addRecipe("filling_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <fluid:minecraft:lava>);
```

#### Remove Recipes

Das folgende Skript wird alle Befüllrezepte entfernen, die Redstone ausgeben.

```zenscript
// <recipetype:create:filling>.removeRecipe(IItemStack output)

<recipetype:create:filling>.removeRecipe(<item:minecraft:redstone>);
```