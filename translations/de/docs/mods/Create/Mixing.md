::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Mixing

Die Mixing Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

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

1) Ein Pfeil ausgeben, wenn ein Diamant und ein Apfel ohne Wärme mit einer Dauer von 100 Ticks gemischt werden. 2) Ziegel ausgeben, wenn ein Diamant, Erde und Lava (Flüssigkeit) mit "heated" Wärme mit einer Dauer von 100 Ticks gemischt werden. 3) Gibt Wasser (Flüssigkeit) aus, wenn Glas, Erde und Lava (Flüssigkeit) mit "superheated" Wärme gemischt werden und eine Dauer von 100 Ticks.

```zenscript
// <recipetype:create:mixing>.addRecipe(String name, String heat, IItemStack output, IIngredient[] itemInputs, @Optional IFluidStack[] fluidInputs, @Optional(100) int duration)

// <recipetype:create:mixing>.addRecipe(String name, String heat, IFluidStack output, IIngredient[] itemInputs, @Optional IFluidStack[] fluidInputs, @Optional(100) int duration)

<recipetype:create:mixing>.addRecipe("mixing_test_1", "none", <item:minecraft:arrow>, [<item:minecraft:diamond>, <item:minecraft:apple>]);
<recipetype:create:mixing>.addRecipe("mixing_test_2", "heated", <item:minecraft:brick>, [<item:minecraft:diamond>, <item:minecraft:dirt>], [<fluid:minecraft:lava>]);
<recipetype:create:mixing>.addRecipe("mixing_test_3", "superheated", <fluid:minecraft:water>, [<item:minecraft:glass>, <item:minecraft:dirt>], [<fluid:minecraft:lava>]);
```

#### Remove Recipes

Das folgende Skript wird alle Mixing-Rezepte entfernen, die Andesite Legierungen ausgeben.

```zenscript
// <recipetype:create:mixing>.removeRecipe(IItemStack output)

<recipetype:create:mixing>.removeRecipe(<item:create:andesite_alloy>);
```



