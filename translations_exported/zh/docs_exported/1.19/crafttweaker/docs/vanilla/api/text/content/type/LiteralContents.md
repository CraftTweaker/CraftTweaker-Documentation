# LiteralContents

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.LiteralContents;
```


## Extending Record

LiteralContents extends Record. That means all methods available in Record are also available in LiteralContents

## 已实现的接口
LiteralContents implements the following interfaces. That means all methods defined in these interfaces are also available in LiteralContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## 使用方式

:::group{name=text}

Return Type: string

```zenscript
// LiteralContents.text() as string

myLiteralContents.text();
```

:::


## 参数

| 名称 | 类型     | 可获得  | 可设置   |
| -- | ------ | ---- | ----- |
| 文本 | string | true | false |

