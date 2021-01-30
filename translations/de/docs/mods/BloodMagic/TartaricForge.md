::requiredMod[Blood Magic]{buildIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Tartarik Schmiede / Höllenschmiede

Die Tartaric Forge / Höllenschmiede ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das Diamanten ausgibt, wenn Kohle einer Tartaric Schmiede / Höllenschmiede gegeben wird. Die Schmiede benötigt mindestens 0 Seelen und wird 500 Seelen entziehen.

```zenscript
// <recipetype:bloodmagic:altar>.addRecipe(String name, IItemStack output, IIngredient[] input, double minimumSouls, double soulDrain)
<recipetype:bloodmagic:soulforge>.addRecipe("soulforge_test", <item:minecraft:diamond>, [<item:minecraft:coal>], 0, 500);
```

#### Remove Recipes

Das folgende Skript wird alle Rezepte aus der Tartarien Schmiede / Höllenschmiede entfernen, die eine Seelenaxt ausgibt

```zenscript
//<recipetype:bloodmagic:soulforge>.removeRecipe(IItemStack output);
<recipetype:bloodmagic:soulforge>.removeRecipe(<item:bloodmagic:soulaxe>);
```