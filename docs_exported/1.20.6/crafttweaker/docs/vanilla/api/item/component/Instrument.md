# Instrument

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.Instrument;
```


## Extending Record

Instrument extends Record. That means all methods available in Record are also available in Instrument

## Properties

|     Name      |                            Type                            | Has Getter | Has Setter |
|---------------|------------------------------------------------------------|------------|------------|
| commandString | string                                                     | true       | false      |
| range         | float                                                      | true       | false      |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| soundEvent    | [SoundEvent](/vanilla/api/sound/SoundEvent)                | true       | false      |
| useDuration   | int                                                        | true       | false      |

