# MutableDataComponentHolder

An interface that stores DataComponents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.component.MutableDataComponentHolder;
```


## Implemented Interfaces
MutableDataComponentHolder implements the following interfaces. That means all methods defined in these interfaces are also available in MutableDataComponentHolder

- [DataComponentHolder](/vanilla/api/component/DataComponentHolder)

## Methods

:::group{name=applyComponents}

```zenscript
MutableDataComponentHolder.applyComponents(components as DataComponentMap)
```

| Parameter  |                            Type                             |
|------------|-------------------------------------------------------------|
| components | [DataComponentMap](/vanilla/api/component/DataComponentMap) |


:::

:::group{name=applyComponents}

```zenscript
MutableDataComponentHolder.applyComponents(patch as DataComponentPatch)
```

| Parameter |                              Type                               |
|-----------|-----------------------------------------------------------------|
| patch     | [DataComponentPatch](/vanilla/api/component/DataComponentPatch) |


:::

:::group{name=copyFrom}

```zenscript
MutableDataComponentHolder.copyFrom(src as DataComponentHolder, componentTypes as DataComponentType[])
```

|   Parameter    |                               Type                                |
|----------------|-------------------------------------------------------------------|
| src            | [DataComponentHolder](/vanilla/api/component/DataComponentHolder) |
| componentTypes | [DataComponentType](/vanilla/api/component/DataComponentType)[]   |


:::

:::group{name=remove}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
MutableDataComponentHolder.remove<T : Object>(componentType as DataComponentType<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

|   Parameter   |                                  Type                                  |
|---------------|------------------------------------------------------------------------|
| componentType | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T             | Object                                                                 |


:::

:::group{name=setComponent}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
MutableDataComponentHolder.setComponent<T : Object>(componentType as DataComponentType<T>, value as @org.openzen.zencode.java.ZenCodeType.Nullable T) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

|   Parameter   |                                  Type                                  |
|---------------|------------------------------------------------------------------------|
| componentType | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| value         | @org.openzen.zencode.java.ZenCodeType.Nullable T                       |
| T             | Object                                                                 |


:::

:::group{name=update}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
MutableDataComponentHolder.update<T : Object>(componentType as DataComponentType<T>, value as T, updater as UnaryOperator<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

|   Parameter   |                                  Type                                  |
|---------------|------------------------------------------------------------------------|
| componentType | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| value         | T                                                                      |
| updater       | UnaryOperator&lt;T&gt;                                                 |
| T             | Object                                                                 |


:::

:::group{name=update}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
MutableDataComponentHolder.update<T : Object, U : Object>(componentType as DataComponentType<T>, value as T, updateContext as U, updater as BiFunction<T,U,T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

|   Parameter   |                                  Type                                  |
|---------------|------------------------------------------------------------------------|
| componentType | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| value         | T                                                                      |
| updateContext | U                                                                      |
| updater       | BiFunction&lt;T,U,T&gt;                                                |
| T             | Object                                                                 |
| U             | Object                                                                 |


:::


