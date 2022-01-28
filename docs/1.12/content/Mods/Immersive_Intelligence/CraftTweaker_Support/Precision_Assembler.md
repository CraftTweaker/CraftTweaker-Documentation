::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Precision Assembler

The `PrecisionAssembler` package can be used to add/remove recipes to/from the II Precision Assembler.

## Importing the Package

```zenscript
import mods.immersiveintelligence.PrecisionAssembler;
```

## Adding Recipes

### Parameters

| Type                                                  | Name             | Required |
|-------------------------------------------------------|------------------|----------|
| [IItemStack](/Vanilla/Items/IItemStack/)              | Main Output      | Yes      |
| [IItemStack](/Vanilla/Items/IItemStack/)              | Secondary Output | Yes      |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] | Inputs           | Yes      |
| String[]                                              | Tool Names       | Yes      |
| String[]                                              | Tool Animations  | Yes      |
| int                                                   | Energy           | Yes      |
| float                                                 | Time Multiplier  | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.PrecisionAssembler.addRecipe(IItemStack itemOutput, IItemStack trash, IIngredient[] itemInputs, String[] tools, String[] animations, int energy, float timeMultiplier);
```

### Animations

| Name   | Description                                               | Example                |
|--------|-----------------------------------------------------------|------------------------|
| `pick` | makes the tool pick an item from the slot (inserter only) | `inserter pick first`  |
| `work` | Works™ on the slot (plays animation)                      | `solderer work second` |
| `drop` | drops the picked item onto the slot (inserter only)       | `inserter drop main`   |

Animations are defined using short 3-word command strings, i.e. `inserter pick first` will make the inserter pick the
item from the first (left) slot.  
Animations are persistent - an item picked by a tool remains picked until it is dropped.  
A single animation consists of 3 parts - the in, work and out.

### Tools/Default Action Time

| Name       | Action Time (ticks) |
|------------|---------------------|
| `buzzsaw`  | 140                 |
| `drill`    | 140                 |
| `inserter` | 60                  |
| `solderer` | 80                  |
| `welder`   | 160                 |
| `hammer`   | 40                  |

Note the work/pick/drop times are dependent on the tool itself. Tool use durations can be modified using the II config
file.  
The total recipe time is a sum of all action times for each animation multiplied by the `timeMultiplier` parameter.

### Slots

| Name     | Position |
|----------|----------|
| `main`   | Center   |
| `first`  | Left     |
| `second` | Middle   |
| `third`  | Right    |

### Example

```zenscript
mods.immersiveintelligence.PrecisionAssembler.addRecipe(<minecraft:diamond>,<minecraft:stone>,[<ore:oreGold>, <ore:oreIron>*2], ["drill","hammer","inserter"], ["inserter pick first","drill work main","inserter drop main","hammer work main"], 8000, 1);
```

## Removing Recipes

### Parameters

| Type                                     | Name   | Required  |
|------------------------------------------|--------|-----------|
| [IItemStack](/Vanilla/Items/IItemStack/) | Output | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.PrecisionAssembler.removeRecipe(IItemStack output);
```

### Example

```zenscript
mods.immersiveintelligence.PrecisionAssembler.removeRecipe(<minecraft:diamond>);
```