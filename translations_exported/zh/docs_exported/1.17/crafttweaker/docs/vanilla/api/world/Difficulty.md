# Difficulty

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Difficulty;
```


## Enum Constants

Difficulty is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
Difficulty.PEACEFUL
Difficulty.EASY
Difficulty.NORMAL
Difficulty.HARD
```
## 使用方式

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Difficulty.getDisplayName() as Component

myDifficulty.getDisplayName();
```

:::

:::group{name=getId}

Return Type: int

```zenscript
// Difficulty.getId() as int

myDifficulty.getId();
```

:::

:::group{name=getKey}

Return Type: string

```zenscript
// Difficulty.getKey() as string

myDifficulty.getKey();
```

:::


## 参数

| 名称          | 类型                                       | 可获得  | 可设置   | 描述                      |
| ----------- | ---------------------------------------- | ---- | ----- | ----------------------- |
| displayName | [Component](/vanilla/api/text/Component) | true | false | No Description Provided |
| id          | int                                      | true | false | No Description Provided |
| key         | string                                   | true | false | No Description Provided |

