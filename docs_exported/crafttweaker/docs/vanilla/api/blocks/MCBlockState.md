# MCBlockState

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.blocks.MCBlockState;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [MCBlock](/vanilla/api/blocks/MCBlock) | true |
| String | false |

## Methods

### getAllowedValuesForProperty

Return Type: stdlib.List&lt;String&gt;

```zenscript
MCBlockState.getAllowedValuesForProperty(name as String) as stdlib.List<String>
```
| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No Description Provided |
### getProperties

Return Type: String[String]

```zenscript
MCBlockState.getProperties() as String[String]
myMCBlockState.getProperties()
```
### getPropertyNames

Return Type: stdlib.List&lt;String&gt;

```zenscript
MCBlockState.getPropertyNames() as stdlib.List<String>
myMCBlockState.getPropertyNames()
```
### getPropertyValue

Return Type: String

```zenscript
MCBlockState.getPropertyValue(name as String) as String
```
| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No Description Provided |
### hasProperty

Return Type: boolean

```zenscript
MCBlockState.hasProperty(name as String) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No Description Provided |
### withProperty

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlockState.withProperty(name as String, value as String) as MCBlockState
```
| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No Description Provided |
| value | String | No Description Provided |

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| block | [MCBlock](/vanilla/api/blocks/MCBlock) | true | false |
| canProvidePower | boolean | true | false |
| commandString | String | true | false |
| hasTileEntity | boolean | true | false |
| isSolid | boolean | true | false |
| isSticky | boolean | true | false |
| lightLevel | int | true | false |
| ticksRandomly | boolean | true | false |

