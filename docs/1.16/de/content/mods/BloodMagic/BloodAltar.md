::requiredMod[Blood Magic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Blutaltar

Der Blood Altar ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten ausgibt, wenn Kohle einem Blutaltar gegeben wird. Der Altar benötigt 5 Sekunden, benötigt eine Mindestebene von 0 und benötigt 500 Lebenspunkte vom Spieler, das 1 Lebenspunkt pro Tick verbraucht und 1 Lebenspunkt pro Tick entzieht, wenn nicht genug Lebenspunkte zur Verfügung gestellt wurden.

```zenscript
// <recipetype:bloodmagic:altar>.addRecipe(String name, IItemStack output, IIngredient input, int minimumTier, int syphon, int consumeRate, int drainRate)

<recipetype:bloodmagic:altar>.addRecipe("altar_test", <item:minecraft:diamond>, <item:minecraft:coal>, 0, 500, 1, 1);
```

#### Remove Recipes

Das folgende Skript entfernt alle Rezepte aus dem Blutaltar, die Reinforced Slate ausgeben.

```zenscript
// <recipetype:bloodmagic:altar>.removeRecipe(IItemStack output);

<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:reinforcedslate>);
```