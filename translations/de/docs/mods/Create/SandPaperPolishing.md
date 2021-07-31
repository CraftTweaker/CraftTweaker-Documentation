::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Sand Paper Polishing

Die Sand Paper Polishing Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten ausgibt, wenn ein Glasstück mit einer Dauer von 100 Ticks poliert wird.

```zenscript
// <recipetype:create:sandpaper_polishing>.addRecipe(String name, IItemStack output, IIngredient input, @Optional(100) int duration)

<recipetype:create:sandpaper_polishing>.addRecipe("sand_paper_polishing_test", <item:minecraft:diamond>, <item:minecraft:glass>);
```

#### Remove Recipes

The following script will remove all Sand Paper Polishing recipes that output Polished Rose Quartz.

```zenscript
// <recipetype:create:pressing>.removeRecipe(IItemStack output)

<recipetype:create:sandpaper_polishing>.removeRecipe(<item:create:polished_rose_quartz>);
```


