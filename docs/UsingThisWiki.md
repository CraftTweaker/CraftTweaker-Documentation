# Wiki 使用

这个 Wiki 能够给你提供一个 CraftTweaker 的大纲，介绍 CraftTweaker 中存在的类型，以及它们的用途。
同时在某些条目也提供了一些示例，从而能够更好的理解它们。

# 术语说明

在开始之前，我们需要了解一些会用到的术语：

## ZenGetter

ZenGetter 是一种获取当前对象信息的方法。例如 [IItemStack](/Vanilla/Items/IItemStack) 拥有一个 ZenGetter 方法，名叫“displayName”（显示名称）。
ZenGetter 方法的使用示例如下：
``` js
//object.zenGetter;
<minecraft:iron_ingot>.displayName;
```

ZenGetter 方法总是会返回数据，在上面的例子中，将会返回一个物品名称字符串（“铁锭”）。

## ZenSetter

ZenSetter 和 ZenGetter 使用几乎一致，唯一不同之处在于 ZenSetter 用于设定数据，ZenGetter 则是返回数据。
接下来我们还是用刚刚提到过的 [IItemStack](/Vanilla/Items/IItemStack) 举例子，它同样拥有一个 ZenSetter 方法叫做“displayName”。我们知道这个条目是字符串类型。

我们按照如下格式来使用 ZenSetter 方法：
``` js
//object.zenSetter = 新的值;
<minecraft:iron_ingot>.displayName = "我是铁锭";
```

ZenSetter 方法什么也不返回，因为它只是设定数据，而不是返回数据。


## 赋值运算符

如果一个物品同时拥有 ZenGetter 和 ZenSetter 方法，并且方法名相同（比如刚刚的 [IItemStack](/Vanilla/Items/IItemStack) 的“displayName”方法），除了 `=` 之外，还有很多赋值运算符可用：

基于具体的数据类型，你可以使用：`&=`、`|=`、`+=`、`-=`、`*=`、`/=`、`%=`、`~=`。

来看看它们能够做些什么：

``` js
//因为同时拥有同名 ZenGetter 和 ZenSetter 方法，下列所有两个语句都是等价的：
//object.zenSetter += 数据;
//object.zenSetter = object.zenGetter + 数据;

<minecraft:iron_ingot>.displayName += "最棒啦";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + "最棒啦";
```
