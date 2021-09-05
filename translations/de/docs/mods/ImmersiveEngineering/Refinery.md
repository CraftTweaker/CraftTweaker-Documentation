::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Refinery

Die Refinery ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt der Refinery ein Rezept hinzu, das 10mb Herbicid (Fluid) ausgibt, wenn 10mb Wasser (Fluid) und 1mb Ethanol mit 1000 IF hinzugefügt wird.

```zenscript
// <recipetype:immersiveengineering:refinery>.addRecipe(string recipePath, MCTagWithAmount<MCFluid> fluidInput1, MCTagWithAmount<MCFluid> fluidInput2, int energy, IFluidStack output)

<recipetype:immersiveengineering:refinery>.addRecipe("refine_herbicide", <tag:fluids:minecraft:water> * 10, <tag:fluids:forge:ethanol> * 1, 1000, <fluid:immersiveengineering:herbicide> * 10);
```

#### FluidStack-Rezepte entfernen

The following script will remove all recipes from the Refinery that output exactly 16Mb of Biodesiel.

```zenscript
// <recipetype:immersiveengineering:refinery>.removeRecipe(IFluidStack output)

<recipetype:immersiveengineering:refinery>.removeRecipe(<fluid:immersiveengineering:biodiesel> * 16);
```

#### Flüssigkeitsrezepte entfernen

The following script will remove all recipes from the Refinery that output any amount of Biodesiel.

```zenscript
// <recipetype:immersiveengineering:refinery>.removeRecipe(MCFluid output)

<recipetype:immersiveengineering:refinery>.removeRecipe(<fluid:immersiveengineering:biodiesel>.fluid);
```