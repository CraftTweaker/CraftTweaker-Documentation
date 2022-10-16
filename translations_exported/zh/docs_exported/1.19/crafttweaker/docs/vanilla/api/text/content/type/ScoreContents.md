# ScoreContents

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.ScoreContents;
```


## 已实现的接口
ScoreContents implements the following interfaces. That means all methods defined in these interfaces are also available in ScoreContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## 使用方式

:::group{name=getName}

Return Type: string

```zenscript
// ScoreContents.getName() as string

myScoreContents.getName();
```

:::

:::group{name=getObjective}

Return Type: string

```zenscript
// ScoreContents.getObjective() as string

myScoreContents.getObjective();
```

:::


## 参数

| 名称        | 类型     | 可获得  | 可设置   |
| --------- | ------ | ---- | ----- |
| name（名称）  | string | true | false |
| objective | string | true | false |

