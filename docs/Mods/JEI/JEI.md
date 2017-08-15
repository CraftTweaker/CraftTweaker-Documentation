# JEI

CraftTweaker comes with support for JustEnoughItems (JEI).
Currently all you can do is hide items from JEI.

## Remove
You can either just remove the item from JEI or remove it and all of it's crafting table recipes.
Careful with Wildcard characters though: Using one for the meta-value does not work!

```
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);

//hides leaves with the metatag 1 to 3
//hide(IItemStack Item, @optional int fromMeta, @optional int toMeta);
mods.jei.JEI.hide(<minecraft:leaves>, 1, 3);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## Add Item
You can also add an IItemStack to JEI to add Items that weren't added or to add an item with NBT-Tag to JEI
```JAVA
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}}));
```

## Add Description
You can add a JEI Description to an IItemStack. This is an extra page shown when looking up the item's recipe.
If your strings are too long to be written to one line (or page) it will automatically create line/page breaks.

```Java
//addDescription(IItemStack item, string desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack item, string[] desc);
//each string inside the array will have it's own line(s)
mods.jei.JEI.addDescription(<minecraft:music_disc>,["Never","Gonna","Give","You","Up","Never","Gonna","Let","You","Down"]);
```