# Wiki 使用

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# 术语
在我们开始之前, 你可能需要了解这些术语：

## ZenGetter
ZenGetter 是一种从特定对象检索信息的方法。 For example [IItemStack](/Vanilla/Items/IItemStack/) has a ZenGetter called "displayName".  
We use the ZenGetter like this:
```zenscript
//语法：对象.zenGetter;
<minecraft:iron_ingot>.displayName;
```

ZenGetter 始终会返回数据。在这个例子中，它会以字符串的形式返回物品名称（"Iron Ingot"）。


## ZenSetter
A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". 我们从条目中知道它的类型是字符串。

我们按照如下方法来使用 ZenSetter：
```zenscript
//语法：对象.zenSetter = 新的值;
<minecraft:iron_ingot>.displayName = "值得信任的金属锭";
```

ZenSetter 不会返回任何内容，因为它用于设置一个值，而不是获取。


## 赋值运算符
如果一个对象的 ZenGetter 和 ZenSetter 名称相同（例：[IItemstack 对象的](/Vanilla/Items/IItemStack/) "displayName"），你除了可以使用`=`以外还可以使用赋值运算符：

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

```zenscript
//由于 ZenGetter 和 ZenSetter 的名称相同，第一条语句和第二天语句是等价的：
//object.zenSetter += 数据;
//object.zenSetter = object.zenGetter + 数据;

<minecraft:iron_ingot>.displayName += "最棒啦";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + "最棒啦";
```