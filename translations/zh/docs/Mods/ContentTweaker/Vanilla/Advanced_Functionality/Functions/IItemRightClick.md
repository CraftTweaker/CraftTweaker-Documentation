# IItemRightClick

ItemRightClick 函数可以添加到 [项目](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 中，当用户正确点击他的主手中选定的项目时，将会触发它。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.IItemRightClick；`

## 参数

IItemRightClick 函数是具有以下参数的函数：

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → 右键点击的物品
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → 玩家所在的世界
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) 播放器 → 执行右键的播放器
- string hand → "OFF_HAND" 或 "MAIN_HAND"

函数需要返回 `"SUCCSS"`, `"PASS"` 或 `"错误"`

## 例子

```zenscript
zsItem.itemRightClick = function(stack, world, player, hand) Group
    Commands.call("scoreard players set @p name 5", player, world);
    return "Pass";
};
```