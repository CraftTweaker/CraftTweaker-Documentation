::requiredMod[Blood Magic]{buildIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Alchemietisch

Der Alchemietisch ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten ausgibt, wenn Kohle an einen Alchemietisch übergeben wird. Der Tisch braucht 5 Sekunden, um es zu fertigen, benötigt eine Mindestebene von 0 und wird vom Spieler 0 Lebenspunkte abziehen.

```zenscript
// <recipetype:bloodmagic:alchemytable>.addRecipe(String name, IItemStack output, IIngredient[] input, int syphon, int ticks, int minimumTier)
<recipetype:bloodmagic:alchemytable>.addRecipe("alchemytable_test", <item:minecraft:diamond>, [<item:minecraft:coal>], 0, 100, 0);
```

#### Remove Recipes

Das folgende Skript entfernt alle Rezepte aus der Alchemie-Tabelle, die Lehm ausgeben.

```zenscript
//<recipetype:bloodmagic:alchemytable>.removeRecipe(IItemStack output);
<recipetype:bloodmagic:alchemytable>.removeRecipe(<item:minecraft:clay_ball>);
```