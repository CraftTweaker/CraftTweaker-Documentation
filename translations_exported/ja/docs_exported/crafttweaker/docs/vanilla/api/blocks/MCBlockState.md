# MCBlockState

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlockState;
```


## Casters

| Result type                            | Is Implicit |
| -------------------------------------- | ----------- |
| [MCBlock](/vanilla/api/blocks/MCBlock) | true        |
| string                                 | false       |

## Methods

### getAllowedValuesForProperty

Return Type: stdlib.List&lt;string&gt;

```zenscript
MCBlockState.getAllowedValuesForProperty(name as string) as stdlib.List<string>
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


### getProperties

Return Type: string[string]

```zenscript
MCBlockState.getProperties() as string[string]
myMCBlockState.getProperties();
```

### getPropertyNames

Return Type: stdlib.List&lt;string&gt;

```zenscript
MCBlockState.getPropertyNames() as stdlib.List<string>
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Return Type: string

```zenscript
MCBlockState.getPropertyValue(name as string) as string
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


### hasProperty

Return Type: boolean

```zenscript
MCBlockState.hasProperty(name as string) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


### withProperty

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlockState.withProperty(name as string, value as string) as MCBlockState
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |
| value     | string | No Description Provided |



## Properties

| 名称              | Type                                   | Has Getter | Has Setter |
| --------------- | -------------------------------------- | ---------- | ---------- |
| block           | [MCBlock](/vanilla/api/blocks/MCBlock) | true       | false      |
| canProvidePower | boolean型                               | true       | false      |
| commandString   | string                                 | true       | false      |
| hasTileEntity   | boolean型                               | true       | false      |
| isSolid         | boolean型                               | true       | false      |
| isSticky        | boolean型                               | true       | false      |
| lightLevel      | int                                    | true       | false      |
| ticksRandomly   | boolean型                               | true       | false      |

