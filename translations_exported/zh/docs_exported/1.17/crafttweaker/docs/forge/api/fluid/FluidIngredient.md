# FluidIngredient

FluidIngredient that facilitates accepting either a single, or multiple [IFluidStack](/forge/api/fluid/IFluidStack)s, com.blamejared.crafttweaker.api.tag.MCTag<Fluid>s or Many<MCTag><Fluid>s.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.FluidIngredient;
```


## 已实现的接口
FluidIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in FluidIngredient

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/bracket/CommandStringDisplayable)

## 运算符

:::group{name=OR}

```zenscript
myFluidIngredient | other as FluidIngredient
```

:::


