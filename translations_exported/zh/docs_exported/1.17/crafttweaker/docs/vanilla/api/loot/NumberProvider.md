# NumberProvider

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.NumberProvider;
```


## Static Methods

:::group{name=between}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.between(min as float, max as float) as NumberProvider
```

| 参数  | 类型    | 描述                      |
| --- | ----- | ----------------------- |
| min | float | No Description Provided |
| max | float | No Description Provided |


:::

:::group{name=binomial}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.binomial(n as int, p as int) as NumberProvider
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| n  | int | No Description Provided |
| p  | int | No Description Provided |


:::

:::group{name=exactly}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.exactly(value as float) as NumberProvider
```

| 参数    | 类型    | 描述                      |
| ----- | ----- | ----------------------- |
| value | float | No Description Provided |


:::

:::group{name=scoreboard}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.scoreboard(target as EntityTarget, score as string, scale as float) as NumberProvider
```

| 参数     | 类型                                             | 描述                      | 可选    | DefaultValue |
| ------ | ---------------------------------------------- | ----------------------- | ----- | ------------ |
| target | [EntityTarget](/vanilla/api/loot/EntityTarget) | No Description Provided | false |              |
| score  | string                                         | No Description Provided | false |              |
| scale  | float                                          | No Description Provided | true  | 1.0          |


:::

