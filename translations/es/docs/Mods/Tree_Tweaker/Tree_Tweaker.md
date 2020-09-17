# Tree Tweaker

Tweaker de árbol es un complemento de CraftTweaker que te permite añadir árboles personalizados a la generación del mundo. La forma, la altura, las hojas, los registros, la frecuencia, el bioma y más se pueden personalizar a través de zenscript. Los árboles pueden usar bloques movidos y ser configurados para generar en biomas movidos.

## Integración de CraftTweaker

Los problemas del árbol Tweaker deben ser discutidos en el [rastreador de incidencias del árbol Tweaker](https://github.com/superfluke/treetweaker/issues).

## Paquete

`importar mods.treetweaker.TreeFactory;`

## Requisitos de script

#### var **newtree = TreeFatory.createTree("newtree");**

crear un nuevo árbol llamado `nuevo árbol`usando la variable`nuevo árbol`

`var newtree = TreeFactory.createTree("newtree");`

#### newtree.setTreeType("TREE_TYPE");

establecer el tipo de forma de árbol al que generar. Acepta OAK, SPRUCE, JUNGLE, BIRCH, ACACIA y DARK_OAK. `newtree.setTreeType("SPRUCE");`

#### newtree.register();

registra árbol para añadir a worldgen. Asegúrese de llamar a este método últimamente. `newtree.register();`

## Sintaxis opcional

#### newtree.setLog("modid:itemid");

set what log to use  
`newtree.setLog("minecraft:wool:3");`

#### newtree.setLeaf("modid:itemid");

set what leaf to use  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT);

establecer la altura mínima del árbol. `newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);

Extra height randomly added when tree generates `treename.setExtraHeight(5);`

#### newtree.setGenFrequency(INT);

Used to control how often a tree generates, successfully spawning at a rate of 1 in N attempts `newtree.setGenFrequency(5)`

#### newtree.setGenAttempts(INT);

Cuántos árboles deben tratar de aparecer durante un intento de generación exitosa. Can be used to make clusters of trees `newtree.setGenAttempts(1)`

#### newtree.extraThick=boolean;

Hace que el tronco de árbol genere un grosor de 2x2. Only valid on LARGE_OAK, PINE, CANOPY, and SPRUCE trees `newtree.extraThick=true;`

#### newtree.setGenBiome("string:string");

Establecer el bioma del desove, ignorando las reglas típicas del bioma.  
Si no se establece, el árbol generará en todos los biomas que normalmente contienen árboles.  
`newtree.setGenome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");

Biome tag tree puede generar en (HOT, SWAMP, SNOWY...), ignorando las reglas típicas de los árboles de bioma . No funcionará a menos que spawnBiome sea nulo. `newtree.setGenBiomeByTag("HOT");`

#### newtree.setBaseBlock("modid:itemid")

Qué bloque debe generar el árbol en la parte superior. If not set, will default to blocks valid for vanilla trees (grass, dirt, farmland) `newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT);

Un solo int o un array de ints listando IDs de dimensiones en los que el árbol puede generar. If null, may generate in any dimension `newtree.setDimWhitelist(0);`