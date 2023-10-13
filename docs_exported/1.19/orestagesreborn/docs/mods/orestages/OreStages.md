# OreStages

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.orestages.OreStages;
```


## Static Methods

:::group{name=addOreStage}

```zenscript
OreStages.addOreStage(stage as string, block as BlockState)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| stage     | string                                      |
| block     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=addOreStage}

```zenscript
OreStages.addOreStage(stage as string, block as BlockState, explosion as boolean)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| stage     | string                                      |
| block     | [BlockState](/vanilla/api/block/BlockState) |
| explosion | boolean                                     |


:::

:::group{name=addOreStage}



```zenscript
OreStages.addOreStage(stage as string, blockState as BlockState, replaceBlock as BlockState)
```

|  Parameter   |                    Type                     |     Description      |
|--------------|---------------------------------------------|----------------------|
| stage        | string                                      | - The Block Stage    |
| blockState   | [BlockState](/vanilla/api/block/BlockState) | - Block need replace |
| replaceBlock | [BlockState](/vanilla/api/block/BlockState) | - Replaced Block     |


:::

:::group{name=addOreStage}

```zenscript
OreStages.addOreStage(stage as string, blockState as BlockState, replaceBlock as BlockState, explosion as boolean)
```

|  Parameter   |                    Type                     |
|--------------|---------------------------------------------|
| stage        | string                                      |
| blockState   | [BlockState](/vanilla/api/block/BlockState) |
| replaceBlock | [BlockState](/vanilla/api/block/BlockState) |
| explosion    | boolean                                     |


:::

