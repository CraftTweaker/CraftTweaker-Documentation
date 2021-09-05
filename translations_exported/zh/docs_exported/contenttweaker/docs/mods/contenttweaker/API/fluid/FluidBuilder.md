# FluidBuilder

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.fluid.FluidBuilder;
```


## 已实现的接口
FluidBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in FluidBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructor #构造函数

Creates a new FluidBuilder with default colorized textures
```zenscript
new FluidBuilder(isMolten as boolean, color as int) as FluidBuilder
new FluidBuilder(true, 0xff66ccff);
```

| 参数       | 类型      | 描述                           |
| -------- | ------- | ---------------------------- |
| isMolten | boolean | if the fluid is molten       |
| color    | int     | the color of the fluid, ARGB |


Creates a new FluidBuilder with two textures
```zenscript
new FluidBuilder(isMolten as boolean, color as int, stillTexture as MCResourceLocation, flowTexture as MCResourceLocation) as FluidBuilder
new FluidBuilder(true, 0xff66ccff, <resource:contenttweaker:fluid/liquid>, <resource:contenttweaker:fluid/liquid_flowing>);
```

| 参数           | 类型                                                         | 描述                                                   |
| ------------ | ---------------------------------------------------------- | ---------------------------------------------------- |
| isMolten     | boolean                                                    | if the fluid is molten                               |
| color        | int                                                        | the bucket fluid color, ARGB                         |
| stillTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | the texture resource location of still fluid block   |
| flowTexture  | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | the texture resource location of flowing fluid block |



## 方法

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// FluidBuilder.build(resourceLocation as string) as void

myFluidBuilder.build("my_awesome_block");
```

| 参数               | 类型     | 描述                                   |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | string | The resource path to give this block |


:::

:::group{name=density}

How fast you can walk in the fluid?

 default value is 1000

Return Type: [FluidBuilder](/mods/contenttweaker/API/fluid/FluidBuilder)

```zenscript
// FluidBuilder.density(density as int) as FluidBuilder

myFluidBuilder.density(1400);
```

| 参数      | 类型  | 描述                      |
| ------- | --- | ----------------------- |
| density | int | No Description Provided |


:::

:::group{name=gaseous}

Is the fluid gaseous (flows upwards instead of downwards)?

Return Type: [FluidBuilder](/mods/contenttweaker/API/fluid/FluidBuilder)

```zenscript
// FluidBuilder.gaseous() as FluidBuilder

myFluidBuilder.gaseous();
```

:::

:::group{name=luminosity}

The light-level emitted by the fluid

 default value is 0

Return Type: [FluidBuilder](/mods/contenttweaker/API/fluid/FluidBuilder)

```zenscript
// FluidBuilder.luminosity(luminosity as int) as FluidBuilder

myFluidBuilder.luminosity(15);
```

| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| luminosity | int | No Description Provided |


:::

:::group{name=temperature}

The Fluid's temperature

 default value is 300

Return Type: [FluidBuilder](/mods/contenttweaker/API/fluid/FluidBuilder)

```zenscript
// FluidBuilder.temperature(temperature as int) as FluidBuilder

myFluidBuilder.temperature(500);
```

| 参数          | 类型  | 描述                      |
| ----------- | --- | ----------------------- |
| temperature | int | No Description Provided |


:::

:::group{name=viscosity}

How quickly the fluid spreads

 default value is 1000

Return Type: [FluidBuilder](/mods/contenttweaker/API/fluid/FluidBuilder)

```zenscript
// FluidBuilder.viscosity(viscosity as int) as FluidBuilder

myFluidBuilder.viscosity(800);
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| viscosity | int | No Description Provided |


:::


