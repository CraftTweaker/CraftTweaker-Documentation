::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Fermenter

Der Fermenter ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Flüssigkeitsrezepte hinzufügen

Das folgende Skript fügt dem Fermenter ein Rezept hinzu, das eine Holzsense und 1000 IF braucht und 100mb Wasser ausgibt (Fluid).

```zenscript
//<recipetype:immersiveengineering:fermenter>.addRecipe(string name, IIngredient input, int energy, IFluidStack fluidOutput)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_extract_water", <item:minecraft:wooden_hoe>, 1000, <fluid:minecraft:water> * 100);
```

#### Item Rezepte hinzufügen

Das folgende Skript fügt dem Fermenter ein Rezept hinzu, das eine Holzschaufel und 1000 IF einnimmt und eine Steinschaufel ausgibt.

```zenscript
// <recipetype:immersiveengineering:fermenter>.addRecipe(string name, IIngredient input, int energy, IItemStack itemOutput)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_upgrade_hoe", <item:minecraft:wooden_shovel>, 1000, <item:minecraft:stone_shovel>);
```

#### Rezepte für Items und Flüssigkeiten hinzufügen

Das folgende Skript wird dem Fermenter ein Rezept hinzufügen, das ein Holzschwert und 1000 IF benötigt und ein Steinschwert und 100mb Wasser ausgibt.

```zenscript
//<recipetype:immersiveengineering:fermenter>.addRecipe(name as string, input as IIngredient, energy as int, itemOutput as IItemStack, fluidOutput as IFluidStack)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_upgrade_sword", <item:minecraft:wooden_sword>, 1000, <item:minecraft:stone_sword>, <fluid:minecraft:water> * 100);
```

#### Flüssigkeitsrezepte entfernen

The following script will remove all recipes from the Fermenter output Ethanol (Fluid). Beachten Sie, dass mit Immersive Engineering allein alle Standardrezepte entfernt werden.

```zenscript
<recipetype:immersiveengineering:fermenter>.removeRecipe(MCFluid output)

<recipetype:immersiveengineering:fermenter>.removeRecipe(<fluid:immersiveengineering:ethanol>.fluid);
```

#### Item Rezepte entfernen

The following script will remove all recipes from the Fermenter that outputs a Stone Shovel. Beachte, dass es mit Immersive Engineering allein kein Rezept gibt, das ein Item ausgibt, das angegebene Beispiel existiert nur, wenn das Rezept vorher hinzugefügt wird.

```zenscript
// <recipetype:immersiveengineering:fermenter>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:fermenter>.removeRecipe(<item:minecraft:stone_shovel>);
```