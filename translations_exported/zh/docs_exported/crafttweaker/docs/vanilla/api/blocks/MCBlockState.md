# MCBlockState #MC方块状态

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlockState;
```


## Casters

| 结果类型                                         | 是否隐藏  |
| -------------------------------------------- | ----- |
| [MCBlock #MC方块](/vanilla/api/blocks/MCBlock) | true  |
| string                                       | false |

## 方法

:::group{name=getAllowedValuesForProperty}

Return Type: stdlib.List&lt;string&gt;

```zenscript
MCBlockState.getAllowedValuesForProperty(name as string) as stdlib.List<string>
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=getProperties}

Return Type: string[string]

```zenscript
MCBlockState.getProperties() as string[string]
myMCBlockState.getProperties();
```

:::

:::group{name=getPropertyNames}

Return Type: stdlib.List&lt;string&gt;

```zenscript
MCBlockState.getPropertyNames() as stdlib.List<string>
myMCBlockState.getPropertyNames();
```

:::

:::group{name=getPropertyValue}

Return Type: string

```zenscript
MCBlockState.getPropertyValue(name as string) as string
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=hasProperty}

Return Type: boolean

```zenscript
MCBlockState.hasProperty(name as string) as boolean
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=withProperty}

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlockState.withProperty(name as string, value as string) as MCBlockState
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| name  | string | No Description Provided |
| value | string | No Description Provided |


:::


## 参数

| 名称                     | 类型                                           | 可获得  | 可设置   |
| ---------------------- | -------------------------------------------- | ---- | ----- |
| block                  | [MCBlock #MC方块](/vanilla/api/blocks/MCBlock) | true | false |
| canProvidePower        | boolean                                      | true | false |
| commandString          | string                                       | true | false |
| hasTileEntity #具有方块实体  | boolean                                      | true | false |
| isSolid #是否为固体         | boolean                                      | true | false |
| isSticky #是否具有粘性       | boolean                                      | true | false |
| lightLevel             | int                                          | true | false |
| ticksRandomly #是否具有随机刻 | boolean                                      | true | false |

