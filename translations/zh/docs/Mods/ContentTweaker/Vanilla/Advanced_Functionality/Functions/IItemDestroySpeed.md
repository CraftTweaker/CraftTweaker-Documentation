# IItemDestroySpeed

ItemDestroySpeed 函数可以添加到 [item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 上，并将决定该项目的方块破碎速度。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入mods.contenttweeper.IItemDestroySpeed;`

## 参数

IItemDestroySpeed 是一个具有以下参数的函数：

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) 可变物品stemstack → 该物品。
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockStateformat@@2 = 正在开采的方块的状态。

函数需要返回一个浮点数。