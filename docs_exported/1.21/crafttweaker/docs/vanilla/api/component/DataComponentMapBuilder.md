# DataComponentMapBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.component.DataComponentMapBuilder;
```


## Methods

:::group{name=addAll}

Return Type: [DataComponentMapBuilder](/vanilla/api/component/DataComponentMapBuilder)

```zenscript
DataComponentMapBuilder.addAll(other as DataComponentMap) as DataComponentMapBuilder
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| other     | [DataComponentMap](/vanilla/api/component/DataComponentMap) |


:::

:::group{name=build}

Return Type: [DataComponentMap](/vanilla/api/component/DataComponentMap)

```zenscript
// DataComponentMapBuilder.build() as DataComponentMap

myDataComponentMapBuilder.build();
```

:::

:::group{name=setComponent}

Return Type: [DataComponentMapBuilder](/vanilla/api/component/DataComponentMapBuilder)

```zenscript
DataComponentMapBuilder.setComponent<T : Object>(type as DataComponentType<T>, value as @org.openzen.zencode.java.ZenCodeType.Nullable T) as DataComponentMapBuilder
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| value     | @org.openzen.zencode.java.ZenCodeType.Nullable T                       |
| T         | Object                                                                 |


:::


