# 本地化名称提供商

IlocedNameSupplier 函数用于编程确定 [项目的](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 显示名称。

## 导入类

如果您想导入函数类，您可以在这里：

```zenscript
导入mods.contenttweeper.本地化名称供应商；
```

## 功能设置

函数返回一个字符串并使用 [IItemStack](/Vanilla/Items/IItemStack/) 作为单个输入参数。

```zenscript
etem.setLocalizedNameSupplier(function(itemStack) PDF
    返回 "mySuperItem";
});
```