# `标签`

`Tag` 是存储在实际游戏中的对象表示. You can only access this data from within the [`tags` loader](/Mods/Boson/Loaders/Tags/). For more information regarding tags and how to obtain them, refer to [this page](/Mods/Boson/Tags/Concept/).

## 班级详细信息
该类位于 `net.thesilkmin.mc.boson.zen.tags` 包内，生成 `net.thesilkminer.mc.boson.zen.tag.Tag` 其完全合格的名称用于导入。

## 创建一个新实例
参考 [括号处理文档](/Mods/Boson/Tags/BracketHandler/)。

## 参数
`标签` 提供了对特定属性的只读访问权限，如下表所示：

| 属性名称 | 返回值类型                                  | 描述           |
| ---- | -------------------------------------- | ------------ |
| `名称` | [`名称SpacedString`](/Mods/Boson/Names/) | 唯一标识此标签的名称   |
| `类型` | [`TagType`](/Mods/Boson/Tags/TagType/) | 此标签的类型       |
| `元素` | `[T]` (其中 `T` 是一个通用类型)                 | 当前标签中的元素只读列表 |

## 方法

### 添加配方
将元素添加到标签可以通过三重方法完成，这三重方法的签名在代码段中：

```zenscript
function add(elements... as NameSpacedString) as void;
function addAll(elements as any []) as void;
function addFrom(as Tag) as void;
```

`添加` 是一种所谓的“vararg 方法”， 表示它可以接受尽可能多的参数，只要它们都是 的同一类型。 。 `名称SpacedString`s. 这允许您指定您想要添加到 标签的元素的注册表名称，标签实现本身将尝试将给定名称转换到实际对象。

`添加所有`，另一方面，接受一个数组元素并尝试将它们全部添加到给定的标签中。 该数组 被标记为 `[` ，因为这个方法输入缺少一般支持。 但是，试图将不兼容的 元素添加到标签 (例如) 将方块添加到一个只用于项目的标签将会导致一个没有推出的操作。

`添加` 通过标签引用将标签的所有内容添加到对方。 表示对 的任何修改都会发生在第一个标签上。 请注意，这个操作只有在标签类型匹配时才能成功，否则将执行 无推送操作。

以下是示例清单：

```zenscript
valable 标签 = <tag-items:forge:ingots/iron>;

# 通过注册表名称
标签添加元素。 dd("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# 通过其实际实例
标签添加元素。 ddAll(<buildcraft:iron_ingot>as IItemStack[]);

# 通过标签引用添加另一个标签
tag.addFrom(<tag-items:customtag:other_iron_ingots>);
```

### 替换
可以完全替换标签的元素，这意味着所有内容都是首先清除的， 然后给定的元素是 添加到标签内容。 这也是通过三重方法完成的，其签名是在代码段中的

```zenscript
无效的函数替换 (元素... as NameSpacedString);
函数替换 All(元素和任何[]) 无效;
函数替换 (作为标签) 作为无效;
```

`替换` 是一种所谓的“vararg 方法”， 表示它可以接受尽可能多的参数，只要它们都是相同类型的 。 `名称SpacedString`s. This allows you to specify the registry name of the element you want to use to replace the tag's contents and the tag implementation itself will attempt to convert the given name to the actual object.

`替换所有`。 接受一个元素数组，并尝试将给定标签的内容替换为 数组。 The array is marked as `any[]` due to a lack of generic support on this method input. 然而，试图将 传递不兼容的元素到标签 (例如) 块到一个只用于项目的标签，将会导致一个不适用的操作 被执行。

`替换给定标签的内容为` 表示对第二个标签进行的任何修改 也会发生在第一个标签上。 请注意，此操作只有在标签类型匹配的情况下才能成功， 否则将执行一个不执行的操作。

以下是示例清单：

```zenscript
valable 标签 = <tag-items:forge:ingots/iron>;

# 替换通过注册表名称
标签的元素。 eplace("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# 通过实际实例
标签替换元素。 eplacAll([<buildcraft:iron_ingot>] 作为 IItemStack[])；

# 通过标签引用替换另一个标签
tag.replacewith(<tag-items:customtag:other_iron_ingots>)；
```

### 移除
从标签中删除元素可以通过三重方法完成，这些方法的签名是在代码段中的，如下所示：

```zenscript
function remove(元素... as NameSpacedString) as void;
function removeAll(元素as any []) as void;
function removeFrom(as Tag) as void;
```

`删除` 是一种所谓的“vararg 方法”， 表示它可以接受尽可能多的参数，只要它们都是相同类型的 。 `名称SpacedString`s. 这允许您指定您想要从标签中删除 元素的注册表名，而标签实现本身将尝试将给定名称转换为实际对象。

`移除所有`，另一方面接受一个数组元素，并尝试从给定标签中移除所有元素。 由于缺少对此方法输入的通用支持， 将数组标为 `]` 然而，试图从标签中删除 个不兼容的元素 (例如) 从一个仅限项目标签中移除方块将会导致一个不推翻操作 进行。

`删除` 从第一个标签的标签引用列表中删除第二个标签。 因此，这将删除第二个标签从第一个标签列表中携带的 个物品。 虽然第二个标签不会被清除其内容 请注意，这个操作只有在标签类型匹配时才能成功，否则将执行一个不执行的操作。

以下是示例清单：

```zenscript
valable 标签 = <tag-items:forge:ingots/iron>;

# 通过注册表名称
标签移除元素。 emove("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# 通过其实际实例
标签移除元素。 emoveAll([<buildcraft:iron_ingot>] 作为 IItemStack[]);

# 移除一个标签引用
tag.remveFrom(<tag-items:customtag:other_iron_ingots>);
```

### 正在清除
您也可以通过单一方法清除标签内容。 这将删除所有元素和所有标签引用存储在标签中的 并相当于用空内容替换标签。 这可以通过一个拥有以下 个签名的方法来完成：

```zenscript
函数 clear() 为无效；
```

下面是一个示例：

```zenscript
<tag-items:forge:ingots>.clear();
```

## 额外支持
标签还为某些ZenScript 功能提供额外支持。

### 查询中
使用 `有` 语法可以查询标签是否包含某个对象。 标签实际上可以是 被视为元素集：

```zenscript
val iscontained = TAG have ELEMENT;
```

`TAG` 代表要查询的标签实例。 `ELEMENT` 代表您可能想要向 查询的元素实例。检查它是否包含在标签中。

注意标签支持查询任何内容(它实际上接受 `任意`) 使用一个不在 中存储在标签中的类型的元素没有效果，只会将评估短路到 `false`

### 迭代中
标签也支持循环的迭代，使用</code> 循环使用正常的 `。 这种方式取消了通过调用 <code>元素` 查询 元素的必要性，从而导致了更清洁的代码。

由于标签实际上是设定的, 迭代顺序不会被保存, 并且可能会在 迭代器的不同运行之间有所不同。 为此原因，只支持单元素迭代器(即您在迭代时不能同时请求一个迭代索引 )。

要使用的语法如下：

```zenscript
适用于 TAG 中的 VARNAME 介于
}
```

`VARNAME` 代表将在每个循环中更新的变量名称。 `TAG` 是要循环的标签实例。

## 操作员过载
标签还为正常的 ZenScript 操作员提供了一些超载，从而可以轻松地完成某些操作，同时使用 个较少字符。 每个区段都有某些操作员超负载的表格，具有相应的 含义。 在所有表格中， `TAG` 代表目标标签实例 `ARGx` 表示 *x*- 应提供 的参数。

### Unary 运营商
Unary 运营商是适用于标签本身且无需参数的运营商。

| 运算符 | 语句     | 方法等于        | 注   |
| --- | ------ | ----------- | --- |
| `-` | `-TAG` | `clear #清除` | \- |

### 二进制运算符
二进制操作员是在标签和一个参数之间应用的非固定操作员。 运营商按优先级排序排列在这里 (更高表示它将先应用)。

**IMPORTANT**: 除非另有说明 所有运算符 **都变换了** 传递给过载的标签，这意味着他们更改了他们的内容 请考虑以下示例：

```zenscript
valable tag = <tag-items:forge:ingots>;
tag & [<minecraft:iron_ingot>] as IItemStack[]；
```

在此代码片段末尾， `标签` 的内容将根据操作员规则而改变。 这不是 **** 创建一个新标签，它也不返回原始标签的值。 以下代码片段实际上无效：

```zenscript
val tags = <tag-items:forge:ingots>;
# 未作废: WILL CAUSE Compilation 错误
tag = & [<minecraft:iron_ingot>] as IItemStack[];
```

| 运算符     | 参数类型                                   | 语句               | 等价方法         | 注                      |
| ------- | -------------------------------------- | ---------------- | ------------ | ---------------------- |
| `+`     | `标签`                                   | `TAG + ARG1`     | `添加自`        | \-                    |
| `+`     | `任何[……]`                               | `TAG + ARG1`     | `addAll`     | 数组类型必须与标签内容相同          |
| `+`     | [`名称SpacedString`](/Mods/Boson/Names/) | `TAG + ARG1`     | `添加`         | 超负载仅接受一个参数             |
| `+`     | `任意一个`                                 | `TAG + ARG1`     | `addAll`     | 单个元素的短语：与数组版本相同的规则     |
| `~`     | `标签`                                   | `TAG ~ ARG1`     | `添加自`        | \-                    |
| `~`     | `任何[……]`                               | `TAG ~ ARG1`     | `addAll`     | 数组类型必须与标签内容相同          |
| `~`     | [`名称SpacedString`](/Mods/Boson/Names/) | `TAG ~ ARG1`     | `添加`         | 超负载仅接受一个参数             |
| `~`     | `任意一个`                                 | `TAG ~ ARG1`     | `addAll`     | 单个元素的短语：与数组版本相同的规则     |
| `&` | `标签`                                   | `TAG & ARG1` | `添加自`        | \-                    |
| `&` | `任何[……]`                               | `TAG & ARG1` | `addAll`     | 数组类型必须与标签内容相同          |
| `&` | [`名称SpacedString`](/Mods/Boson/Names/) | `TAG & ARG1` | `添加`         | 超负载仅接受一个参数             |
| `&` | `任意一个`                                 | `TAG & ARG1` | `addAll`     | 单个元素的短语：与数组版本相同的规则     |
| `-`     | `标签`                                   | `TAG - ARG1`     | `移除来自`       | \-                    |
| `-`     | `任何[……]`                               | `TAG - ARG1`     | `全部移除`       | 数组类型必须与标签内容相同          |
| `-`     | [`名称SpacedString`](/Mods/Boson/Names/) | `TAG - ARG1`     | `remove #移除` | 超负载仅接受一个参数             |
| `-`     | `任意一个`                                 | `TAG - ARG1`     | `全部移除`       | 单个元素的短语：与数组版本相同的规则     |
| `==`    | `标签`                                   | `TAG == ARG1`    | \-          | 作为平等检查，匹配内容；不会变换 `TAG` |
| `()`    | \-                                    | `TAG()`          | `元素`         | \-                    |
