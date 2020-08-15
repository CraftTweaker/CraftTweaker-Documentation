# 重命名中

总是阅读“胸部”令人烦恼，难道不是吗？

这就是为什么可以重命名物品。

## 更改显示名称

这也许是实现不同项目或方块名称的最简单方法。 您将 `项目` 重命名为 `新名称`：

```zenscript
item.displayname = newname;

/示例
<minecraft:chest>.displayName = "Storage Box Deluxe";
```

`项目` 是 [IItemStack](/Vanilla/Items/IItemStack/)。  
`新名称` 是一个字符串。

## 更改本地化

如果某些moded的库存仍然显示项目的旧名称而不是新的名称, 你需要更改本地化。 您可以阅读 `游戏` 条条目上的意思。

```zenscript
game.setLocalization(languageCode,unlocalizedName,newname);

game.setLocalization("tile.chest.name","StorageBox Deluxe")
```

`语言代码` 是一个字符串和可选的。 如果您省略它，它将应用本地化，而不论客户端的设置语言。  
`解锁的名称` 是一个字符串。  
`新名称` 是一个字符串。