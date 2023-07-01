# SoundEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sound.SoundEvent;
```


## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
// SoundEvent.getCommandString() as string

mySoundEvent.getCommandString();
```

:::

:::group{name=getLocation}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// SoundEvent.getLocation() as ResourceLocation

mySoundEvent.getLocation();
```

:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// SoundEvent.getRegistryName() as ResourceLocation

mySoundEvent.getRegistryName();
```

:::


## Properties

|     Name      |                            Type                            | Has Getter | Has Setter |
|---------------|------------------------------------------------------------|------------|------------|
| commandString | string                                                     | true       | false      |
| location      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

