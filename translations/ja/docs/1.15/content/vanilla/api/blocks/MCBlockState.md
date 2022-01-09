# MCBlockState

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Implemented Interfaces
MCBlockState implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### getAllowedValuesForProperty

Returns List<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| name      | 文字列型 | No description provided |


### getProperties

Returns String[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

Returns List<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Returns String

```zenscript
myMCBlockState.getPropertyValue(name as String);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| name      | 文字列型 | No description provided |


### hasProperty

Returns boolean

```zenscript
myMCBlockState.hasProperty(name as String);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| name      | 文字列型 | No description provided |


### withProperty

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| name      | 文字列型 | No description provided |
| value     | 文字列型 | No description provided |



## Properties

| 名称              | Type                                                          | Has Getter | Has Setter |
| --------------- | ------------------------------------------------------------- | ---------- | ---------- |
| block           | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true       | false      |
| canProvidePower | boolean型                                                      | true       | false      |
| commandString   | 文字列型                                                          | true       | false      |
| hasTileEntity   | boolean型                                                      | true       | false      |
| isSolid         | boolean型                                                      | true       | false      |
| isSticky        | boolean型                                                      | true       | false      |
| lightLevel      | int                                                           | true       | false      |
| ticksRandomly   | boolean型                                                      | true       | false      |

## Casters

| Result type                                                   | Is Implicit |
| ------------------------------------------------------------- | ----------- |
| 文字列型                                                          | false       |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true        |

