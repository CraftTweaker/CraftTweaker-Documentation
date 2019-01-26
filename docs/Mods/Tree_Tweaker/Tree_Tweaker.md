
# Tree Tweaker

Tree Tweaker is a CraftTweaker addon that allows you to add custom trees to world generation. The shape, height, leaves, logs, frequency, biome, and more can all be customized through zenscript. Trees can use modded blocks and be set to generate in modded biomes. 

## Crafttweaker Integration

Tree Tweaker issues hould be discussed at the [Tree Tweaker issue tracker](https://github.com/superfluke/treetweaker/issues).

## Package
`import mods.treetweaker.TreeFactory`

## Script Requirments
#### var **newtree = TreeFatory.createTree("newtree");** 
create a new tree fluke_tree, using the variable`newtree`
`var newtree = TreeFactory.createTree("fluke_tree"); `

#### newtree.setTreeType("TREE_TYPE");
set which type of tree shape to generate as. Accepts OAK, SPRUCE, JUNGLE, BIRCH, ACACIA, and DARK_OAK.
`newtree.setTreeType("SPRUCE");`

#### newtree.register(); 
register tree to add to worldgen.  
`newtree.register();`

## Optional Syntaxes

#### newtree.setLog("modid:id:int");
set what log to use  
`newtree.setLog("minecraft:wool:3");`

#### newtree.setLeaf("modid:id:int");
set what leaf to use  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT); 
set the minimum height of the tree.
`newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);
set the max height of the tree.  
`treename.setExtraHeight(5);`

#### newtree.setGenFrequency(INT); 
set the frequency of tree spawn  
`newtree.setGenFrequency(5)`

#### newtree.setGenAttempts(INT); 
set the attempts of tree spawn  
`newtree.setGenAttempts(1)`

#### newtree.extraThick=boolean;
set the responce of the trees thickness.  
`newtree.extraThick=true;`

#### newtree.setGenBiome("string:string"); 
set the biome of spawning    
`newtree.setGenBiome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");
sets the biomes grouping, accepts any of Forges biome tags.
`newtree.setGenBiomeByTag("HOT");`

#### newtree.setBaseBlock("modid:id")
set the block the tree sits on  
`newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT); 
sets a whitelist for spawning. Can either be a INT or an array of integers through brackets.  
`newtree.setDimWhitelist(0);`
