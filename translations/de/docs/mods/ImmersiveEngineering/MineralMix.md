::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Mineral Mix

Der Mineral Mix ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager's verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Mix hinzufügen

Das folgende Skript fügt einen Mix hinzu, der mit einer Chance von 50% Weiße Wolle, einer Chance von 25% Orangene Wolle und einer Chance von 100% Magenta Wolle ausgibt. Der Mix hat eine Gewichtung von 50 und einen Fehlschlag von 0,5. Der Mix wird nur in der Overworld verfügbar sein und wird Weiße Wolle als Beispiel zeigen.

```zenscript
// <recipetype:immersiveengineering:mineral_mix>.addRecipe(string recipePath, MCWeightedItemStack[] outputs, int weight, float failChance, ResourceLocation[] dimensions, Block background)

<recipetype:immersiveengineering:mineral_mix>.addRecipe("sheep_mix", [<item:minecraft:white_wool> % 50, <item:minecraft:orange_wool> % 25, <item:minecraft:magenta_wool>], 50, 0.5, [<resource:minecraft:overworld>], <block:minecraft:white_wool>);
```

#### Remove Recipes

The following script will remove a Mix with the name `"immersiveengineering:mineral/ancient_debris"`.

```zenscript
// <recipetype:immersiveengineering:mineral_mix>.removeByName(string name)

<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/ancient_debris");
```