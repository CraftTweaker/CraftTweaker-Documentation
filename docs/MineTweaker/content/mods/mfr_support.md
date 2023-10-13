# MFR Support
_NOTICE: This page uses 1.7.10 item syntax. Use the proper syntax when working in 1.6.4._

Since 3.0.7, MineFactory Reloaded is now supported. Both the 1.6.4 and 1.7.10 versions are supported, but quite a few features have not been extensively tested so expect bugs! Some machines have their support still under development.

## Contents
* Auto spawner
* Fertilizer
* Fruit Picker
* Grinder
* Harvester
* Mining Laser
* Planter
* Rancher
* RedNet
* Rubber Tree
* Safari Net
* Sludge Boiler
* MFR Biofuel Generator

### Auto spawner
It is possible to add and remove entities to the blacklist if you know the class name:

```zenscript
import mods.mfr.AutoSpawner;

# Substitute with the desired entity class name
AutoSpawner.addBlacklist("mods.natura.entity.NitroCreeper");
AutoSpawner.removeBlacklist("mods.natura.entity.NitroCreeper");
The given entity class name must be a valid living entity. If you want to know which entity names exist in the game, use the /mt entities command to generate the list for you.
```

### Fertilizer
(Unfinished)

### Fruit Picker
(Unfinished)

### Grinder
(Unfinished)

### Harvester
New blocks can be added to the harvester for harvesting:

```zenscript
import mods.mfr.Harvester;

// cherry tree - be aware that logs have a different meta value when oriented differently
// use /mt blockinfo to check the correct meta values for the leaves
Harvester.addHarvestable(<BiomesOPlenty:logs1:*>,"tree");
Harvester.addHarvestable(<BiomesOPlenty:leaves3:9>,"treeLeaf");

// magical tree
Harvester.addHarvestable(<BiomesOPlenty:logs2:*>,"tree");
Harvester.addHarvestable(<BiomesOPlenty:leaves1:10>, "treeLeaf");
```
The second argument is the harvestable type. "tree" will follow the MFR algorithm to cut trees, cutting the leaves first. "treeLeaf" is used for leaves. "normal" is used for single blocks and "column" for plants like cactuses and reeds. "treeFlipped" is supposedly used for trees growing upside down. Natura, anyone?

Normally the harvester will generate the items that are dropped by breaking the blocks. Other items can be dropped by specifying them:

```zenscript
Harvester.addHarvestable(<BiomesOPlenty:logs2:*>, <minecraft:stick> * 4, "tree");
Harvester.addHarvestable(<BiomesOPlenty:logs1:*>, [<minecraft:stick> * 4, <BiomesOPlenty:woodenDoubleSlab1:1> % 25], "tree");
```
If custom items are specified, the default drops are ignored.

### Mining Laser
It is possible to add and remove ores from the mining laser:

```zenscript
import mods.mfr.MiningLaser;

MiningLaser.addOre(<tile.stone>.weight(1000)); # Let's be an asshole and make it generate stone most of the time
MiningLaser.addOre((<tile.stone> * 2).withTag({Display: {Name: "Funny Stone"}}).weight(1000)); # works with stack sizes and tags
MiningLaser.removeOre(<tile.oreIron>); # can use ore dictionary entries, too (will remove all matching items)

MiningLaser.addPreferredOre(1, <tile.oreIron>); # color codes are the same as the wool meta values
MiningLaser.removePreferredOre(1, <tile.oreIron>);
```

To see which laser ores exist, use the /mt mfr laserores command. It also prints the preferred laser ore list to see the laser's color preferences.

### Planter
You can define new plantable items in the planter:

```zenscript
import mods.mfr.Planter;

Planter.addPlantable(<BiomesOPlenty:saplings:10>);
```
(More functions available but unfinished)

### Rancher
(Unfinished)

### RedNet
(Unfinished)

### Rubber Tree
Does your favorite worldgen mod not spawn rubber trees in the right biome? Fix it easily:

```zenscript
import mods.mfr.RubberTree;

RubberTree.addBiome("SuperXLBiome");
RubberTree.removeBiome("SuperXLBiome");
```
To find the list of biome names, use /mt biomes !

### Safari Net
(Unfinished)

### Sludge Boiler
Drops can be added and removed:

```zenscript
import mods.mfr.SludgeBoiler;

SludgeBoiler.addDrop(<minecraft:stick> * 16);
SludgeBoiler.addDrop(<TConstruct:CraftedSoil:4>.weight(10));
SludgeBoiler.removeDrop(<minecraft:dirt:1>);
```
Use /mt mfr sludgedrops to have the list of sludge drops generated in minetweaker.log.

### MFR Biofuel Generator
This machine can't have its acceptable items altered. Instead, anything that works with the planter should work in this generator.