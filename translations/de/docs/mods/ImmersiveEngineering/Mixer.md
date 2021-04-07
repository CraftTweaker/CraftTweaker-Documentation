::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Mixer

Der Mixer ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird ein Rezept hinzufügen, das 8000mb Kreosote (Fluid) ausgibt, wenn ein Eichensetzling, 4 Knochenmehl, ein Eimer mit Kreosote und 8000mb Wasser (Fluid) dem Mixer hinzugefügt wird.

```zenscript
// <recipetype:immersiveengineering:mixer>.addRecipe(String recipePath, MCTag<MCFluid> fluidInput , IIngredientWithAmount[] IIngredientinputItems, int energy, MCFluid output, int amount)

<recipetype:immersiveengineering:mixer>.addRecipe("grow_creosote_oil", <tag:fluids:minecraft:water>, [<item:minecraft:oak_sapling>, <item:minecraft:bone_meal> * 4, <item:immersiveengineering:creosote_bucket>], 5000, <fluid:immersiveengineering:creosote>, 8000);
```

#### FluidStack-Rezepte entfernen

Das folgende Skript wird alle Rezepte aus dem Mixer entfernen, die exakt 500mb Beton ausgeben (Fluid).

```zenscript
// <recipetype:immersiveengineering:mixer>.removeRecipe(IFluidStack output)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete> * 500);
```

#### Flüssigkeitsrezepte entfernen

Das folgende Skript wird alle Rezepte aus dem Mixer entfernen, die eine beliebige Menge Beton ausgeben (Fluid).

```zenscript
// <recipetype:immersiveengineering:mixer>.removeRecipe(MCFluid output)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete>.fluid);
```

#### Trank Rezepte entfernen

Trank Rezepte sind Hardcodes, der einzige Weg, um sie zu entfernen, ist sie alle auf einmal zu entfernen, und so wird's gemacht.

```zenscript
<recipetype:immersiveengineering:mixer>.removeByName("immersiveengineering:mixer_potion_list");
```