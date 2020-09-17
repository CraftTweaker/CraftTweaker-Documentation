# Tree Tweaker

Tweaker Arbre est un addon CraftTweaker qui vous permet d'ajouter des arbres personnalisés à la génération du monde. La forme, la hauteur, les feuilles, les rondins, la fréquence, le biome, et plus encore peuvent être personnalisés par zenscript. Les arborescences peuvent utiliser des blocs moddés et être configurées pour générer dans les biomes moddés.

## Intégration de CraftTweaker

Les problèmes de Tweaker de l'arbre devrait être discutés sur le traqueur de problèmes [Tweaker de l'arbre](https://github.com/superfluke/treetweaker/issues).

## Paquet

`Importer mods.treetweaker.TreeFactory;`

## Exigences de script

#### var **newtree = TreeFatory.createTree("newtree");**

créer un nouvel arbre appelé `newtree`, en utilisant la variable`newtree`

`var newtree = TreeFactory.createTree("newtree");`

#### newtree.setTreeType("TREE_TYPE");

définit le type de forme d'arborescence à générer. Accepte OAK, SPRUCE, JUNGLE, BIRCH, ACACIA et DARK_OAK. `newtree.setTreeType("SPRUCE");`

#### newtree.register();

enregistrer l'arborescence à ajouter au worldgen. Assurez-vous d'appeler cette méthode en dernier. `newtree.register();`

## Syntaxes optionnelles

#### newtree.setLog("modid:itemid");

définir le log à utiliser  
`newtree.setLog("minecraft:wool:3");`

#### newtree.setLeaf("modid:itemid");

définir quelle feuille utiliser  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT);

définit la hauteur minimale de l'arbre. `newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);

Extra height randomly added when tree generates `treename.setExtraHeight(5);`

#### newtree.setGenFrequency(INT) ;

Used to control how often a tree generates, successfully spawning at a rate of 1 in N attempts `newtree.setGenFrequency(5)`

#### newtree.setGenTtentts(INT);

Combien d'arbres faudra-t-il essayer d'apparaître lors d'une tentative de génération réussie. Can be used to make clusters of trees `newtree.setGenAttempts(1)`

#### newtree.extraThick=boolean;

Fait générer un tronc d'arbre en 2x2. Only valid on LARGE_OAK, PINE, CANOPY, and SPRUCE trees `newtree.extraThick=true;`

#### newtree.setGenBiome("string:string");

Définit le biome d'apparition, ignorant les règles de biome typiques.  
Si non défini, l'arbre va générer dans tous les biomes qui contiennent normalement des arbres.  
`newtree.setGenBiome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");

L'arbre des balises de biome peut générer dans (HOT, SWAMP, SNOWY...), ignorant les règles typiques de l'arbre biome . Ne fonctionnera pas à moins que le spawnBiome soit null. `newtree.setGenBiomeByTag("HOT") ;`

#### newtree.setBaseBlock("modid:itemid")

Quel bloc l'arborescence devrait générer au dessus. If not set, will default to blocks valid for vanilla trees (grass, dirt, farmland) `newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT);

Soit un int simple ou un tableau d'indices listant la dimension IDs dans l'arborescence. If null, may generate in any dimension `newtree.setDimWhitelist(0);`