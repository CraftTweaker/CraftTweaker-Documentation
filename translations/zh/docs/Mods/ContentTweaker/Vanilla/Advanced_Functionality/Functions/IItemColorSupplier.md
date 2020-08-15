# IItemColorSupplier

IItemColorSupplier 函数可以用于提供 [色彩对象](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) 用于任何东西。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.IItemColorSupplier;`

## 参数

IItemColorSupplier 功能具有以下参数的函数。

- [IItemStack](/Vanilla/Items/IItemStack/) itemStack → 正在请求颜色的物品。
- int tintIndex → 色调索引，使用你喜欢的方式。 函数需要返回一个 [颜色对象](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)。