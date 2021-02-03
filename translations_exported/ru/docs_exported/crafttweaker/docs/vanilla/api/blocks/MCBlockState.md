# MCBlockState

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlockState;
```


## Утилиты

| Тип результата                         | Является неявным |
| -------------------------------------- | ---------------- |
| [MCBlock](/vanilla/api/blocks/MCBlock) | true             |
| string                                 | false            |

## Methods

### getAllowedValuesForProperty

Return Type: stdlib.List&lt;string&gt;

```zenscript
MCBlockState.getAllowedValuesForProperty(name as string) as stdlib.List<string>
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


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

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


### hasProperty

Return Type: boolean

```zenscript
MCBlockState.hasProperty(name as string) as boolean
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


### withProperty

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlockState.withProperty(name as string, value as string) as MCBlockState
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |
| value    | string | No Description Provided |



## Свойства

| Название        | Тип                                    | Имеет Getter | Имеет Setter |
| --------------- | -------------------------------------- | ------------ | ------------ |
| block           | [MCBlock](/vanilla/api/blocks/MCBlock) | true         | false        |
| canProvidePower | boolean                                | true         | false        |
| commandString   | string                                 | true         | false        |
| hasTileEntity   | boolean                                | true         | false        |
| isSolid         | boolean                                | true         | false        |
| isSticky        | boolean                                | true         | false        |
| lightLevel      | int                                    | true         | false        |
| ticksRandomly   | boolean                                | true         | false        |

