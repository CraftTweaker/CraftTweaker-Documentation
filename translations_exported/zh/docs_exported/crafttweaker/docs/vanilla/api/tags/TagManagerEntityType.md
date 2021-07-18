# TagManagerEntityType

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.TagManagerEntityType;
```


## 已实现的接口
TagManagerEntityType implements the following interfaces. That means all methods defined in these interfaces are also available in TagManagerEntityType

- [TagManager](/vanilla/api/tags/TagManager)&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt;

## 方法

:::group{name=exists}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Return Type: boolean

```zenscript
TagManagerEntityType.exists(location as MCResourceLocation) as boolean
```

| 参数 | 类型                                                         | 描述                                 |
| -- | ---------------------------------------------------------- | ---------------------------------- |
| 位置 | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The resource location to check for |


:::

:::group{name=exists}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Return Type: boolean

```zenscript
TagManagerEntityType.exists(name as string) as boolean
```

| 参数   | 类型     | 描述                                 |
| ---- | ------ | ---------------------------------- |
| name | string | The resource location to check for |


:::

:::group{name=getAllTags}

Retrieves a list of all tags currently registered.

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
TagManagerEntityType.getAllTags() as stdlib.List<MCTag<T>>
myTagManagerEntityType.getAllTags();
```

:::

:::group{name=getTag}

Retrieves a tag by its name. Will also be called by the BEP. <p> Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
TagManagerEntityType.getTag(location as MCResourceLocation) as MCTag<T>
```

| 参数 | 类型                                                         | 描述                               |
| -- | ---------------------------------------------------------- | -------------------------------- |
| 位置 | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The Resource location of the tag |


:::

:::group{name=getTag}

Retrieves a tag by its name. Will also be called by the BEP. <p> Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
TagManagerEntityType.getTag(name as string) as MCTag<T>
```

| 参数   | 类型     | 描述                               |
| ---- | ------ | -------------------------------- |
| name | string | The Resource location of the tag |


:::


## 运算符

:::group{name=CONTAINS}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

```zenscript
name as string in myTagManagerEntityType
```

:::


## 参数

| 名称  | 类型                                                                                   | 可获得  | 可设置   |
| --- | ------------------------------------------------------------------------------------ | ---- | ----- |
| all | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt; | true | false |

