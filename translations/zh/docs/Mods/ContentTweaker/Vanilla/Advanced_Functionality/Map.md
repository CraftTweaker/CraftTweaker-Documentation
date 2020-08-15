# 地图

地图包允许您使用BASE的航点事件处理器设置航点。

## 导入相关包

您可以导入包，使您不必每次都重新输入。

    导入 mods.contenttweeper.Map;
    

## 添加航点

这是地图包显示的唯一方法，它允许您在指定位置设置一个航点。  
这是一个无效的方法，其参数：

- 字符串名称
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CT颜色（CTColor）](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(名称, IWorld world, IBlockPos pos, CTColor 颜色)