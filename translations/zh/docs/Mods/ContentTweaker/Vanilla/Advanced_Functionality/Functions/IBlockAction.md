# IBlockAction

IBlockAction 函数可以添加到 [块](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) 和 根据您添加的位置，方块放置或损坏时会触发。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweakerIBlockAction。`

## 参数

IBlockAction 是一个具有以下参数的函数：

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world -> 该方块处于世界中
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) 位置 -> Block的位置
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) state-> 包含关于方块的信息，例如方块本身及其元数据

函数没有返回值！

## 例子

```zenscript
zsBlock.onBlockBreak = 函数 (world, blockPos, blockState))
    print("I WAS PLACED!!!");
}
```