# Thaumcraft 4 Support
## Handlers Supported
The following handlers are supported:

* Arcane Workbench
* Aspects
* Crucible
* Infusion
* Loot
* Warp
* [Research](/modtweaker/thaumcraft_4_support/research)
**NOTE: If you want a recipe that requires a ResearchString to be craftable right away, use one like "ASPECTS" as that does not need to be unlocked.**
**NOTE: Some Arcane Workbench recipes cannot be removed. If you are unsure whether the error is on your side, post an issue on Github.**

Each of these handlers can have recipes added or removed:

```zenscript
//Arcane Workbench
//ResearchString, OutputStack, AspectString, InputArray
mods.thaumcraft.Arcane.addShaped("ASPECTS", <minecraft:stonebrick:3> * 4, "ordo 1", [[<minecraft:stonebrick>, <minecraft:stonebrick>, null], 
                                                                                     [<minecraft:stonebrick>, <minecraft:stonebrick>, null],
                                                                                     [null, null, null]]);
//ResearchString, OutputStack, AspectString, InputArray
mods.thaumcraft.Arcane.addShapeless("VOIDMETAL", <minecraft:ghast_tear>, "aqua 6, terra 6, perditio 6, ordo 6, aer 6, ignis 6", [<minecraft:ender_pearl>, <Thaumcraft:ItemResource:17>]);
//OutputStack
mods.thaumcraft.Arcane.removeRecipe(<Thaumcraft:ItemArcaneDoor>);
 
//Aspects
//InputStack, AspectString
mods.thaumcraft.Aspects.add(<minecraft:saddle>, "motus 4");
//InputStack, AspectString
mods.thaumcraft.Aspects.set(<Thaumcraft:ItemBucketPure>, "aqua 4, metallum 8, vacous 1, sano 2, auram 2");
//InputStack, AspectString
mods.thaumcraft.Aspects.remove(<minecraft:glowstone_dust>, "lux 2");
//EntityString, AspectString
mods.thaumcraft.Aspects.addEntity("Skeleton", "lucrum 2, mortuus 1");
//EntityString, AspectString
mods.thaumcraft.Aspects.setEntity("Arrow", "telum 1");
//EntityString, AspectString
mods.thaumcraft.Aspects.removeEntity("Creeper", "ignis 2");

//Crucible
//ResearchString, OutputStack, InputStack, AspectString
mods.thaumcraft.Crucible.addRecipe("ENTROPICPROCESSING", <minecraft:dirt>, <minecraft:sapling>, "terra 2, perditio 4");
//OutputStack
mods.thaumcraft.Crucible.removeRecipe(<Thaumcraft:ItemResource:2>);

//Infusion
//ResearchString, MainInputStack, InputArray, AspectString, OutputStack, InstabilityAmount
mods.thaumcraft.Infusion.addRecipe("NITOR", <Thaumcraft:ItemResource:1>, [<minecraft:fire_charge>, <Thaumcraft:ItemResource>, <minecraft:flint_and_steel>], "ignis 20, potentia 10, permutatio 12", <minecraft:fire> * 4, 5);
//OutputStack
mods.thaumcraft.Infusion.removeRecipe(<Thaumcraft:ItemAmuletVis:1>);
//ResearchString, EnchantmentID, InstabilityAmount, AspectString, InputArray,
mods.thaumcraft.Infusion.addEnchantment("XPBOOST", 45, 5, "victus 10, cognitio 8, vitreus 6",  [<minecraft:experience_bottle>, <minecraft:experience_bottle>, <minecraft:experience_bottle>, <Thaumcraft:ItemResource:14>]);
//EnchantmentID
mods.thaumcraft.Infusion.removeEnchant(1);

//Loot
//InputStack, Weight
mods.thaumcraft.Loot.addCommonLoot(<Thaumcraft:ItemNugget:16>, 40);
mods.thaumcraft.Loot.addUncommonLoot(<Thaumcraft:ItemNugget:31>, 20);
mods.thaumcraft.Loot.addRareLoot(<Thaumcraft:ItemEldritchObject:3>, 5);
//InputStack
mods.thaumcraft.Loot.removeCommonLoot(<Thaumcraft:ItemBaubleBlanks>);
mods.thaumcraft.Loot.removeUncommonLoot(<Thaumcraft:ItemRingRunic>);
mods.thaumcraft.Loot.removeRareLoot(<minecraft:golden_apple:1>);

//Warp
//ResearchString, WarpAmount
mods.thaumcraft.Warp.addToResearch("BATHSALTS", 5);
//InputStack, WarpAmount
mods.thaumcraft.Warp.addToItem(<Thaumcraft:ItemBathSalts>, 5);
//ResearchString
mods.thaumcraft.Warp.removeFromResearch("BOTTLETAINT");
//InputStack
mods.thaumcraft.Warp.removeFromItem(<Thaumcraft:ItemBottleTaint>);
//Overall Warp Removal
mods.thaumcraft.Warp.removeAll();
mods.thaumcraft.Warp.removeAllResearch();
mods.thaumcraft.Warp.removeAllItems();
```

## Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.
```
/minetweaker aspectList - Outputs a list of Thaumcraft aspects
/minetweaker entities - Outputs a list of strings for Entities
/minetweaker research [CATEGORY] - Outputs a list of strings for Thaumcraft researches
```