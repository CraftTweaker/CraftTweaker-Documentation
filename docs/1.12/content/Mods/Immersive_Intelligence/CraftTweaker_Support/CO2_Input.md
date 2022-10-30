::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# CO2 Input

The `CO2Input` package can be used to add TileEntities, including Multiblocks to the Immersive Intelligence CO2 Collector sources list.

## Importing the Package

```zenscript
import mods.immersiveintelligence.CO2Input;
```

## Adding Multiblocks

### Parameters

| Type   | Name      | Required  |
|--------|-----------|-----------|
| String | Classpath | Yes       |
| int    | Time      | Yes       |
| int    | Amount    | Yes       |
| int[]  | Positions | Yes       |

To acquire the in-multiblock position, use the command `/ct nbt` while having an empty hand looking at a desired multiblock.  
Position is the same for all facings and mirroring.  

### Syntax

```zenscript
mods.immersiveintelligence.CO2Input.addMultiblock(String classPath, int time, int amount, int[] pos);
```

### Example

```zenscript
mods.immersiveintelligence.CO2Input.addMultiblock("com.yetanotherimmersiveaddon.blocks.multiblock.ExampleMultiblock", 100, 4824, [1,2,3]);
```

## Adding Tiles
### Parameters

| Type   | Name      | Required |
|--------|-----------|----------|
| String | Classpath | Yes      |
| int    | Time      | Yes      |
| int    | Amount    | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.CO2Input.addTile(String classPath, int time, int amount);
```

### Example

```zenscript
mods.immersiveintelligence.CO2Input.addTile("com.examplemod.tile.ExampleTile", 100, 4824);
```