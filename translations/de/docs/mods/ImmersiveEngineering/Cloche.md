::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Garden Cloche

Die Garden Cloche ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`. Zusammen mit der Garden Cloche kommt der Dünger, das ist auch vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager's verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Render-Typen

Render-Typen werden verwendet, um festzulegen, wie der BlockState aussehen soll, wenn das Rezept in der Garden Cloche angebaut wird.

Der Standardtyp ist "generisch".

Folgende Typen sind gültig:

| Name     | Beschreibung                                                                             |
| -------- | ---------------------------------------------------------------------------------------- |
| crop     | Kann für jede 1-Block-Ernte mit einer Alterseigenschaft wie z.B. Weizen verwendet werden |
| stacking | Kann für Stapeln von Pflanzen wie Zuckerrohr oder Kaktus verwendet werden                |
| stem     | Kann für Stammpflanzen wie Melon oder Kürbis verwendet werden                            |
| generic  | Kann für jeden Block verwendet werden, so dass er größer wird, wie Pilze                 |

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt der Garden Cloche ein Rezept hinzu, das einen Eichensetzling als Sameneingabe verwendet, der Boden, der benötigt wird, ist Erde, es wird 100 Ticks brauchen, um zu wachsen und wird einen Apple, einen Eichensetzling und fünf Eichenholz ausgeben. Das Rezept wird einen Eichensetzling rendern, während es wächst, und es verwendet den "generischen" Render-Typ.

```zenscript
// <recipetype:immersiveengineering:cloche>.addRecipe(string name, IIngredient seed, IIngredient soil, int time, IItemStack[] outputs, MCBlock renderBlock, @Optional("generic") string renderType)

<recipetype:immersiveengineering:cloche>.addRecipe("bonsai_oak", <item:minecraft:oak_sapling>, <item:minecraft:dirt>, 100, [<item:minecraft:apple>, <item:minecraft:oak_sapling>, <item:minecraft:oak_wood> * 5], <blockstate:minecraft:oak_sapling>.block, "generic");

```

#### Dünger hinzufügen

Das folgende Skript fügt einen Dünger mit einem Wachstumsmodifikator von 6.0 hinzu, der jedes Element aus dem Forge-Schwefelstaub-Tag verwendet.

```zenscript
// <recipetype:immersiveengineering:fertilizer>.addFertilizer(name as string, fertilizer as IIngredient, growthModifier as float)

<recipetype:immersiveengineering:fertilizer>.addFertilizer("sulfur_grow", <tag:items:forge:dusts/sulfur>, 6.0F);
```

#### Remove Recipes

The following script will remove all recipes from the Cloche that outputs Melon.

```zenscript
// <recipetype:immersiveengineering:cloche>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:cloche>.removeRecipe(<item:minecraft:melon>);
```

#### Dünger entfernen

The following script will remove Bone Meal as a Fertilizer.

```zenscript
// <recipetype:immersiveengineering:fertilizer>.removeFertilizer(fertilizer as IItemStack)

<recipetype:immersiveengineering:fertilizer>.removeFertilizer(<item:minecraft:bone_meal>);
```