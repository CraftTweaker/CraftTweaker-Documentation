# FluidIngredient

FluidIngredient that facilitates accepting either a single, or multiple [IFluidStack](/forge/api/fluid/IFluidStack)s, [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;s or [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;&gt;s.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.FluidIngredient;
```


## 已实现的接口
FluidIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in FluidIngredient

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/bracket/CommandStringDisplayable)

## 使用方式

:::group{name=matches}

Return Type: boolean

```zenscript
FluidIngredient.matches(fluid as Fluid) as boolean
```

| 参数    | 类型                                |
| ----- | --------------------------------- |
| fluid | [Fluid](/vanilla/api/fluid/Fluid) |


:::


## 运算符

:::group{name=OR}

```zenscript
myFluidIngredient | other as FluidIngredient
```

:::


