# SoundEvent

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sound.SoundEvent;
```


## Методы

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


## Свойства

| Название       | Тип                                                        | Имеет Getter | Имеет Setter |
| -------------- | ---------------------------------------------------------- | ------------ | ------------ |
| commandString  | string                                                     | true         | false        |
| местоположение | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true         | false        |

