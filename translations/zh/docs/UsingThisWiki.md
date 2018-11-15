# Wiki 使用

这个 Wiki 用于提供 CraftTweaker 的大纲，介绍 CraftTweaker 中存在的类型，以及它们的用途。  
某些条目会提供一些示例，从而使你能够更好的理解它们。

# 术语

在我们开始之前, 您可能需要了解这些术语：

## ZenGetter

ZenGetter 是一种从特定对象检索信息的方法。 例如 [IItemStack](/Vanilla/Items/IItemStack/) 有一个名为 "显示物品名称（displayName）"  
的 ZenGetter。 我们这样使用 ZenGetter：

    //语法：对象.zenGetter;
    <minecraft:iron_ingot>.displayName;
    

ZenGetter 始终会返回数据。在这个例子中，它会以字符串的形式返回物品名称（"Iron Ingot"）。

## ZenSetter

ZenSetter 的用法几乎与 ZenGetter 相同，唯一不同的是，Zensetter 用于设置数据， ZenGetter用于获取数据。  
我们同样使用 [IItemStack](/Vanilla/Items/IItemStack/) 举例，因为它同样有一个叫 "displayName" 的 ZenSetter。 我们从条目中知道它的类型是字符串。

我们按照如下方法来使用 ZenSetter：

    //语法：对象.zenSetter = 新的值;
    <minecraft:iron_ingot>.displayName = "值得信任的金属锭";
    

ZenSetter 不会返回任何内容，因为它用于设置一个值，而不是获取。

## 赋值运算符

如果一个对象的 ZenGetter 和 ZenSetter 名称相同（例：[IItemstack 对象的](/Vanilla/Items/IItemStack/) "displayName"），你除了可以使用`=`以外还可以使用赋值运算符：

基于具体的数据类型，你可以使用：`&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
来看看它们能够做些什么：

    //由于 ZenGetter 和 ZenSetter 的名称相同，第一条语句和第二天语句是等价的：
    //object.zenSetter += 数据;
    //object.zenSetter = object.zenGetter + 数据;
    
    <minecraft:iron_ingot>.displayName += "最棒啦";
    <minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + "最棒啦";