# JEITweaker

## Description

This mod adds CraftTweaker support to JEI. CraftTweaker used to support JEI natively, but due to the 1.14 rewrite, the JEI support is being pulled out into it's own mod.


## Package
`mods.jei.JEI`

## Item Hiding

This will hide the given item in JEI. The example given will hide the dirt block in the JEI menu.

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Category Hiding

This will hide the given category in JEI. The example given will hide the furnace category when looking up recipes in JEI.

```zenscript
//mods.jei.JEI.hideCategory(String category);
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

This will add information to the Item that will be shown when looking at usages in JEI!.

This exact example will add 3 lines of information to the Diamond item.

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] information);
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["This is the first line!", "This is the second!", "third"]);
```

The code above will produce: ![Commit Box Filled](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


