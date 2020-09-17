# IBlockColorSupplier

IBlockColorSupplier 函数可以用于提供 [色彩对象](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) 用于任何东西。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入mods.contenttweener.IBlockColorSupplier;`

## 参数

IBlockColorSupplier 功能是一个具有以下参数的函数。

- [ICTBlockstate](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) state -> 该方块的方块的方块状态正在被请求的颜色。
- [IBlockAccess](/Vanilla/World/IBlockAccess/) 访问 -> 请求颜色的方块访问。
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos = 被请求颜色的方块的位置。
- int tintIndex → 色调索引，使用你喜欢的方式。 函数需要返回一个 [颜色对象](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)。

## 例子

```zenscript
#loader contenttfinfin弱

import mods.contenttweeper.IBlockColorSupplier;
import mods.contenttweeper.BlockState;
import mods.contenttweeper.BlockPos;
import mods.contenttweeper.Color;

import craftbower. orld.IBlockAccess;

函数 getBlockColor(状态为 BlockState, 访问 IBlockAccess, 以BlockPos 色彩为int索引
  /返回石灰色
    返回颜色。 romInt(0x00FF00)；
}
```