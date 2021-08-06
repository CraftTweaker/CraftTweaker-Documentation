# FluidBuilder

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.fluid.FluidBuilder;
```


## Implemented Interfaces
FluidBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in FluidBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors

Creates a new FluidBuilder with default colorized textures
```zenscript
new FluidBuilder(isMolten as boolean, color as int) as FluidBuilder
new FluidBuilder(true, 0xff66ccff);
```

| Parameter | Type    | Description                  |
| --------- | ------- | ---------------------------- |
| isMolten  | boolean | if the fluid is molten       |
| color     | int     | the color of the fluid, ARGB |


Creates a new FluidBuilder with two textures
```zenscript
new FluidBuilder(isMolten as boolean, color as int, stillTexture as MCResourceLocation, flowTexture as MCResourceLocation) as FluidBuilder
new FluidBuilder(true, 0xff66ccff, <resource:contenttweaker:fluid/liquid>, <resource:contenttweaker:fluid/liquid_flowing>);
```

| Parameter    | Type                                                       | Description                                          |
| ------------ | ---------------------------------------------------------- | ---------------------------------------------------- |
| isMolten     | boolean                                                    | if the fluid is molten                               |
| color        | int                                                        | the bucket fluid color, ARGB                         |
| stillTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | the texture resource location of still fluid block   |
| flowTexture  | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | the texture resource location of flowing fluid block |



## Methods

:::group{name=build}

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

Return Type: void

```zenscript
// FluidBuilder.build(resourceLocation as string) as void

myFluidBuilder.build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | string | 해당 블록의 리소스 경로 |


:::

:::group{name=density}

How fast you can walk in the fluid?

 default value is 1000

Return Type: [FluidBuilder](/mods/contenttweaker/API/fluid/FluidBuilder)

```zenscript
// FluidBuilder.density(density as int) as FluidBuilder

myFluidBuilder.density(1400);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| density   | int  | No Description Provided |


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

| Parameter  | Type | Description             |
| ---------- | ---- | ----------------------- |
| luminosity | int  | No Description Provided |


:::

:::group{name=temperature}

The Fluid's temperature

 default value is 300

Return Type: [FluidBuilder](/mods/contenttweaker/API/fluid/FluidBuilder)

```zenscript
// FluidBuilder.temperature(temperature as int) as FluidBuilder

myFluidBuilder.temperature(500);
```

| Parameter   | Type | Description             |
| ----------- | ---- | ----------------------- |
| temperature | int  | No Description Provided |


:::

:::group{name=viscosity}

How quickly the fluid spreads

 default value is 1000

Return Type: [FluidBuilder](/mods/contenttweaker/API/fluid/FluidBuilder)

```zenscript
// FluidBuilder.viscosity(viscosity as int) as FluidBuilder

myFluidBuilder.viscosity(800);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| viscosity | int  | No Description Provided |


:::


