::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Crushing

Die Crushing Mechanik ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten mit einer Chance von 10% ausgibt, in der ein Stück Erde mit einer Dauer von 100 Ticks zerkleinert wird.

```zenscript
// <recipetype:create:crushing>.addRecipe(String name, MCWeightedItemStack[] output, IIngredient input, @Optional(100) int duration)

<recipetype:create:crushing>.addRecipe("hopes_and_dreams", [<item:minecraft:diamond> % 10], <item:minecraft:dirt>);
```

#### Remove Recipes

Das folgende Skript wird alle Crushing Rezepte entfernen, die ein zerkleinertes Zinc Ore ausgeben.

```zenscript
// <recipetype:create:crushing>.removeRecipe(IItemStack output)

<recipetype:create:crushing>.removeRecipe(<item:create:crushed_zinc_ore>);
```