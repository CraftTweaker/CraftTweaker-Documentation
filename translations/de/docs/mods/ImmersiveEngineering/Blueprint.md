::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Blueprint

Die Blaupause ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Categories

Blaupausen verwenden verschiedene Kategorien, um festzustellen, welche Art von Blaupause benötigt wird. Du kannst folgenden Kommando verwenden:

```
/ct dump ieBlueprintCategories
```

um alle bekannten Kategorien in das CraftTweaker Log zu schreiben.

Allein mit Immersive Engineering wird folgendes im Log geschrieben:

```
- bannerpatterns
- bullet
- components
- electrode
- molds
- specialBullet
```

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein "bullet" Blaupausenrezept hinzu, das ein Stück Redstone und alle Gegenstände aus dem Forge-Juwelen-Tag verwendet und ein Eisenschwert ausgibt.

```zenscript
// <recipetype:immersiveengineering:blueprint>.addRecipe(name as string, blueprintCategory as string, inputs as IIngredient[], output as IItemStack)

<recipetype:immersiveengineering:blueprint>.addRecipe("test_gaps", "bullet", [<item:minecraft:redstone>, <tag:items:forge:gems>], <item:minecraft:iron_sword>);
```

#### Remove Recipes

Das folgende Skript wird alle Blaupausenrezepte entfernen, die eine Kasull-Patrone ausgeben.

```zenscript
// <recipetype:immersiveengineering:blueprint>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:blueprint>.removeRecipe(<item:immersiveengineering:casull>);
```