# 最小Blocks 工具

## 获取特定的迷你方块

这是一个 util 函数，用于为特定的 MiniBlock 获取一个 IIngredient ，这样您就可以避免穿戴NBT 了。

* 类型参数指定 "siding", "moulding" 或 "corn"
* 父块是小块从中获得纹理的块，因为这个子块是一个 IIngrendient 物品，如修复词典也起作用。

```zenscript
mods.betterwithmods.MiniBlocks.GetMiniBlock(String type, IIngredient parentBlock)


/example
//gets 所有侧面都有木板基础
mods.betterwithmods.MiniBlocks.MiniBlocks.getMiniBlock("siding", <ore:plankWood>);
```