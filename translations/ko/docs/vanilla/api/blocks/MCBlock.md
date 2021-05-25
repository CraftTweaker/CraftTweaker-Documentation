# MCBlock

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.block.MCBlock
```

## Methods
### canSpawnInBlock

Returns boolean

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

[crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)를 반환

```zenscript
myMCBlock.getDefaultState();
```


## Properties

| 이름             | Type   | Has Getter | Has Setter |
| -------------- | ------ | ---------- | ---------- |
| lootTable      | String | true       | false      |
| translationKey | String | true       | false      |

## Casters

| 반환 자료형 | 암묵적   |
| ------ | ----- |
| String | false |

