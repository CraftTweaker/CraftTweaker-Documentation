# JEI

CraftTweaker comes with support for JustEnoughItems (JEI).
You can add or hide items in JEI or add a Descriptions page for them.

## Remove
You can either just remove the item from JEI or remove it and all of it's crafting table recipes.

```
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## Add Item
You can also add an [IItemStack](/Vanilla/Items/IItemStack) to JEI to add Items that weren't added or to add an item with NBT-Tag to JEI
```JAVA
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}}));
```

## Add Description
You can add a JEI Description to an [IItemStack](/Vanilla/Items/IItemStack). This is an extra page shown when looking up the item's recipe.
If your strings are too long to be written to one line (or page) it will automatically create line/page breaks.

```Java
//addDescription(IItemStack item, string desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack item, string[] desc);
//each string inside the array will have it's own line(s)
mods.jei.JEI.addDescription(<minecraft:music_disc>,["Never","Gonna","Give","You","Up","Never","Gonna","Let","You","Down"]);
```