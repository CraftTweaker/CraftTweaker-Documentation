::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Squeezer

Der Squeezer ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Item Rezepte hinzufügen

Das folgende Skript wird ein Rezept hinzufügen, das Erde aus neun Slag und 9000 IF ausgibt.

```zenscript
// <recipetype:immersiveengineering:squeezer>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack itemOutput)

<recipetype:immersiveengineering:squeezer>.addRecipe("slag_off", <item:immersiveengineering:slag> * 9, 5000, <item:minecraft:dirt>);
```

#### Flüssigkeitsrezepte hinzufügen

Das folgende Skript wird ein Rezept hinzufügen, das 250mb Creosote (Fluid) ausgibt aus 8 Kohle und 6000 IF.

```zenscript
// <recipetype:immersiveengineering:squeezer>.addRecipe(string recipePath, IIngredient input, int energy, IFluidStack fluidOutput)

<recipetype:immersiveengineering:squeezer>.addRecipe("the_last_drops", <item:minecraft:coal> * 8, 6000, <fluid:immersiveengineering:creosote> * 250);
```

#### Rezepte für Items und Flüssigkeiten hinzufügen

Das folgende Skript wird ein Rezept hinzufügen, das 2500mb Kreosote (Fluid) und einen Diamanten aus 8 Kohleblöcken und 6000 IF ausgibt.

```zenscript
// <recipetype:immersiveengineering:squeezer>.addRecipe(string recipePath, IIngredient input, int energy, IFluidStack fluidOutput, IItemStack itemOutput)

<recipetype:immersiveengineering:squeezer>.addRecipe("pressure_creates_diamonds", <item:minecraft:coal_block> * 8, 6000, <fluid:immersiveengineering:creosote> * 2500, <item:minecraft:diamond>);
```

#### Item Rezepte entfernen

Das folgende Skript wird alle Rezepte aus dem Squeezer entfernen, die HOP Graphite Staub ausgeben.

```zenscript
//<recipetype:immersiveengineering:squeezer>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:squeezer>.removeRecipe(<item:immersiveengineering:dust_hop_graphite>);
```

#### FluidStack-Rezepte entfernen

Das folgende Skript wird alle Rezepte aus dem Squeezer entfernen, der exakt 60mb Pflanzenöl ausgibt.

```zenscript
// <recipetype:immersiveengineering:squeezer>.removeRecipe(IFluidStack output)

<recipetype:immersiveengineering:squeezer>.removeRecipe(<fluid:immersiveengineering:plantoil> * 60);
```

#### Flüssigkeitsrezepte entfernen

Das folgende Skript wird alle Rezepte aus dem Squeezer entfernen, die eine beliebige Menge Pflanzenöl ausgeben.

```zenscript
// <recipetype:immersiveengineering:squeezer>.removeRecipe(MCFluid output)

<recipetype:immersiveengineering:squeezer>.removeRecipe(<fluid:immersiveengineering:plantoil>.fluid);
```