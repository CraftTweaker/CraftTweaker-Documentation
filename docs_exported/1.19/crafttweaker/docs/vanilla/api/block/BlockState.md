# BlockState

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.BlockState;
```


## Casters

|                      Result Type                      | Is Implicit |
|-------------------------------------------------------|-------------|
| [Block](/vanilla/api/block/Block)                     | true        |
| [BlockIngredient](/vanilla/api/block/BlockIngredient) | true        |
| string                                                | false       |

## Methods

:::group{name=asString}

Return Type: string

```zenscript
// BlockState.asString() as string

<blockstate:minecraft:grass>.asString();
```

:::

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

| Parameter |  Type  |                       Description                        |
|-----------|--------|----------------------------------------------------------|
| name      | string | The name of the property to find the allowed values for. |


:::

:::group{name=getCommandString}

Gets the blockstate bracket handler syntax for this BlockState.

 E.G.
 `<blockstate:minecraft:grass:snowy=true>`

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

| Parameter |  Type  | Description |
|-----------|--------|-------------|
| name      | string | "snowy"     |


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

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| name      | string | the name of the property to check. |


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

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| rotation  | [Rotation](/vanilla/api/util/math/Rotation) |


:::

:::group{name=setDestroySpeed}

Sets the destroy speed of this BlockState.

```zenscript
// BlockState.setDestroySpeed(destroySpeed as float)

<blockstate:minecraft:grass>.setDestroySpeed(2.4f);
```

|  Parameter   | Type  |               Description                |
|--------------|-------|------------------------------------------|
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

| Parameter |  Type  |           Description            |
|-----------|--------|----------------------------------|
| name      | string | The name of the property to set. |
| value     | string | The new value of the property.   |


:::


## Properties

|       Name        |                   Type                    | Has Getter | Has Setter |                                                                                     Description                                                                                      |
|-------------------|-------------------------------------------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| block             | [Block](/vanilla/api/block/Block)         | true       | false      | Gets the base [Block](/vanilla/api/block/Block) of this BlockState. <br />  <br />  The [Block](/vanilla/api/block/Block) will not contain any of the properties of this BlockState. |
| canOcclude        | boolean                                   | true       | false      | Checks whether this BlockState is solid.                                                                                                                                             |
| commandString     | string                                    | true       | false      | Gets the blockstate bracket handler syntax for this BlockState. <br />  <br />  E.G. <br />  `<blockstate:minecraft:grass:snowy=true>`                                               |
| destroySpeed      | float                                     | true       | true       | Gets the hardness of this BlockState.                                                                                                                                                |
| hasBlockEntity    | boolean                                   | true       | false      | Checks whether this BlockState has a [BlockEntity](/vanilla/api/block/entity/BlockEntity).                                                                                           |
| isRandomlyTicking | boolean                                   | true       | false      | Checks whether this BlockState ticks randomly.                                                                                                                                       |
| isSignalSource    | boolean                                   | true       | false      | Checks whether this BlockState can provide Redstone Power                                                                                                                            |
| lightEmission     | int                                       | true       | false      | Gets the light level of this BlockState                                                                                                                                              |
| properties        | string[string]                            | true       | false      | Gets the properties of this BlockState.                                                                                                                                              |
| propertyNames     | stdlib.List&lt;string&gt;                 | true       | false      | Gets the names of the properties of this BlockState.                                                                                                                                 |
| soundType         | [SoundType](/vanilla/api/sound/SoundType) | true       | false      |                                                                                                                                                                                      |

