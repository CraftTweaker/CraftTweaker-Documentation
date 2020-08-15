# IBlockDropHandler

IBlockDropHandler 函数用于在 [Vanilla 工厂](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) 创建的 [块块高级掉期处理](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/)

## 导入类

您想要导入该类吗？ 你要这么做：

```zenscript
导入 mods.contenttweeper.DropHandler;
```

## 函数结构

该函数是一个无效的函数，需要以下参数：

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) 丢弃。
- [IBlockAccess](/Vanilla/World/IBlockAccess/) 世界 -> 我们所处的世界，可能是一个 [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/), 你可能想要实例化和下拉
- [IBlockPos](/Vanilla/World/IBlockPos/) 位置 -> 方块的位置
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) 状态 -> 方块状态
- 幸运-工具的幸运水平

由于这个方法不会返回任何东西，需要使用暴露方法将所有掉落都添加到 `掉落` 列表中。  
阅读关于他们的信息 [这里](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/)

## 例子

```zenscript
block.setDropHandler(函数(drops, world, situ, state ease) *

    drops.add(<item:minecraft:bedrock>);
    drops.add(<item:minecraft:carrot> % 50);

    return;
});
```