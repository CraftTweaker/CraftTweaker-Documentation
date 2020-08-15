# 物品栏处理器

物品栏处理程序让您可以访问游戏中的物品。 它只能在游戏中注册项目。 这样添加或移除模组可能会导致问题，因为你在ITem Backet处理器中引用模组的项目。

项目在物品栏处理程序中如此引用：

```zenscript
<modid:itemname>
```

使用 `样式` 作为物品所属的模组的模组， 和 `项目名称` 为项目名称， 建议使用 `/ct hand` 获取正确的项目名称。

一般情况下就是这样：

```zenscript
<item:modid:itemname:meta>
```

With `item` as first entry, it specifically says "This has to be an item!" to CT.  
As you've seen above: Optional.  
Usually you will never need this, unless dealing with several custom bracket handlers.  
`modid` is the modid of the mod that the Item belongs to.  
`itemname` is the name of the item, use /ct hand to get the correct name.  
`meta` is the meta value of the item (e.g. Damage value, types, etc.). 这是一个整数。  
你也可以使用通配符 `*` 来处理所有元值。  
也可选：如果遗漏，则为0。

通常，这将返回一个 IItemStack 对象。  
请参考 [相应的 wiki 条目](/Vanilla/Items/IItemStack/) 以获取更多信息。

## 例子

物品栏处理程序的一个例子是：

```zenscript
//appe
<minecraft:apple>

/coal
<minecraft:coal>
<minecraft:coal:0>

//木炭
<minecraft:coal:1>

//both 、煤和木炭
<minecraft:coal:*>
<item:minecraft:coal:*>
```

这将使您能够访问 `苹果` 项目。