::requiredMod[Blood Magic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Alchemietisch

Der Alchemietisch ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten ausgibt, wenn Kohle an einen Alchemietisch übergeben wird. Der Tisch braucht 5 Sekunden, um es zu fertigen, benötigt eine Mindestebene von 0 und wird vom Spieler 0 Lebenspunkte abziehen.

```zenscript
// <recipetype:bloodmagic:alchemytable>.addRecipe(name as string, output as IItemStack, input as IIngredient[], syphon as int, ticks as int, minimumTier as int)

<recipetype:bloodmagic:alchemytable>.addRecipe("alchemytable_test", <item:minecraft:diamond>, [<item:minecraft:coal>], 0, 100, 0);
```

#### Remove Recipes

The following script will remove all recipes from the Alchemy Table that output a clay ball.

```zenscript
// <recipetype:bloodmagic:alchemytable>.removeRecipe(output as IItemStack);

<recipetype:bloodmagic:alchemytable>.removeRecipe(<item:minecraft:clay_ball>);
```