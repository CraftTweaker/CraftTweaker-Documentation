# IItemUpdate

可以将 IItemUpdateFunction 添加到 [item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) ，以允许每次更新项目时执行代码。

## 导入相关包

如果你觉得需要导入此函数的类，你可以在这里：

```zenscript
import mods.contenttweaker.IItemUpdate;
```

## 语句

我们有一个无效的函数，它需要以下参数(按顺序排列)

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) 代表物品堆栈本身。
- 一个 [IWorld 对象](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) 代表着该动作所发生的世界。
- 一个 [IEntity 对象](/Vanilla/Entities/IEntity/) 尽可能下拉，所以您可以实例化直到 [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/)。
- 一个整数型变量表示项目目前的栏位
- 说明当前是否选择了项目。

```zenscript
item.onItemUpdate= function(itemStack, world, owner, slot, isselected)
    //CODE GOES HERE!!
    返回；
}
```