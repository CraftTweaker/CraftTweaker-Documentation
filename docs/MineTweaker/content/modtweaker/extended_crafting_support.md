# Extended Crafting Support
## Handlers Supported
The following handlers are supported:

* Extended Workbench
Each of these handlers can have recipes added or removed:
```zenscript
//Extended Workbench
//OutputStack, InputArray
mods.extendedworkbench.addShaped(<minecraft:nether_star>, [[<minecraft:skull:1>, <minecraft:skull:1>, <minecraft:skull:1>],
                                                           [<minecraft:soul_sand>, <minecraft:soul_sand>, <minecraft:soul_sand>],
                                                           [null, <minecraft:soul_sand>, null],
                                                           [<minecraft:diamond_sword>, <minecraft:bow>, <minecraft:golden_apple:1>],
                                                           [<minecraft:potion:8233>, <minecraft:arrow>, <minecraft:potion:8229>],
                                                           [null, <minecraft:potion:8226>, null]]);
//OutputStack, InputArray
mods.extendedworkbench.addShapeless(<minecraft:command_block>, [<minecraft:diamond_block>, <minecraft:emerald_block>, <minecraft:dye:0>,
                                                                <minecraft:dye:1>, <minecraft:dye:2>, <minecraft:dye:3>,
                                                                <minecraft:dye:4>, <minecraft:dye:5>, <minecraft:dye:6>,
                                                                <minecraft:dye:7>, <minecraft:dye:8>, <minecraft:dye:9>,
                                                                <minecraft:dye:10>, <minecraft:dye:11>, <minecraft:dye:12>,
                                                                <minecraft:dye:13>, <minecraft:dye:14>, <minecraft:dye:15>]);
//OutputStack
mods.extendedworkbench.removeRecipe(<extendedWorkbench:flintAndSteel>);
```