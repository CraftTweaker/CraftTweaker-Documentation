# SoundSource

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sound.SoundSource;
```


## Enum Constants

SoundSource is an enum. It has 10 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:sound/source:master>
<constant:minecraft:sound/source:music>
<constant:minecraft:sound/source:records>
<constant:minecraft:sound/source:weather>
<constant:minecraft:sound/source:blocks>
<constant:minecraft:sound/source:hostile>
<constant:minecraft:sound/source:neutral>
<constant:minecraft:sound/source:players>
<constant:minecraft:sound/source:ambient>
<constant:minecraft:sound/source:voice>
```
## Methods

:::group{name=getName}

Return Type: string

```zenscript
// SoundSource.getName() as string

mySoundSource.getName();
```

:::


## Properties

| Name |  Type  | Has Getter | Has Setter |
|------|--------|------------|------------|
| name | string | true       | false      |

