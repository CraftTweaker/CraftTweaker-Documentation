# Tree Tweaker

Tree Tweaker is a CraftTweaker add on that allows you to add custom trees to world generation. The shape, height, leaves, logs, frequency, biome, and more can all be customized through zen script. Trees can use modded blocks and be set to generate in modded biomes. 

## Crafttweaker Integration

Tree Tweaker issues hould be discussed at the [Tree Tweaker issue tracker](https://github.com/superfluke/treetweaker/issues).

## Package
`import mods.treetweaker.TreeFactory`

## Script Requirments
#### var **string = TreeFatory.createTree("string");** 
create a new tree fluke_tree.
`var newtree = TreeFactory.createTree("fluke_tree"); `

#### string.setTreeType("STRING");
set which type of tree shape to generate as. Accepts OAK, SPRUCE, JUNGLE, BIRCH, ACACIA, and DARK_OAK.
`newtree.setTreeType("SPRUCE");`

#### string.register(); 
register tree to add to worldgen.  
`newtree.register();`

## Optional Syntaxes

#### string.setLog("string:string:int");
set what log to use  
`newtree.setLog("minecraft:wool:3");`

####string.setLeaf("string:string:numerator");
set what leaf to use  
`newtree.setLeaf("minecraft:melon_block");`

#### string.setMinHeight(INT); set the minimum height of the tree.
`newtree.setMinHeight(5);`

####string.setExtraHeight(INT);
set the max height of the tree.  
`newtree.setExtraHeight(5);`

####string.setGenFrequency(INT); 
set the frequency of tree spawn  
`newtree.setGenFrequency(5)`

####string.setGenAttempts(INT); 
set the attempts of tree spawn  
`newtree.setGenAttempts(1)`

####string.extraThick=boolean;
set the responce of the trees thickness.  
`newtree.extraThick=true;`

####string.setGenBiome("string:string"); 
set the biome of spawning    
`newtree.setGenBiome("minecraft:plains")`

####string.setGenBiomeByTag("STRING");
sets the biomes grouping, accepts any of Forges biome tags.
`newtree.setGenBiomeByTag("HOT");`

####string.setBaseBlock("string:string")** 
set the block the tree sits on  
`newtree.setBaseBlock("minecraft:dirt");`

####string.setDimWhitelist(INT); 
sets a whitelist for spawning. Can either be a INT or an array of integers through brackets.  
`newtree.setDimWhitelist(0);`
