# TranslatableContents

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.TranslatableContents;
```


## 已实现的接口
TranslatableContents implements the following interfaces. That means all methods defined in these interfaces are also available in TranslatableContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## 使用方式

:::group{name=getArgs}

Return Type: string[]

```zenscript
// TranslatableContents.getArgs() as string[]

myTranslatableContents.getArgs();
```

:::

:::group{name=getKey}

Return Type: string

```zenscript
// TranslatableContents.getKey() as string

myTranslatableContents.getKey();
```

:::


## 参数

| 名称   | 类型       | 可获得  | 可设置   |
| ---- | -------- | ---- | ----- |
| args | string[] | true | false |
| key  | string   | true | false |

