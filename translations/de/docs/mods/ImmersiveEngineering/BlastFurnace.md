::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Blast Furnace

Der Blast Furnace ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`. Zusammen mit dem Blast Furnace kommt der Blast Furnace Brennstoff, das ist auch vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager's verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das Kohle ausgibt, und einen Faden (als Slag), nach 1000 Ticks, wenn ein Gegenstand aus dem Wolltag dem Blast Furnace gegeben wird.

```zenscript
// <recipetype:immersiveengineering:blast_furnace>.addRecipe(string recipePath, IIngredient ingredient, int time, IItemStack output, @Optional(<item:minecraft:air>) IItemStack slag)

<recipetype:immersiveengineering:blast_furnace>.addRecipe("wool_to_charcoal", <tag:items:minecraft:wool>, 1000, <item:minecraft:charcoal>, <item:minecraft:string>);
```

#### Add Fuel

Das folgende Skript fügt dem Blast Furnace einen Brennstoff hinzu, der ein goldenes Schwert mit dem Namen "Sword of the Sungod" nimmt und für 100000 Ticks verbrennt.

```zenscript
// <recipetype:immersiveengineering:blast_furnace_fuel>.addFuel(string name, IIngredient fuel, int burnTime)

<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("the_sungods_sword_can_burn", <item:minecraft:golden_sword>.withTag({display: {Name: "{\"text\":\"Sword of the Sungod\"}" as string}}), 100000);
```

#### Remove Recipes

The following script will remove all recipes from the Blast Furnace that outputs Charcoal.

```zenscript
// <recipetype:immersiveengineering:blast_furnace>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:minecraft:charcoal>);
```

#### Brennstoffe entfernen

The following script will remove Charcoal as a Fuel for the Blast Furnace.

```zenscript
// <recipetype:immersiveengineering:blast_furnace_fuel>.removeRecipe(IItemStack fuel)

<recipetype:immersiveengineering:blast_furnace_fuel>.removeFuel(<item:minecraft:charcoal>);
```