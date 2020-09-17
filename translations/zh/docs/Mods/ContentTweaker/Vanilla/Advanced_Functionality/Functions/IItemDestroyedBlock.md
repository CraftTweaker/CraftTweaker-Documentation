# IItemDestroyedBlock

ItemDestroyedBlock功能可以添加到 [项目](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 中，并且每当你试图破坏一个方块时都会运行。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.IItemDestroyedBlock；`

## 参数

ItemDestroyedBlock是一个具有以下参数的函数：

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) stack → 该物品。
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world -> 这个世界发生于
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockStateformat@@2 = 正在开采的方块的状态。
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos = 这种情况发生在哪里？
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) entity → 谁/什么样的地雷？

函数需要返回一个 boole, 如果blockBreaking 进程成功, 则为 `true` , 如果它已经成功, `false` 如果它是这样的。