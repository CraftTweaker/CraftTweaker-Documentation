::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Block Penetration Values

The `BlockPenetration` package can be used to add block and material hardness values to Immersive Intelligence's block
damage system.

## Importing the Package

```zenscript
import mods.immersiveintelligence.BlockPenetration;
```

## Adding Materials

### Parameters

| Type                                    | Name             | Required  |
|-----------------------------------------|------------------|-----------|
| [IMaterial](/Vanilla/Blocks/IMaterial/) | Material         | Yes       |
| int                                     | Integrity        | Yes       |
| int                                     | Density          | Yes       |
| String                                  | Penetration Type | Yes       |
| String                                  | Sound            | Yes       |

Integrity is the amount of hitpoints a block has. Damage is dealt in a similar way it is done to entities.  
Density is the modifier of speed loss after contact with the block. The higher the density, the more a bullet will be
slowed down after penetration.

### Syntax

```zenscript
mods.immersiveintelligence.BlockPenetration.addMaterial(IMaterial material, float integrity, float density, String penetrationType, String sound);
```

### Penetration Types

| Name     | Used for                   |
|----------|----------------------------|
| `metal`  | all the metals             |
| `ground` | dirt, sand, etc.           |
| `solid`  | stone, bricks              |
| `flesh`  | unarmored mobs             |
| `light`  | glass, wool, leaves, cloth |

### Example

```zenscript
mods.immersiveintelligence.BlockPenetration.addMaterial(crafttweaker.blocks.IMaterial.cake(), 1, 1, "light", "immersiveintelligence:siren");
```

## Adding Metals

This function is an easy way to add a metal block and sheetmetal along with their slab variants using an Ore Dictionary name.

### Parameters

| Type   | Name      | Required |
|--------|-----------|----------|
| String | Sound     | Yes      |
| int    | Integrity | Yes      |
| int    | Density   | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.BlockPenetration.addMaterial(String name, float integrity, float density);
```

### Example

```zenscript
mods.immersiveintelligence.BlockPenetration.addMaterial("unobtainium", 1, 1);
```

## Adding Blocks

### Parameters

| Type                                        | Name             | Required |
|---------------------------------------------|------------------|----------|
| [IBlockState](/Vanilla/Blocks/IBlockState/) | BlockState       | Yes      |
| int                                         | Integrity        | Yes      |
| int                                         | Density          | Yes      |
| String                                      | Penetration Type | Yes      |
| String                                      | Sound            | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.BlockPenetration.addMaterial(IBlockState state, float integrity, float density, String penetrationType, String sound);
```

### Example

```zenscript
mods.immersiveintelligence.BlockPenetration.addMaterial(<blockstate:minecraft:log:variant=spruce>, 1, 1, "light", "immersiveintelligence:siren");
```