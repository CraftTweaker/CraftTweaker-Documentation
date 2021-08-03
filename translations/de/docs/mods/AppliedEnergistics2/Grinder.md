::requiredMod[Applied Energistics 2]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2 requiredMod=AppliedEnergisticsTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/appliedenergisticstweaker}

# Applied Energistics 2 Grinder

The Grinder is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezepte hinzufügen

Das folgende Skript fügt dem Grinder zwei Rezepte hinzu, die Folgendes tun:

1) Nach dem Zermahlen von 4 Pfeilen durch fünfmaliges Drehen der Kurbel wird ein Apfel ausgeben. 2) Nach dem Zermahlen eines Apfels durch zweimaliges Drehen der Kurbel wird ein Pfeil und mit einer  Wahrscheinlichkeit von 50% zusätzlich ein Diamant ausgeben.

```zenscript
// <recipetype:appliedenergistics2:grinder>.addRecipe(name as string, output as IItemStack, ingredient as IIngredientWithAmount, turns as int, optionalOutputs as MCWeightedItemStack...)

<recipetype:appliedenergistics2:grinder>.addRecipe("grinder_test", <item:minecraft:apple>, <item:minecraft:arrow> * 4, 5);
<recipetype:appliedenergistics2:grinder>.addRecipe("grinder_test_optional_outputs", <item:minecraft:arrow>, <item:minecraft:apple>, 2, [<item:minecraft:diamond> % 50]);
```

#### Remove Recipes

Das folgende Skript entfernt alle Grinder-Rezepte, die Feuerstein ausgeben.

```zenscript
// <recipetype:appliedenergistics2:grinder>.removeRecipe(output as IItemStack)

<recipetype:appliedenergistics2:grinder>.removeRecipe(<item:minecraft:flint>);
```