# FluidIngredient

FluidIngredient that facilitates accepting either a single, or multiple [IFluidStack](/forge/api/fluid/IFluidStack)s, [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;s or [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;&gt;s.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.FluidIngredient;
```


## Implemented Interfaces
FluidIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in FluidIngredient

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Методы

:::group{name=matches}

Return Type: boolean

```zenscript
FluidIngredient.matches(fluid as Fluid) as boolean
```

| Параметр | Тип                               |
| -------- | --------------------------------- |
| fluid    | [Fluid](/vanilla/api/fluid/Fluid) |


:::


## Операторы

:::group{name=OR}

```zenscript
myFluidIngredient | other as FluidIngredient
```

:::


