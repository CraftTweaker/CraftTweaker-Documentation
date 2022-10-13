::since{version=1.1.0}
# JeiIngredient

Represents any ingredient used in JEI.

 JEI identifies as an ingredient everything that can be used in any type of recipe, both as input and as output. Even elements in information boxes are considered ingredients. The JEI user interface renders by default a list of all available ingredients on the right side of any menu.

 Most things you interact with in scripts normally can already freely convert to a JEI ingredient without any additional help. Refer to com.blamejared.jeitweaker.zen.component.IFluidStackExpansions#asJeiIngredient(IFluidStack) and com.blamejared.jeitweaker.zen.component.IItemStackExpansions#asJeiIngredient(IItemStack) for more information.

 Moreover, other types can automatically convert to an array of JEI ingredients, for even less boilerplate and ease of usage. Refer to com.blamejared.jeitweaker.zen.component.IIngredientExpansions#asJeiIngredientArray(IIngredient) and com.blamejared.jeitweaker.zen.component.ItemTagExpansions#asJeiIngredientArray(MCTag) for more information.<strong>For mod developers:</strong> do not use this class internally, use the generic version.

This class was added by a mod with mod-id `jeitweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.component.JeiIngredient;
```


## 已实现的接口
JeiIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in JeiIngredient

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## 参数

| 名称                   | 类型     | 可获得  | 可设置   | 描述                      |
| -------------------- | ------ | ---- | ----- | ----------------------- |
| commandString #命令字符串 | string | true | false | No Description Provided |

