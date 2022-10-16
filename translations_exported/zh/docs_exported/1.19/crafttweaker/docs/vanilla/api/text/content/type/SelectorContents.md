# SelectorContents

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.SelectorContents;
```


## 已实现的接口
SelectorContents implements the following interfaces. That means all methods defined in these interfaces are also available in SelectorContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## 使用方式

:::group{name=getPattern}

Return Type: string

```zenscript
// SelectorContents.getPattern() as string

mySelectorContents.getPattern();
```

:::

:::group{name=getSeparator}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// SelectorContents.getSeparator() as Component?

mySelectorContents.getSeparator();
```

:::


## 参数

| 名称        | 类型                                        | 可获得  | 可设置   |
| --------- | ----------------------------------------- | ---- | ----- |
| pattern   | string                                    | true | false |
| separator | [Component](/vanilla/api/text/Component)? | true | false |

