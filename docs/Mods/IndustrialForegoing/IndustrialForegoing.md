# Industrial Foregoing

Industrial Foregoing's BioReactor, Laser Drill and Sludge Refiner Crafttweaker support.

### Item Weight

The `ItemWeight` is a number that represents the chance of an item to get selected. For example:

| Item  | Weight | Chance % |
|-------|--------|----------|
| Stone | 99     | 99%      |
| Dirt  | 1      | 1%       |

| Item  | Weight | Chance % |
|-------|--------|----------|
| Stone | 2      | 66%      |
| Dirt  | 1      | 33%      |

ItemChance% = (ItemWeight/TotalWeight)*100

### Bioreactor
```
import mods.industrialforegoing.BioReactor;
   
BioReactor.add(<minecraft:diamond>);
BioReactor.remove(<minecraft:diamond>);
```

### Laser Drill
```
import mods.industrialforegoing.LaserDrill;
  
LaserDrill.add(1, <minecraft:stone>, 10); // Arguments: (LaserItemMetadata, ItemStack, ItemWeight)
LaserDrill.remove(<minecraft:stone>);
```

### Sludge Refiner
```
import mods.industrialforegoing.SludgeRefiner;
  
SludgeRefiner.add(<minecraft:wheat_seeds>, 10); //Arguments: (ItemStack, ItemWeight)
SludgeRefiner.remove(<minecraft:wheat_seeds>);

```