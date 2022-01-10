# BlockState



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.BlockState;
```


## Утилиты

| Тип результата                    | Является неявным |
| --------------------------------- | ---------------- |
| [Block](/vanilla/api/block/Block) | true             |
| string                            | false            |

## Методы

:::group{name=canOcclude}

Checks whether this BlockState is solid.

Returns: True if this BlockState is solid. False otherwise.  
Return Type: boolean

```zenscript
// BlockState.canOcclude() as boolean

<blockstate:minecraft:grass>.canOcclude();
```

:::

:::group{name=getAllowedValuesForProperty}

Gets a list of allowed values for a given property.

Returns: a List of allowed values.  
Return Type: stdlib.List&lt;string&gt;

```zenscript
// BlockState.getAllowedValuesForProperty(name as string) as stdlib.List<string>

<blockstate:minecraft:grass>.getAllowedValuesForProperty("snowy");
```

| Параметр | Тип    | Описание                                                 |
| -------- | ------ | -------------------------------------------------------- |
| name     | string | The name of the property to find the allowed values for. |


:::

:::group{name=getCommandString}

Gets the blockstate bracket handler syntax for this BlockState.

 E.G.
 <code>
 <blockstate:minecraft:grass:snowy=true>
 </code>

Returns: The blockstate bracket handler syntax for this BlockState.  
Return Type: string

```zenscript
// BlockState.getCommandString() as string

<blockstate:minecraft:grass>.getCommandString();
```

:::

:::group{name=getDestroySpeed}

Gets the hardness of this BlockState.

Returns: The hardness of this BlockState.  
Return Type: float

```zenscript
// BlockState.getDestroySpeed() as float

<blockstate:minecraft:grass>.getDestroySpeed();
```

:::

:::group{name=getLightEmission}

Gets the light level of this BlockState

Returns: The light level of this BlockState.  
Return Type: int

```zenscript
// BlockState.getLightEmission() as int

<blockstate:minecraft:grass>.getLightEmission();
```

:::

:::group{name=getProperties}

Gets the properties of this BlockState.

Returns: a Map of the properties on this BlockState.  
Return Type: string[string]

```zenscript
// BlockState.getProperties() as string[string]

<blockstate:minecraft:grass>.getProperties();
```

:::

:::group{name=getPropertyNames}

Gets the names of the properties of this BlockState.

Returns: the List of the names of the BlockStates's properties.  
Return Type: stdlib.List&lt;string&gt;

```zenscript
// BlockState.getPropertyNames() as stdlib.List<string>

<blockstate:minecraft:grass>.getPropertyNames();
```

:::

:::group{name=getPropertyValue}

Gets the value of the given property.

Returns: The value of the property on this BlockState.  
Return Type: string

```zenscript
BlockState.getPropertyValue(name as string) as string
```

| Параметр | Тип    | Описание |
| -------- | ------ | -------- |
| name     | string | "snowy"  |


:::

:::group{name=getSoundType}

Return Type: [SoundType](/vanilla/api/sound/SoundType)

```zenscript
// BlockState.getSoundType() as SoundType

<blockstate:minecraft:grass>.getSoundType();
```

:::

:::group{name=hasBlockEntity}

Checks whether this BlockState has a [BlockEntity](/vanilla/api/block/entity/BlockEntity).

Returns: True if this BlockState has a [BlockEntity](/vanilla/api/block/entity/BlockEntity). False otherwise.  
Return Type: boolean

```zenscript
// BlockState.hasBlockEntity() as boolean

<blockstate:minecraft:grass>.hasBlockEntity();
```

:::

:::group{name=hasProperty}

Checks whether this BlockState has the given property.

Returns: True if this BlockState has the property. False otherwise.  
Return Type: boolean

```zenscript
// BlockState.hasProperty(name as string) as boolean

<blockstate:minecraft:grass>.hasProperty("snowy");
```

| Параметр | Тип    | Описание                           |
| -------- | ------ | ---------------------------------- |
| name     | string | the name of the property to check. |


:::

:::group{name=isRandomlyTicking}

Checks whether this BlockState ticks randomly.

Returns: True if this BlockState ticks randomly. False otherwise.  
Return Type: boolean

```zenscript
// BlockState.isRandomlyTicking() as boolean

<blockstate:minecraft:grass>.isRandomlyTicking();
```

:::

:::group{name=isSignalSource}

Checks whether this BlockState can provide Redstone Power

Returns: True if this BlockState can provide Redstone Power. False otherwise.  
Return Type: boolean

```zenscript
// BlockState.isSignalSource() as boolean

<blockstate:minecraft:grass>.isSignalSource();
```

:::

:::group{name=rotate}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
BlockState.rotate(rotation as Rotation) as BlockState
```

| Параметр | Тип                                         | Описание                |
| -------- | ------------------------------------------- | ----------------------- |
| rotation | [Rotation](/vanilla/api/util/math/Rotation) | No Description Provided |


:::

:::group{name=setHardness}

Sets the destroy speed of this BlockState.

Return Type: void

```zenscript
// BlockState.setHardness(destroySpeed as float) as void

<blockstate:minecraft:grass>.setHardness(2.4f);
```

| Параметр     | Тип   | Описание                                 |
| ------------ | ----- | ---------------------------------------- |
| destroySpeed | float | the new destroy speed of this BlockState |


:::

:::group{name=withProperty}

Sets a block property based on it's name.

Returns: This BlockState with the new property value.  
Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockState.withProperty(name as string, value as string) as BlockState

<blockstate:minecraft:grass>.withProperty("snowy", "true");
```

| Параметр | Тип    | Описание                         |
| -------- | ------ | -------------------------------- |
| name     | string | The name of the property to set. |
| value    | string | The new value of the property.   |


:::


## Свойства

| Название        | Тип                                       | Имеет Getter | Имеет Setter | Описание                                                                                                                                                                                         |
| --------------- | ----------------------------------------- | ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| block           | [Block](/vanilla/api/block/Block)         | true         | false        | Gets the base [Block](/vanilla/api/block/Block) of this BlockState. <br />  <br />  The [Block](/vanilla/api/block/Block) will not contain any of the properties of this BlockState. |
| canOcclude      | boolean                                   | true         | false        | Checks whether this BlockState is solid.                                                                                                                                                         |
| commandString   | string                                    | true         | false        | Gets the blockstate bracket handler syntax for this BlockState. <br />  <br />  E.G. <br />  <code> <br />  <blockstate:minecraft:grass:snowy=true> <br />  </code>                                                           |
| destroySpeed    | float                                     | true         | true         | Gets the hardness of this BlockState.                                                                                                                                                            |
| hasBlockEntity  | boolean                                   | true         | false        | Checks whether this BlockState has a [BlockEntity](/vanilla/api/block/entity/BlockEntity).                                                                                                       |
| lightEmission   | int                                       | true         | false        | Gets the light level of this BlockState                                                                                                                                                          |
| propertyNames   | stdlib.List&lt;string&gt;     | true         | false        | Gets the names of the properties of this BlockState.                                                                                                                                             |
| randomlyTicking | boolean                                   | true         | false        | Checks whether this BlockState ticks randomly.                                                                                                                                                   |
| signalSource    | boolean                                   | true         | false        | Checks whether this BlockState can provide Redstone Power                                                                                                                                        |
| soundType       | [SoundType](/vanilla/api/sound/SoundType) | true         | false        | No Description Provided                                                                                                                                                                          |

