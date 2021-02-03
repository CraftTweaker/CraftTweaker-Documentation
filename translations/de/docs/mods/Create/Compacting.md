::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Compacting

Die Compacting Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

### Wärmetypen

Create hat drei verschiedene "Wärme"-Typen, die in Rezepten verwendet werden können. Das wären wie folgt:

```plaintext
none
heated
superheated
```

Du kannst jeden dieser Wärmewerte verwenden, wenn das Rezept "Hitze" erfordert

#### Rezept mit Itemausgabe hinzufügen

The following script will add recipes that will:

1) Ein Pfeil ausgeben, wenn ein Diamant und ein Apfel ohne Wärme Kompakt gemacht wird mit einer Dauer von 200 Ticks. 2) Ausgabe eines Ziegels, wenn ein Diamant, Erde und Lava (Flüssigkeit) mit "heated" Wärme und einer Dauer von 1000 Ticks komprimiert werden. 3) Gibt Papier aus, wenn Glas, Schmutz und Lava (Flüssigkeit) mit "superheated" Wärme und einer Dauer von 100 Ticks komprimiert werden.

```zenscript
// <recipetype:create:compacting>.addRecipe(String name, String heat, IItemStack output, IIngredient[] itemInputs, @Optional IFluidStack[] fluidInputs, @Optional(100) int duration)

<recipetype:create:compacting>.addRecipe("compacting_test_1", "none", <item:minecraft:arrow>, [<item:minecraft:diamond>, <item:minecraft:apple>]. [], 200);
<recipetype:create:compacting>.addRecipe("compacting_test_2", "heated", <item:minecraft:brick>, [<item:minecraft:diamond>, <item:minecraft:dirt>], [<fluid:minecraft:lava>], 1000);
<recipetype:create:compacting>.addRecipe("compacting_test_3", "superheated", <item:minecraft:paper>, [<item:minecraft:glass>, <item:minecraft:dirt>], [<fluid:minecraft:lava>]);
```

#### Rezept mit Flüssigkeitsausgabe hinzufügen

Das folgende Skript fügt Rezepte hinzu, die Wasser (Flüssigkeit) ausgeben, wenn Papier, ein Stick und Lava mit einer Dauer von 500 Ticks komprimiert werden.

```zenscript
// <recipetype:create:compacting>.addRecipe(String name, String heat, IItemStack output, IIngredient[] itemInputs, @Optional IFluidStack[] fluidInputs, @Optional(100) int duration)

<recipetype:create:compacting>.addRecipe("compacting_test_4", "superheated", <fluid:minecraft:water>, [<item:minecraft:paper>, <item:minecraft:stick>], [<fluid:minecraft:lava>], 500);
```

#### Remove Recipes for Items

Das folgende Skript wird alle kompatiblen Rezepte entfernen, die eine Schokoladentafel ausgeben.

```zenscript
// <recipetype:create:compacting>.removeRecipe(IItemStack output)

<recipetype:create:compacting>.removeRecipe(<item:create:bar_of_chocolate>);
```


#### Remove Recipes for Fluids

The follow script will remove all Compacting recipes that output Water (Fluid)

```zenscript
// <recipetype:create:compacting>.removeRecipe(IFluidStack output)

<recipetype:create:compacting>.removeRecipe(<fluid:minecraft:water>);
```