::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Coke Oven

Der Coke Oven ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird dem Coke Oven ein Rezept hinzufügen, dass nach 100 Ticks einen behandelten Stick und 1mb Creosote (Fluid) ausgibt, beim Hinzufügen von einem Stick.
```zenscript
// <recipetype:immersiveengineering:coke_oven>.addRecipe(string recipePath, IIngredient ingredient, int time, IItemStack output, @Optional(0) int creosoteProduced)

<recipetype:immersiveengineering:coke_oven>.addRecipe("burn_a_stick", <item:minecraft:stick>, 100, <item:immersiveengineering:stick_treated>, 1);
```

#### Remove Recipes

Das folgende Skript wird alle Rezepte aus dem Coke Oven entfernen, die Coal Coke ausgeben.

```zenscript
// <recipetype:immersiveengineering:coke_oven>.removeRecipe(IItemStack fuel)

<recipetype:immersiveengineering:coke_oven>.removeRecipe(<item:immersiveengineering:coal_coke>);
```