::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# Jei Categories

Woo! Custom categories! This JEITweaker feature allows you, the crafttweaker user to create categories, with catalysts and recipes.
¿Why would anyone want that? Well, some packmakers like to add their own mechanics. However, these are generally not documented to the general user.

Examples of this may include adding a new enchanting system, which requires a custom structure, or a special in world crafting, which requires you to place an oak log block in the world and break it into planks using a couple of defined tools. This entire feature allows the creation of JEI-like GUIs that show the process of getting the item when a player checks the recipes for it.

It is however important to note that these GUIs are premade and simple: They cover a couple of use cases but they aren't perfect, and in the event that you wish to do something more complex, you might need to create your own mod. Now, onto the ZenMethods!

*This feature was added by Silk, which means nobody really knows how it works - For context, see [LootModifiers](/vanilla/api/loot/LootManager)*

What this part of JEITweaker adds is:

- The ability to create custom categories
- The ability to add recipes to said categories
- The ability to add animations and your icons to categories, recipes and catalysts, from existing items and a texture supplied through a ResourceLocation.