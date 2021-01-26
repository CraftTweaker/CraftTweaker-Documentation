::requiredMod[Initial Inventory]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/initial-inventory}

# JEITweaker

## Description

This mod adds CraftTweaker support to JEI. CraftTweaker used to support JEI natively, but due to the 1.14 rewrite, the JEI support is being pulled out into it's own mod.


## Package
`mods.jei.JEI`

## Item Hiding

The following script will hide Dirt from JEI when looking at the item list.

```zenscript
// mods.jei.JEI.hideItem(IItemStack stack);

mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Fluid Hiding

The following script will hide Lava from JEI when looking at the item list, this is just the actual Fluid, and not the Bucket Item or other Items that have the Fluid (like a Tank)

```zenscript
// mods.jei.JEI.hideFluid(IFluidStack stack);

mods.jei.JEI.hideFluid(<fluid:minecraft:lava>);
```

## Category Hiding

The following script will hide the Furnace category from JEI. It essentially hiding all the recipes in the category.

```zenscript
// mods.jei.JEI.hideCategory(String category);

mods.jei.JEI.hideCategory("minecraft:furnace");
```

The default categories are:
```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

Mods can add more categories though!

## Add Info

The following script will add any custom information to an Item or a Fluid when looking at their usages in JEI.

### Item Info

The following script will add three lines to the JEI Information tab when looking at a Diamond.

```zenscript
// mods.jei.JEI.addInfo(IItemStack stack, String[] information);

mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["This is the first line!", "This is the second!", "third"]);
```


The code above will produce: ![Commit Box Filled](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


### Fluid Info

Adding Fluid Info is very similar to adding Item Info, the only difference is that the Fluid has a size.

Using `<fluid:minecraft:water>` will show a single layer of Water in JEI. Using `<fluid:minecraft:water> * 1000` will show a full block worth of Water in JEI.

The following script will add three lines to the JEI Information tab when looking at Water and the Water will show as a full block.

```zenscript
// mods.jei.JEI.addInfo(IFluidStack stack, String[] information);

mods.jei.JEI.addInfo(<fluid:minecraft:water> * 1000, ["This is the first line!", "This is the second!", "third"]);
```



