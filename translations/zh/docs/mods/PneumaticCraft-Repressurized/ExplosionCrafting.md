::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# 爆炸合成

Explosion Crafting is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

Explosion Crafting recipes require a single input item, a list of output items and an integer (percentage) loss rate.

The following script removes the default recipes converting Iron to Compressed Iron (at 20% loss rate) and adds much less generous replacements:

```zenscript
<recipetype:pneumaticcraft:explosion_crafting>.removeAll();

// <recipetype:pneumaticcraft:explosion_crafting>.addRecipe(name as string, IIngredientWithAmount input, IItemStack[] outputs, int lossRate)
<recipetype:pneumaticcraft:explosion_crafting>.addRecipe("hard_compressed_iron_ingot", <tag:forge:ingots/iron>, [<item:pneumaticcraft:ingot_iron_compressed>], 75);
<recipetype:pneumaticcraft:explosion_crafting>.addRecipe("hard_compressed_iron_block", <tag:forge:storage_blocks/iron>, [<item:pneumaticcraft:compressed_iron_block>], 75);
```

#### Remove Recipes

The following script will remove all Explosion Crafting recipes:

```zenscript
<recipetype:pneumaticcraft:explosion_crafting>.removeAll();
```

