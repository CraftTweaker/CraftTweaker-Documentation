# MCTag&LT;T : Object&GT;

A reference to a Tag object. Note that this tag may not exist in the game already, such as when you create new tags. See the [MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;#exists() Method on whether this tag already exists.

 A tag will be created as soon as you add

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTag;
```


## 已实现的接口
MCTag implements the following interfaces. That means all methods defined in these interfaces are also available in MCTag

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/bracket/CommandStringDisplayable)
- stdlib.Iterable&lt;T&gt;

## Casters

| 结果类型                                                                                                   | 是否隐藏 |
| ------------------------------------------------------------------------------------------------------ | ---- |
| [Many](/vanilla/api/util/Many)&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt; | true |
| string                                                                                                 | true |

## 使用方式

:::group{name=add}

Adds the given items to the tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
MCTag.add(items as stdlib.List<T>) as void
```

| 参数    | 类型                               | 描述                                  |
| ----- | -------------------------------- | ----------------------------------- |
| items | stdlib.List&lt;T&gt; | The items to add. Provided as list. |


:::

:::group{name=add}

Adds the given items to the tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
// MCTag.add(items as T[]) as void

<tag:items:forge:gems>.add(<item:minecraft:bedrock>);
<tag:items:forge:gems>.add(<item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>);
<tag:items:forge:gems>.add([<item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>]);
```

| 参数    | 类型  | 描述                                          |
| ----- | --- | ------------------------------------------- |
| items | T[] | The items to add. Can be one or more items. |


:::

:::group{name=add}

Adds the given tag to this tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
// MCTag.add(tag as MCTag<T>) as void

<tag:items:forge:gems>.add(<tag:items:forge:rods>);
```

| 参数      | 类型                                                   | 描述              |
| ------- | ---------------------------------------------------- | --------------- |
| tag #标签 | [MCTag](/vanilla/api/tag/MCTag)&lt;T&gt; | The tag to add. |


:::

:::group{name=addTags}

Adds the given tags to this tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
// MCTag.addTags(tags as stdlib.List<MCTag<T>>) as void

<tag:items:forge:gems>.addTags(<tag:items:forge:rods>);
```

| 参数   | 类型                                                                                  | 描述               |
| ---- | ----------------------------------------------------------------------------------- | ---------------- |
| tags | stdlib.List&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt; | The tags to add. |


:::

:::group{name=asTagWithAmount}

Return Type: [Many](/vanilla/api/util/Many)&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt;

```zenscript
// MCTag.asTagWithAmount() as Many<MCTag<T>>

<tag:items:forge:gems>.asTagWithAmount();
```

:::

:::group{name=contains}

Return Type: boolean

```zenscript
MCTag.contains(element as T) as boolean
```

| 参数      | 类型 | 描述                      |
| ------- | -- | ----------------------- |
| element | T  | No Description Provided |


:::

:::group{name=exists}

Return Type: boolean

```zenscript
// MCTag.exists() as boolean

<tag:items:forge:gems>.exists();
```

:::

:::group{name=getElements}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// MCTag.getElements() as stdlib.List<T>

<tag:items:forge:gems>.getElements();
```

:::

:::group{name=id}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// MCTag.id() as ResourceLocation

<tag:items:forge:gems>.id();
```

:::

:::group{name=manager}

Return Type: [ITagManager](/vanilla/api/tag/ITagManager)&lt;T&gt;

```zenscript
// MCTag.manager() as ITagManager<T>

<tag:items:forge:gems>.manager();
```

:::

:::group{name=remove}

Return Type: void

```zenscript
MCTag.remove(items as stdlib.List<T>) as void
```

| 参数    | 类型                               | 描述                      |
| ----- | -------------------------------- | ----------------------- |
| items | stdlib.List&lt;T&gt; | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
MCTag.remove(items as T[]) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| items | T[] | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
MCTag.remove(tag as MCTag<T>) as void
```

| 参数      | 类型                                                   | 描述                      |
| ------- | ---------------------------------------------------- | ----------------------- |
| tag #标签 | [MCTag](/vanilla/api/tag/MCTag)&lt;T&gt; | No Description Provided |


:::

:::group{name=withAmount}

Return Type: [Many](/vanilla/api/util/Many)&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt;

```zenscript
MCTag.withAmount(amount as int) as Many<MCTag<T>>
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| amount | int | No Description Provided |


:::


## 运算符

:::group{name=CONTAINS}

```zenscript
element as T in myMCTag
```

:::

:::group{name=EQUALS}

```zenscript
myMCTag == other as MCTag<T>
```

:::

:::group{name=MUL}

```zenscript
myMCTag * amount as int
```

:::


## 参数

| 名称       | 类型                                                               | 可获得  | 可设置   | 描述                      |
| -------- | ---------------------------------------------------------------- | ---- | ----- | ----------------------- |
| elements | stdlib.List&lt;T&gt;                                 | true | false | No Description Provided |
| exists   | 布尔值                                                              | true | false | No Description Provided |
| id       | [资源位置](/vanilla/api/resource/ResourceLocation)                   | true | false | No Description Provided |
| manager  | [ITagManager](/vanilla/api/tag/ITagManager)&lt;T&gt; | true | false | No Description Provided |

