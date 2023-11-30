# LootContextBuilder

Creates a new [LootContext](/vanilla/api/loot/LootContext) using a builder style pattern.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootContextBuilder;
```


## Static Methods

:::group{name=copy}

Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
LootContextBuilder.copy(context as LootContext) as LootContextBuilder
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| context   | [LootContext](/vanilla/api/loot/LootContext) |


:::

:::group{name=create}

Creates a new builder with the given level.

Returns: A new builder.  
Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
LootContextBuilder.create(params as LootParams) as LootContextBuilder
```

| Parameter |                    Type                    |               Description                |
|-----------|--------------------------------------------|------------------------------------------|
| params    | [LootParams](/vanilla/api/loot/LootParams) | The params the loot will be rolled with. |


:::

## Methods

:::group{name=create}

Creates a new [LootContext](/vanilla/api/loot/LootContext) with the given [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet).

  The given [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) is used to determine what values are required for the context to be used.

Returns: a new [LootContext](/vanilla/api/loot/LootContext)  
Return Type: [LootContext](/vanilla/api/loot/LootContext)

```zenscript
LootContextBuilder.create(key as ResourceLocation?) as LootContext
```

| Parameter |                            Type                             |                      Description                      | Optional |
|-----------|-------------------------------------------------------------|-------------------------------------------------------|----------|
| key       | [ResourceLocation](/vanilla/api/resource/ResourceLocation)? | An optional random key used when no seed is provided. | true     |


:::

:::group{name=getLevel}

Gets the level that this builder uses.

Returns: The level that this builder uses.  
Return Type: [ServerLevel](/vanilla/api/world/ServerLevel)

```zenscript
// LootContextBuilder.getLevel() as ServerLevel

new LootContextBuilder(level).getLevel();
```

:::

:::group{name=withOptionalRandomSeed}

Supplies a seed to be passed into a new [Random](/vanilla/api/util/math/Random).

Returns: This builder for chaining purposes.  
Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
// LootContextBuilder.withOptionalRandomSeed(seed as long) as LootContextBuilder

new LootContextBuilder(level).withOptionalRandomSeed(1);
```

| Parameter | Type |                Description                 | Optional | Default Value |
|-----------|------|--------------------------------------------|----------|---------------|
| seed      | long | The optional seed to use, defaults to `0`. | true     | 0             |


:::


## Properties

| Name  |                     Type                      | Has Getter | Has Setter |              Description               |
|-------|-----------------------------------------------|------------|------------|----------------------------------------|
| level | [ServerLevel](/vanilla/api/world/ServerLevel) | true       | false      | Gets the level that this builder uses. |

