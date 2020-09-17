# Tree Tweaker

Tree Tweaker ist ein CraftTweaker-Addon, das es dir erlaubt, eigene Bäume zur Weltgenerierung hinzuzufügen. Die Form, die Höhe, die Blätter, die Baumstämme, die Frequenz, die Biom und vieles mehr können durch Zenskript angepasst werden. Bäume können modifizierte Blöcke verwenden und in modifizierten Biomen erzeugt werden.

## CraftTweaker Integration

Tree Tweaker Probleme sollten beim [Tree Tweaker Issue-Tracker](https://github.com/superfluke/treetweaker/issues) diskutiert werden.

## Paket

`importieren mods.treetweaker.TreeFactory;`

## Skript-Anforderungen

#### var **newtree = TreeFatory.createTree("newtree");**

erstellen Sie einen neuen Baum namens `newtree`, mit der Variable`newtree`

`var newtree = TreeFactory.createTree("newtree");`

#### newtree.setTreeType("TREE_TYPE");

legt fest, unter welcher Art von Baumform erzeugt werden soll. Akzeptiert OAK, SPRUCE, DSCH, BIRCH, ACACIA und DARK_OAK. `newtree.setTreeType("SPRUCE");`

#### newtree.register();

registrieren Sie den Baum um zu worldgen hinzuzufügen. Achten Sie darauf, diese Methode zuletzt aufzurufen. `newtree.register();`

## Optionale Syntax

#### newtree.setLog("modid:itemid");

festlegen, welches Log verwendet werden soll  
`newtree.setLog("minecraft:wool:3");`

#### newtree.setLeaf("modid:itemid");

setzte, welches Blatt verwendet werden soll  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT);

legt die minimale Höhe des Baumes fest. `newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);

Extra height randomly added when tree generates `treename.setExtraHeight(5);`

#### newtree.setGenFrequency(INT);

Used to control how often a tree generates, successfully spawning at a rate of 1 in N attempts `newtree.setGenFrequency(5)`

#### newtree.setGenVersuch(INT);

Wie viele Bäume sollten während eines erfolgreichen Generationsversuchs zu spawnen versuchen. Can be used to make clusters of trees `newtree.setGenAttempts(1)`

#### newtree.extraThick=boolean;

Macht Baumstamm als 2x2 Dicke generiert. Only valid on LARGE_OAK, PINE, CANOPY, and SPRUCE trees `newtree.extraThick=true;`

#### newtree.setGenBiome("string:string");

Setze das Biom des Spawnens und ignoriere die typischen Biom-Regeln.  
Falls nicht gesetzt, wird der Baum in allen Biomen erzeugt, die normalerweise Bäume enthalten.  
`newtree.setGenBiome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");

Biom-Tagbaum kann in (HOT, SWAMP, SNOWY...), ohne die typischen Biombaum-Regeln . Funktioniert nicht, es sei denn, spawnBiome ist null. `newtree.setGenBiomeByTag("HOT");`

#### newtree.setBaseBlock("modid:itemid")

Welcher Block der Baum generiert werden soll. If not set, will default to blocks valid for vanilla trees (grass, dirt, farmland) `newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT);

Entweder eine einzelne Inte oder ein Array von Ints mit Dimension-IDs, in die der Baum generieren kann. If null, may generate in any dimension `newtree.setDimWhitelist(0);`