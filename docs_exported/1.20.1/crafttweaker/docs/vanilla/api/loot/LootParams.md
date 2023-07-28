# LootParams

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootParams;
```


## Methods

:::group{name=addDynamicDrops}

```zenscript
LootParams.addDynamicDrops(key as ResourceLocation, drop as Consumer<ItemStack>)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| key       | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| drop      | Consumer&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;   |


:::

:::group{name=getOptionalParameter}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
LootParams.getOptionalParameter<T : Object>(param as LootContextParam<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                 Type                                  |
|-----------|-----------------------------------------------------------------------|
| param     | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; |
| T         | Object                                                                |


:::

:::group{name=getParamOrNull}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
LootParams.getParamOrNull<T : Object>(param as LootContextParam<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                 Type                                  |
|-----------|-----------------------------------------------------------------------|
| param     | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; |
| T         | Object                                                                |


:::

:::group{name=getParameter}

Return Type: T

```zenscript
LootParams.getParameter<T : Object>(param as LootContextParam<T>) as T
```

| Parameter |                                 Type                                  |
|-----------|-----------------------------------------------------------------------|
| param     | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; |
| T         | Object                                                                |


:::

:::group{name=hasParam}

Return Type: boolean

```zenscript
LootParams.hasParam<T : Object>($$0 as LootContextParam<T>) as boolean
```

| Parameter |                                 Type                                  |
|-----------|-----------------------------------------------------------------------|
| $$0       | [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt; |
| T         | Object                                                                |


:::


## Properties

| Name  |                     Type                      | Has Getter | Has Setter |
|-------|-----------------------------------------------|------------|------------|
| level | [ServerLevel](/vanilla/api/world/ServerLevel) | true       | false      |
| luck  | float                                         | true       | false      |

