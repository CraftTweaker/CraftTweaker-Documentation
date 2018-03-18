# 物品处理器

物品处理器允许你访问游戏中的物品。它只能用于得到注册过的物品，所以如果你有访问模组中的物品，增加或者移除此模组时可能会出错。

物品可以用以下方式引用它们：

```
<modid:itemname>
```

`modid`指的是物品所属的模组名称，`itemname`指物品名称。推荐使用`/ct hand`获取正确的物品名称。

通常也用以下方式引用：
```
<item:modid:itemname:meta>
```
`item`作为首项，作用是告诉CraftTweaker它是一个物品。
就像以上所写的，它是可选的。
基本上你不会用到它，除非你需要处理几个自定义尖括号处理器。
`modid`是物品所属模组的名称。 
`itemname`是物品的名称，使用/ct hand获取正确的名称。
`meta`是物品的附加值（例：损耗的耐久、种类等等）。类型为整数。
你也可以使用通配符`*`以表示所有附加值。 
它也是可选的：不填写则为0。

一般的，它会返回IItemStack对象。
更对信息请参考[所属的wiki页面](/Vanilla/Items/IItemStack)。

## 例子

一个物品处理器的例子可以是：

```
//苹果
<minecraft:apple>

//煤炭
<minecraft:coal>
<minecraft:coal:0>

//木炭
<minecraft:coal:1>

//都有，即煤炭和木炭
<minecraft:coal:*>
<item:minecraft:coal:*>
```

这将允许你访问`苹果`物品。
