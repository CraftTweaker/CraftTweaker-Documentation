# IRegisterMaterialPart

IRegisterMaterialPart 函数是用于注册 [Material 配件](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 使用一个自定义 [Part类型](/Mods/ContentTweaker/Materials/Parts/PartType/) 添加的闪电函数。

## 导入相关包

如果你觉得需要导入此函数的类，你可以在这里：

```zenscript
导入 mods.contenttweeper.RegisterMaterialPart;
```

## 语句

我们有一个无效的函数，需要一个 [材料部件](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 作为输入。  
这是应该注册的材料部分。  
您可以在这个时候调用 [原版厂](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) 但这一点如何形成真正取决于你们。

```zenscript
function(materialPart)
    /DoStuff
    return;
}
```