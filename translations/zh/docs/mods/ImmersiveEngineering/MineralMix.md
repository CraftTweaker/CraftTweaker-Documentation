::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Mineral Mix

Mineral Mix is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### Add Mix

The following script will add a mix that will output White Wool 50% of the time, Orange Wool 25% of the time, and Magenta Wool 100% of the time. The mix has a weight of 50, and a fail change of 0.5. The mix will only be available in the Overworld and will show as White Wool in Samples.

```zenscript
// <recipetype:immersiveengineering:mineral_mix>.addRecipe(string recipePath, MCWeightedItemStack[] outputs, int weight, float failChance, ResourceLocation[] dimensions, Block background)

<recipetype:immersiveengineering:mineral_mix>.addRecipe("sheep_mix", [<item:minecraft:white_wool> % 50, <item:minecraft:orange_wool> % 25, <item:minecraft:magenta_wool>], 50, 0.5, [<resource:minecraft:overworld>], <block:minecraft:white_wool>);
```

#### Remove Recipes

The follow script will remove a Mix with the name `"immersiveengineering:mineral/ancient_debris"`.

```zenscript
// <recipetype:immersiveengineering:mineral_mix>.removeByName(string name)

<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/ancient_debris");
```