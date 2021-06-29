::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Assembly System

Assembly System recipes are a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implement all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`. There are two separate Assembly recipe types: `<recipetype:pneumaticcraft:assembly_laser>` and `<recipetype:pneumaticcraft:assembly_drill>`.

## 方法

#### 添加配方

Assembly recipes require a single input item and a single output item.

The following script adds a recipe to convert 8 Slimeballs into 1 Magma Cream with the laser:

```zenscript
// <recipetype:pneumaticcraft:assembly_laser>.addRecipe(name as string, IIngredientWithAmount input, IItemStack output)
<recipetype:pneumaticcraft:assembly_laser>.addRecipe("slime_to_magma", <item:minecraft:slimeball> * 8, <item:minecraft:magma_cream>);
```

The following script adds a recipe to convert 1 Glass into 4 Glass Panes with the drill:

```zenscript
// <recipetype:pneumaticcraft:assembly_laser>.addRecipe(name as string, IIngredientWithAmount input, IItemStack output)
<recipetype:pneumaticcraft:assembly_drill>.addRecipe("glass_to_pane", <item:minecraft:glass>, <item:minecraft:glass_pane> * 4);
```

#### Remove Recipes

The following script will remove all Assembly recipes:

```zenscript
<recipetype:pneumaticcraft:assembly_laser>.removeAll();
<recipetype:pneumaticcraft:assembly_drill>.removeAll();
```

