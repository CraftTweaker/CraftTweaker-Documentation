# MCBlockState

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlockState;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [MCBlock](/vanilla/api/blocks/MCBlock) | true |
| string | false |

## Methods

:::group{name=getAllowedValuesForProperty}

Return Type: stdlib.List&lt;string&gt;

```zenscript
MCBlockState.getAllowedValuesForProperty(name as string) as stdlib.List<string>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=getProperties}

Return Type: string[string]

```zenscript
// MCBlockState.getProperties() as string[string]

myMCBlockState.getProperties();
```

:::

:::group{name=getPropertyNames}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// MCBlockState.getPropertyNames() as stdlib.List<string>

myMCBlockState.getPropertyNames();
```

:::

:::group{name=getPropertyValue}

Return Type: string

```zenscript
MCBlockState.getPropertyValue(name as string) as string
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=hasProperty}

Return Type: boolean

```zenscript
MCBlockState.hasProperty(name as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=withProperty}

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlockState.withProperty(name as string, value as string) as MCBlockState
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| value | string | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| block | [MCBlock](/vanilla/api/blocks/MCBlock) | true | false | No Description Provided |
| canProvidePower | boolean | true | false | No Description Provided |
| commandString | string | true | false | No Description Provided |
| harvestLevel | int | true | false | No Description Provided |
| harvestTool | [ToolType](/vanilla/api/tool/ToolType) | true | false | No Description Provided |
| hasTileEntity | boolean | true | false | No Description Provided |
| isSolid | boolean | true | false | No Description Provided |
| isSticky | boolean | true | false | No Description Provided |
| lightLevel | int | true | false | No Description Provided |
| ticksRandomly | boolean | true | false | No Description Provided |

