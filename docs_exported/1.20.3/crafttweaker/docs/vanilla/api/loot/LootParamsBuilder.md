# LootParamsBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootParamsBuilder;
```


## Static Methods

:::group{name=create}

Return Type: [LootParamsBuilder](/vanilla/api/loot/LootParamsBuilder)

```zenscript
LootParamsBuilder.create(level as ServerLevel) as LootParamsBuilder
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |


:::

## Methods

:::group{name=build}

Return Type: [LootParams](/vanilla/api/loot/LootParams)

```zenscript
LootParamsBuilder.build(params as LootContextParamSet) as LootParams
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| params    | [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) |


:::

:::group{name=getOptionalParameter}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
LootParamsBuilder.getOptionalParameter<T : Object>(param as LootContextParam<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                 Type                                  |
|-----------|-----------------------------------------------------------------------|
| param     | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; |
| T         | Object                                                                |


:::

:::group{name=getParameter}

Return Type: T

```zenscript
LootParamsBuilder.getParameter<T : Object>(param as LootContextParam<T>) as T
```

| Parameter |                                 Type                                  |
|-----------|-----------------------------------------------------------------------|
| param     | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; |
| T         | Object                                                                |


:::

:::group{name=withDynamicDrop}

Return Type: [LootParamsBuilder](/vanilla/api/loot/LootParamsBuilder)

```zenscript
LootParamsBuilder.withDynamicDrop(key as ResourceLocation, drop as DynamicDrop) as LootParamsBuilder
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| key       | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| drop      | [DynamicDrop](/vanilla/api/loot/DynamicDrop)               |


:::

:::group{name=withLuck}

Return Type: [LootParamsBuilder](/vanilla/api/loot/LootParamsBuilder)

```zenscript
LootParamsBuilder.withLuck(luck as float) as LootParamsBuilder
```

| Parameter | Type  |
|-----------|-------|
| luck      | float |


:::

:::group{name=withOptionalParameter}

Return Type: [LootParamsBuilder](/vanilla/api/loot/LootParamsBuilder)

```zenscript
LootParamsBuilder.withOptionalParameter<T : Object>(param as LootContextParam<T>, value as @org.openzen.zencode.java.ZenCodeType.Nullable T) as LootParamsBuilder
```

| Parameter |                                 Type                                  |
|-----------|-----------------------------------------------------------------------|
| param     | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; |
| value     | @org.openzen.zencode.java.ZenCodeType.Nullable T                      |
| T         | Object                                                                |


:::

:::group{name=withParameter}

Return Type: [LootParamsBuilder](/vanilla/api/loot/LootParamsBuilder)

```zenscript
LootParamsBuilder.withParameter<T : Object>(param as LootContextParam<T>, value as T) as LootParamsBuilder
```

| Parameter |                                 Type                                  |
|-----------|-----------------------------------------------------------------------|
| param     | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; |
| value     | T                                                                     |
| T         | Object                                                                |


:::


## Properties

|                     Type                      | Has Getter | Has Setter |
|-----------------------------------------------|------------|------------|
| [ServerLevel](/vanilla/api/world/ServerLevel) | true       | false      |

