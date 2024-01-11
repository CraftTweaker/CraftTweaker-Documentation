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
LootContextBuilder.create(level as ServerLevel) as LootContextBuilder
```

| Parameter |                     Type                      |              Description              |
|-----------|-----------------------------------------------|---------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) | The level the loot will be rolled in. |


:::

## Methods

:::group{name=build}

Creates a new [LootContext](/vanilla/api/loot/LootContext) with the given [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet).
 
 
 The given [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) is used to determine what values are
 required for the context to be used.

Returns: a new [LootContext](/vanilla/api/loot/LootContext)  
Return Type: [LootContext](/vanilla/api/loot/LootContext)

```zenscript
// LootContextBuilder.build(contextParamSet as LootContextParamSet) as LootContext

new LootContextBuilder(level).build(LootContextParamSets.gift());
```

|    Parameter    |                                Type                                |                                  Description                                   |
|-----------------|--------------------------------------------------------------------|--------------------------------------------------------------------------------|
| contextParamSet | [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) | The [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) to use. |


:::

:::group{name=create}

::deprecated[Use [this](.)#build(LootContext.Builder, LootContextParamSet)             instead to work around a bug in the             ZenCode compiler.]

Creates a new [LootContext](/vanilla/api/loot/LootContext) with the given [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet).

 
 The given [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) is used to determine what values are
 required for the context to be used.

Returns: a new [LootContext](/vanilla/api/loot/LootContext)  
Return Type: [LootContext](/vanilla/api/loot/LootContext)

```zenscript
// LootContextBuilder.create(contextParamSet as LootContextParamSet) as LootContext

new LootContextBuilder(level).create(LootContextParamSets.gift());
```

|    Parameter    |                                Type                                |                                  Description                                   |
|-----------------|--------------------------------------------------------------------|--------------------------------------------------------------------------------|
| contextParamSet | [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) | The [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) to use. |


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

:::group{name=getOptionalParameter}

Gets the provided value of the optional parameter.

Returns: The value if found, null otherwise.  
Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
LootContextBuilder.getOptionalParameter<T : Object>(contextParam as LootContextParam<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

|  Parameter   |                                 Type                                  |                                          Description                                           |
|--------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| contextParam | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; | The [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; to get the value of. |
| T            | Object                                                                | The type that the [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; uses   |


:::

:::group{name=getParameter}

Gets the provided value of the parameter.

Returns: The found value.  
Return Type: T

```zenscript
LootContextBuilder.getParameter<T : Object>(contextParam as LootContextParam<T>) as T
```

|  Parameter   |                                 Type                                  |                                          Description                                           |
|--------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| contextParam | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; | The [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; to get the value of. |
| T            | Object                                                                | The type that the [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; uses   |


:::

:::group{name=withLuck}

Provides the given luck value to the context.

Returns: This builder for chaining purposes.  
Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
// LootContextBuilder.withLuck(luck as float) as LootContextBuilder

new LootContextBuilder(level).withLuck(0.5);
```

| Parameter | Type  |      Description       |
|-----------|-------|------------------------|
| luck      | float | The luck value to use. |


:::

:::group{name=withOptionalParameter}

Provides an optional parameter to this builder.

Returns: This builder for chaining purposes.  
Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
LootContextBuilder.withOptionalParameter<T : Object>(contextParam as LootContextParam<T>, actor as @org.openzen.zencode.java.ZenCodeType.Nullable T) as LootContextBuilder
```

|  Parameter   |                                 Type                                  |              Description               |
|--------------|-----------------------------------------------------------------------|----------------------------------------|
| contextParam | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; | The param to add.                      |
| actor        | @org.openzen.zencode.java.ZenCodeType.Nullable T                      | The optional actor used by the param.  |
| T            | Object                                                                | The type of actor that the param uses. |


:::

:::group{name=withOptionalRandomSeed}

Supplies a seed to be passed into a new [Random](/vanilla/api/util/math/Random).

Returns: This builder for chaining purposes.  
Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
// LootContextBuilder.withOptionalRandomSeed(seed as long) as LootContextBuilder

new LootContextBuilder(level).withOptionalRandomSeed(0);
```

| Parameter | Type |   Description    |
|-----------|------|------------------|
| seed      | long | The seed to use. |


:::

:::group{name=withOptionalRandomSeed}

Supplies either a seed to be passed into a new [Random](/vanilla/api/util/math/Random) or if the seed
 is `0` use the given [Random](/vanilla/api/util/math/Random)

Returns: This builder for chaining purposes.  
Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
// LootContextBuilder.withOptionalRandomSeed(seed as long, random as RandomSource) as LootContextBuilder

new LootContextBuilder(level).withOptionalRandomSeed(1, level.random);
```

| Parameter |                        Type                         |          Description          |
|-----------|-----------------------------------------------------|-------------------------------|
| seed      | long                                                | The seed to use.              |
| random    | [RandomSource](/vanilla/api/util/math/RandomSource) | The random source to provide. |


:::

:::group{name=withParameter}

Provides a parameter to this builder.

Returns: This builder for chaining purposes.  
Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
LootContextBuilder.withParameter<T : Object>(contextParam as LootContextParam<T>, actor as T) as LootContextBuilder
```

|  Parameter   |                                 Type                                  |              Description               |
|--------------|-----------------------------------------------------------------------|----------------------------------------|
| contextParam | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; | The param to add.                      |
| actor        | T                                                                     | The actor used by the param.           |
| T            | Object                                                                | The type of actor that the param uses. |


:::

:::group{name=withRandom}

Supplies a [Random](/vanilla/api/util/math/Random) source to the built context.

Returns: This builder for chaining purposes.  
Return Type: [LootContextBuilder](/vanilla/api/loot/LootContextBuilder)

```zenscript
// LootContextBuilder.withRandom(random as RandomSource) as LootContextBuilder

new LootContextBuilder(level).withRandom(level.random);
```

| Parameter |                        Type                         |          Description          |
|-----------|-----------------------------------------------------|-------------------------------|
| random    | [RandomSource](/vanilla/api/util/math/RandomSource) | The random source to provide. |


:::


## Properties

| Name  |                     Type                      | Has Getter | Has Setter |              Description               |
|-------|-----------------------------------------------|------------|------------|----------------------------------------|
| level | [ServerLevel](/vanilla/api/world/ServerLevel) | true       | false      | Gets the level that this builder uses. |

