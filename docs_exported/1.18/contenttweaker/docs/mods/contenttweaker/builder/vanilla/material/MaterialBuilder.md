# MaterialBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.builder.vanilla.material.MaterialBuilder;
```


## Methods

:::group{name=blocksMotion}

Return Type: [MaterialBuilder](/mods/contenttweaker/builder/vanilla/material/MaterialBuilder)

```zenscript
// MaterialBuilder.blocksMotion() as MaterialBuilder

myMaterialBuilder.blocksMotion();
```

:::

:::group{name=build}

Return Type: [SimpleReference](/mods/contenttweaker/object/SimpleReference)&lt;[Material](/vanilla/api/block/material/Material)&gt;

```zenscript
MaterialBuilder.build(name as string) as SimpleReference<Material>
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=flammable}

Return Type: [MaterialBuilder](/mods/contenttweaker/builder/vanilla/material/MaterialBuilder)

```zenscript
// MaterialBuilder.flammable() as MaterialBuilder

myMaterialBuilder.flammable();
```

:::

:::group{name=liquid}

Return Type: [MaterialBuilder](/mods/contenttweaker/builder/vanilla/material/MaterialBuilder)

```zenscript
// MaterialBuilder.liquid() as MaterialBuilder

myMaterialBuilder.liquid();
```

:::

:::group{name=pushReaction}

Return Type: [MaterialBuilder](/mods/contenttweaker/builder/vanilla/material/MaterialBuilder)

```zenscript
MaterialBuilder.pushReaction(reaction as PushReaction) as MaterialBuilder
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| reaction  | [PushReaction](/vanilla/api/block/material/PushReaction) |


:::

:::group{name=replaceable}

Return Type: [MaterialBuilder](/mods/contenttweaker/builder/vanilla/material/MaterialBuilder)

```zenscript
// MaterialBuilder.replaceable() as MaterialBuilder

myMaterialBuilder.replaceable();
```

:::

:::group{name=solid}

Return Type: [MaterialBuilder](/mods/contenttweaker/builder/vanilla/material/MaterialBuilder)

```zenscript
// MaterialBuilder.solid() as MaterialBuilder

myMaterialBuilder.solid();
```

:::

:::group{name=solidBlocking}

Return Type: [MaterialBuilder](/mods/contenttweaker/builder/vanilla/material/MaterialBuilder)

```zenscript
// MaterialBuilder.solidBlocking() as MaterialBuilder

myMaterialBuilder.solidBlocking();
```

:::


