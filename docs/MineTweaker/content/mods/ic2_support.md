# IC2 Support
_NOTICE: This page uses the 1.7.X item names_

_NOTICE: The canner has not yet been tested. Adjust this message if you tried its recipes._

_NOTE: recipes for these machines cannot reload. Once added, you need to restart Minecraft to undo them._

IC2 support enables addition of recipes for IC2 machines.


## Contents
* Crafting with electric items
* Machines
* Recycler blacklist
* Semifluid generator
* Scrapbox

### Crafting with electric items
You can use and discharge IC2 tools in crafting recipes. For example:

```zenscript
val chainsaw = <IC2:itemToolChainsaw>.anyDamage();
recipes.addShapeless(<minecraft:stick> * 3, [<ore:plankWood>, chainsaw.onlyIC2ChargeAtLeast(100).transformIC2Discharge(100)]);
```
### Machines
The following machines are supported:

* Canner
* Compressor
* Extractor
* Macerator
* Metal Former
* Ore Washer
* Recycler
* Thermal Centrifuge
Each of these machines can have new recipes added:
```zenscript
import mods.ic2.Canner;
import mods.ic2.Compressor;
import mods.ic2.Extractor;
import mods.ic2.Macerator;
import mods.ic2.MetalFormer;
import mods.ic2.OreWasher;
import mods.ic2.ThermalCentrifuge;

// TODO: make some proper examples and test them
Canner.addBottleRecipe(output, container, fillIngredient);
Canner.addBottleRecipe(output, container, water);
Canner.addEnrichRecipe(output, input, additiveItem);
Canner.addEnrichRecipe(output, input, additiveLiquid);

Compressor.addRecipe(<minecraft:planks>, <minecraft:stick>);
Extractor.addRecipe(<minecraft:wheat>, <minecraft:bread>);
Macerator.addRecipe(<minecraft:wheat> * 2, <minecraft:bread>);
MetalFormer.addCuttingRecipe(<minecraft:stick> * 3, <minecraft:planks:*>);
MetalFormer.addExtrudingRecipe(<minecraft:stick> * 3, <minecraft:planks:*>);
MetalFormer.addRollingRecipe(<minecraft:stick> * 3, <minecraft:planks:*>);
OreWasher.addRecipe([<minecraft:wheat>, <minecraft:wheat_seeds>], <minecraft:bread>, 1000); // 1000 = water usage
ThermalCentrifuge.addRecipe([<minecraft:wheat>, <minecraft:wheat_seeds>], <minecraft:bread>, 1000); // 1000 = minimum temperature
```

### Recycler blacklist
You can add additional items to the recycler blacklist:
```zenscript
import mods.ic2.Recycler;

Recycler.addBlacklist(<minecraft:planks:*>);
```

### Semifluid generator
It is possible to add new fuels to the semifluid generator:
```zenscript
import mods.ic2.SemiFluidGenerator;

// first argument is the amount of liquid used per cycle, the second the energy production / tick
SemiFluidGenerator.addFluid(<liquid:lava> * 10, 5);
```
#### Scrapbox
You can register new items to the scrapbox:

```zenscript
import mods.ic2.ScrapBox;

ScrapBox.addDrop(<minecraft:emerald>.weight(0.05));
```