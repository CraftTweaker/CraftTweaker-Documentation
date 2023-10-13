# MineTweaker 3

Welcome to the MineTweaker 3 wiki! The aim of MineTweaker is to provide modpack creators, server administrators and map makers with the capability of customizing Minecraft without having to write a custom mod for it. All functionality is provided through an easy-to-use scripting language. (no prior knowledge or programming experience required!)

Using MineTweaker, you can...
* Add and remove any crafting recipe
* Add and remove mod machine recipes for supported mods
* Modify the ore dictionary

Additionally, all scripts are sent from server to client, and thus only need to be stored server-side. They can be altered and reloaded without having to restart anything.

Forge Mods can also execute scripts in MineTweaker. [Mod Script Execution](/mod_script_execution)

## [Comparison with MineTweaker 2](/guide/comparison_with_minetweaker_2)

## Tutorials (1.7.X)
* Lesson 1: [Introduction](/tutorials/1.7.x/introduction.md)
* Lesson 2: [Basic Recipes](/tutorials/1.7.x/basic_recipes.md)
* Lesson 3: [Ore Dictionary](/tutorials/1.7.x/ore_dictionary.md)
* Lesson 4: [Furnace](/tutorials/1.7.x/furnace.md)
* Lesson 5: [Advanced Recipes](/tutorials/1.7.x/advanced_recipes.md)
* Lesson 6: [Item Renaming](/tutorials/1.7.x/item_renaming.md)
* Lesson 7: [Tooltips](/tutorials/1.7.x/tooltips.md)
* Lesson 8: [Loot and seeds](/tutorials/1.7.x/loot.md)
* Lesson 9: [Loops](/tutorials/1.7.x/control_structures.md)
* Lesson 10: [Localization](/tutorials/1.7.x/localization.md)
## Tutorials (1.6.4)
* Lesson 1: [Introduction](/tutorials/1.6.4/introduction.md)
* Lesson 2: [Basic Recipes](/tutorials/1.6.4/basic_recipes.md)
* Lesson 3: [Ore Dictionary](/tutorials/1.6.4/ore_dictionary.md)
* Lesson 4: [Furnace](/tutorials/1.6.4/furnace.md)
* Lesson 5: [Advanced Recipes](/tutorials/1.6.4/advanced_recipes.md)
* Lesson 6: [Item Renaming](/tutorials/1.6.4/item_renaming.md)
* Lesson 7: [Tooltips](/tutorials/1.6.4/tooltips.md)
* Lesson 8: [Loot and seeds](/tutorials/1.6.4/loot.md)
* Lesson 9: [Loops](/tutorials/1.6.4/control_structures.md)
* Lesson 10: [Localization](/tutorials/1.6.4/localization.md)

## Guides
* [Script Introduction](/guides/script_introduction.md)

## Mod Support
* [BetterStorage](/mods/better_storage.md)
* [Blood Magic](/modtweaker/blood_magic_support/blood_magic_support.md)
* [BuildCraft](/mods/buildcraft_support.md)
* [GregTech](/mods/gregtech_support.md)
* [Harvest Festival](/mods/harvest_festival_support.md)
* [IC2](/mods/ic2_support.md)
* [Immersive Engineering](/mods/immersive_engineering_support.md)
* [Magneticraft](/mods/magneticraft_support.md)
* [MineFactory Reloaded](/mods/mfr_support.md)
* [NEI](/mods/nei_support.md)
* [Tinkers' Steelworks](/mods/tsteelworks_support.md)
* [Witching Gadgets](/mods/witching_gadgets_support.md)
* [Additional Support](/mod_tweaker.md)
* [Additional Content](/contenttweaker.md)
## Known Incompatibilities

* CraftingManager isn't compatible - crafting recipes can't load properly upon starting a game. (A manual reload does fix this, though, but it's not very practical)
* Some of the Sync recipes don't get modified properly. A manual reload fixes this. The issue is most likely due to Sync changing its own recipes depending on the server configuration, after MineTweaker did its work.

If you encounter any other incompatibilities, let me know, so I can add them to the list and save modpack authors a lot of time.

Although these mods should be compatible, it is not allowed to change RotaryCraft, ReactorCraft, ElectriCraft and ChromatiCraft recipes, or add recipes that modify the tech tree. The mod author, Reika, has explicitly stated that such modifications are forbidden.

## References

The following wiki pages provide useful references:
* [NBT Tag Formats](/nbt_tag_formats)

## Extending MineTweaker

More than ever before, you can extend MineTweaker with your own functionality.

There are various things you can do:

* You can register global variables with `minetweaker.MineTweakerAPI.registerGlobalSymbol(IZenSymbol)`. Use `MineTweakerAPI.getJavaStaticGetterSymbol` to get a static getter symbol or `MineTweakerAPI.getJavaStaticFieldSymbol` to get a static field symbol.
* You can register bracket handlers with `minetweaker.MineTweakerAPI.registerBracketHandler(IBracketHandler)`. Bracket handlers can make it possible to create your own namespace for items/things in specific mods. See the `minetweaker.mc17.brackets` package for example implementations.
* You can register custom classes with `minetweaker.MineTweakerAPI.registerClass`. Classes must have either a `@ZenClass` or `@ZenExpansion` annotation. Classes can be imported and called (handy for mod machines) and expansions can extend existing types (see `minetweaker.data` for examples, as well as `minetweaker.item.IItemStack`)
* In large projects, you can use the `gradle RegisterZenClassesTask` (see GitHub source in `buildSrc`) to generate a class containing a list of all registerable classes in your project. You can then submit the class name to `MineTweakerAPI` to make it register all those classes. All MineTweaker subproject use this system, so read those gradle build scripts to see how it's done. (or contact me)

## Changelog & Planned Versions

* [Changelog](/changelog)
* [Planned Versions](/planned_versions)

## Credits

Me (Stan Hebben) as mod creator. Thanks to Jaredlll08 for helping me fix bugs and get that 1.8 version going!

All those who reported bugs on GitHub, for otherwise I'd not be able to fix them.

The beta testers: Ravin6666, Peach774, AnodeCathode, Dyonovan, Joshiejack