# IItemUseFinish

ItemUseFinish函数可以添加到 [项目](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 中，并且只有在用户使用此函数完成时才会被触发(e)。 . 完成饮食）。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入mods.contenttweaker.IItemUseFinish；`

## 参数

IItemRightClickFunction 是一个具有以下参数的函数：

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack = 被使用的物品
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → 玩家所在的世界
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 实体 → 使用该物品的实体

函数需要返回 [IItemStack](/Vanilla/Items/IItemStack/)。

## 例子

```zenscript
zsItem.onItemUseFinish = function(stack, world, player)
    stack.damage(1, player);
    return stack;
};
```