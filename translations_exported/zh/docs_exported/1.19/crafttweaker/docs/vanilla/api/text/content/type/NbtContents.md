# NbtContents

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.NbtContents;
```


## 已实现的接口
NbtContents implements the following interfaces. That means all methods defined in these interfaces are also available in NbtContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## 使用方式

:::group{name=getNbtPath}

Return Type: string

```zenscript
// NbtContents.getNbtPath() as string

myNbtContents.getNbtPath();
```

:::

:::group{name=getSeparator}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// NbtContents.getSeparator() as Component?

myNbtContents.getSeparator();
```

:::

:::group{name=isInterpreting}

Return Type: boolean

```zenscript
// NbtContents.isInterpreting() as boolean

myNbtContents.isInterpreting();
```

:::


## 参数

| 名称             | 类型                                        | 可获得  | 可设置   |
| -------------- | ----------------------------------------- | ---- | ----- |
| isInterpreting | 布尔值                                       | true | false |
| nbtPath        | string                                    | true | false |
| separator      | [Component](/vanilla/api/text/Component)? | true | false |

