
# Tree Tweaker

Tree Tweaker is a CraftTweaker addon that allows you to add custom trees to world generation. The shape, height, leaves, logs, frequency, biome, and more can all be customized through zenscript. Trees can use modded blocks and be set to generate in modded biomes. 

## Crafttweaker Integration

Tree Tweaker issues should be discussed at the [Tree Tweaker issue tracker](https://github.com/superfluke/treetweaker/issues).

## Package
`import mods.treetweaker.TreeFactory;`

## Script Requirements
#### var **newtree = TreeFatory.createTree("newtree");** 
create a new tree called `newtree`, using the variable`newtree`

`var newtree = TreeFactory.createTree("newtree"); `

#### newtree.setTreeType("TREE_TYPE");
set which type of tree shape to generate as. Accepts OAK, SPRUCE, JUNGLE, BIRCH, ACACIA, and DARK_OAK.
`newtree.setTreeType("SPRUCE");`

#### newtree.register(); 
register tree to add to worldgen. Make sure to call this method last.
`newtree.register();`

## Optional Syntaxes

#### newtree.setLog("modid:itemid");
set what log to use  
`newtree.setLog("minecraft:wool:3");`

#### newtree.setLeaf("modid:itemid");
set what leaf to use  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT); 
set the minimum height of the tree.
`newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);
Extra height randomly added when tree generates
`treename.setExtraHeight(5);`

#### newtree.setGenFrequency(INT); 
Used to control how often a tree generates, successfully spawning at a rate of 1 in N attempts
`newtree.setGenFrequency(5)`

#### newtree.setGenAttempts(INT); 
How many trees should try to spawn during a successful generation attempt. Can be used to make clusters of trees
`newtree.setGenAttempts(1)`

#### newtree.extraThick=boolean;
Makes tree trunk generate as 2x2 thick. Only valid on LARGE_OAK, PINE, CANOPY, and SPRUCE trees
`newtree.extraThick=true;`

#### newtree.setGenBiome("string:string"); 
Set the biome of spawning, ignoring typical biome rules.  
If not set, the tree will generate in all biomes that normally contain trees.  
`newtree.setGenBiome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");
Biome tag tree can generate in (HOT, SWAMP, SNOWY...), ignoring typical biome tree rules . Will not function unless spawnBiome is null.
`newtree.setGenBiomeByTag("HOT");`

#### newtree.setBaseBlock("modid:itemid")
What block the tree should generate on top of. If not set, will default to blocks valid for vanilla trees (grass, dirt, farmland)
`newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT); 
Either single int or array of ints listing dimension IDs the tree may generate in. If null, may generate in any dimension
`newtree.setDimWhitelist(0);`
