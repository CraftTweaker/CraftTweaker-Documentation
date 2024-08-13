# DataComponentHolder

An interface that stores DataComponents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.component.DataComponentHolder;
```


## Methods

:::group{name=getComponent}

Gets the data identified by the given DataComponentType. If the ComponentHolder does not have the Component, then null is returned.

Returns: The value if it exists or null.  
Return Type: T

```zenscript
// DataComponentHolder.getComponent<T : Object>(type as DataComponentType<T>) as T

myDataComponentHolder.getComponent<int?>(<componenttype:minecraft:stack_size>);
```

| Parameter |                                  Type                                  |                    Description                     |
|-----------|------------------------------------------------------------------------|----------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; | The componenttype to get                           |
| T         | Object                                                                 | The type of the class stored within the component. |


:::

:::group{name=getJsonComponent}

Get an arbitrary component by type.
 This is useful to interact with components added by mods that do not have a CraftTweaker method.

 If the ComponentAccess does not have the type, an exception is thrown.
 If the ComponentAccess is not serializable, an exception is thrown.

Returns: A [IData](/vanilla/api/data/IData) representation of the Serialized DataComponent  
Return Type: [IData](/vanilla/api/data/IData)?

```zenscript
// DataComponentHolder.getJsonComponent(type as DataComponentType) as IData?

myDataComponentHolder.getJsonComponent(<componenttype:minecraft:stack_size>);
```

| Parameter |                             Type                              |         Description          |
|-----------|---------------------------------------------------------------|------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType) | The componenttype to target. |


:::

:::group{name=getOrDefault}

Gets the data identified by the given DataComponentType. If the ComponentHolder does not have the Component, then the default value is returned.

Returns: The value if it exists or the default value.  
Return Type: T

```zenscript
// DataComponentHolder.getOrDefault<T : Object>(type as DataComponentType<T>, defaultValue as T) as T

myDataComponentHolder.getOrDefault<int?>(<componenttype:minecraft:stack_size>, 64);
```

|  Parameter   |                                  Type                                  |                                      Description                                      |
|--------------|------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| type         | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; | The componenttype to get                                                              |
| defaultValue | T                                                                      | The default value to return in the event that the holder does not have the component. |
| T            | Object                                                                 | The type of the ComponentType                                                         |


:::

:::group{name=has}

Checks whether the holder contains the given DataComponent, which is indentified by the type.

Returns: Whether the holder contains the DataComponent.  
Return Type: boolean

```zenscript
// DataComponentHolder.has(type as DataComponentType) as boolean

myDataComponentHolder.has(<componenttype:minecraft:stack_size>);
```

| Parameter |                             Type                              |           Description           |
|-----------|---------------------------------------------------------------|---------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType) | The componenttype to check for. |


:::


## Properties

|    Name    |                            Type                             | Has Getter | Has Setter |                  Description                   |
|------------|-------------------------------------------------------------|------------|------------|------------------------------------------------|
| components | [DataComponentMap](/vanilla/api/component/DataComponentMap) | true       | false      | Gets the internal map of ComponentType -> Data |

