# MCTag&LT;T : Object&GT;

A reference to a Tag object. Note that this tag may not exist in the game already, such as when you create new tags. See the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;#exists() Method on whether or not this tag already exists. <p> A tag will be created as soon as you add

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTag;
```


## 已实现的接口
MCTag implements the following interfaces. That means all methods defined in these interfaces are also available in MCTag

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## Casters

| 结果类型                                                                      | 是否隐藏 |
| ------------------------------------------------------------------------- | ---- |
| [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt; | true |
| string                                                                    | true |

## 方法

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
MCTag.add(items as T[]) as void
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
MCTag.add(tag as MCTag<T>) as void
<tag:items:forge:gems>.add(<tag:items:forge:rods>);
```

| 参数  | 类型                                                    | 描述              |
| --- | ----------------------------------------------------- | --------------- |
| tag | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | The tag to add. |


:::

:::group{name=asTagWithAmount}

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTag.asTagWithAmount() as MCTagWithAmount<T>
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
MCTag.exists() as boolean
<tag:items:forge:gems>.exists();
```

:::

:::group{name=getElements}

Return Type: stdlib.List&lt;T&gt;

```zenscript
MCTag.getElements() as stdlib.List<T>
<tag:items:forge:gems>.getElements();
```

:::

:::group{name=getId}

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
MCTag.getId() as MCResourceLocation
<tag:items:forge:gems>.getId();
```

:::

:::group{name=getManager}

Return Type: [TagManager](/vanilla/api/tags/TagManager)&lt;T&gt;

```zenscript
MCTag.getManager() as TagManager<T>
<tag:items:forge:gems>.getManager();
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

| 参数  | 类型                                                    | 描述                      |
| --- | ----------------------------------------------------- | ----------------------- |
| tag | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | No Description Provided |


:::

:::group{name=withAmount}

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTag.withAmount(amount as int) as MCTagWithAmount<T>
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

| 名称       | 类型                                                              | 可获得  | 可设置   |
| -------- | --------------------------------------------------------------- | ---- | ----- |
| elements | stdlib.List&lt;T&gt;                                | true | false |
| exists   | boolean                                                         | true | false |
| id       | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)      | true | false |
| manager  | [TagManager](/vanilla/api/tags/TagManager)&lt;T&gt; | true | false |

