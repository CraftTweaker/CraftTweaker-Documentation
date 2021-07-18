# MCBlock

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlock;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | false       |

## Methods

### canSpawnInBlock

Return Type: boolean

```zenscript
MCBlock.canSpawnInBlock() as boolean
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlock.getDefaultState() as MCBlockState
myMCBlock.getDefaultState();
```

### getValidStates

Return Type: stdlib.List&lt;[MCBlockState](/vanilla/api/blocks/MCBlockState)&gt;

```zenscript
MCBlock.getValidStates() as stdlib.List<MCBlockState>
myMCBlock.getValidStates();
```


## Properties

| 名称             | Type   | Has Getter | Has Setter |
| -------------- | ------ | ---------- | ---------- |
| commandString  | string | true       | false      |
| lootTable      | string | true       | false      |
| translationKey | string | true       | false      |

