# SoundTypeBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.builder.vanilla.sound.SoundTypeBuilder;
```


## Methods

:::group{name=breakSound}

Return Type: [SoundTypeBuilder](/mods/contenttweaker/builder/vanilla/sound/SoundTypeBuilder)

```zenscript
SoundTypeBuilder.breakSound(sound as SimpleReference<SoundEvent>) as SoundTypeBuilder
```

| Parameter |                                                       Type                                                        |
|-----------|-------------------------------------------------------------------------------------------------------------------|
| sound     | [SimpleReference](/mods/contenttweaker/object/SimpleReference)&lt;[SoundEvent](/vanilla/api/sound/SoundEvent)&gt; |


:::

:::group{name=build}

Return Type: [SimpleReference](/mods/contenttweaker/object/SimpleReference)&lt;[SoundType](/vanilla/api/sound/SoundType)&gt;

```zenscript
SoundTypeBuilder.build(name as string) as SimpleReference<SoundType>
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=fallSound}

Return Type: [SoundTypeBuilder](/mods/contenttweaker/builder/vanilla/sound/SoundTypeBuilder)

```zenscript
SoundTypeBuilder.fallSound(sound as SimpleReference<SoundEvent>) as SoundTypeBuilder
```

| Parameter |                                                       Type                                                        |
|-----------|-------------------------------------------------------------------------------------------------------------------|
| sound     | [SimpleReference](/mods/contenttweaker/object/SimpleReference)&lt;[SoundEvent](/vanilla/api/sound/SoundEvent)&gt; |


:::

:::group{name=hitSound}

Return Type: [SoundTypeBuilder](/mods/contenttweaker/builder/vanilla/sound/SoundTypeBuilder)

```zenscript
SoundTypeBuilder.hitSound(sound as SimpleReference<SoundEvent>) as SoundTypeBuilder
```

| Parameter |                                                       Type                                                        |
|-----------|-------------------------------------------------------------------------------------------------------------------|
| sound     | [SimpleReference](/mods/contenttweaker/object/SimpleReference)&lt;[SoundEvent](/vanilla/api/sound/SoundEvent)&gt; |


:::

:::group{name=pitch}

Return Type: [SoundTypeBuilder](/mods/contenttweaker/builder/vanilla/sound/SoundTypeBuilder)

```zenscript
SoundTypeBuilder.pitch(pitch as float) as SoundTypeBuilder
```

| Parameter | Type  |
|-----------|-------|
| pitch     | float |


:::

:::group{name=placeSound}

Return Type: [SoundTypeBuilder](/mods/contenttweaker/builder/vanilla/sound/SoundTypeBuilder)

```zenscript
SoundTypeBuilder.placeSound(sound as SimpleReference<SoundEvent>) as SoundTypeBuilder
```

| Parameter |                                                       Type                                                        |
|-----------|-------------------------------------------------------------------------------------------------------------------|
| sound     | [SimpleReference](/mods/contenttweaker/object/SimpleReference)&lt;[SoundEvent](/vanilla/api/sound/SoundEvent)&gt; |


:::

:::group{name=stepSound}

Return Type: [SoundTypeBuilder](/mods/contenttweaker/builder/vanilla/sound/SoundTypeBuilder)

```zenscript
SoundTypeBuilder.stepSound(sound as SimpleReference<SoundEvent>) as SoundTypeBuilder
```

| Parameter |                                                       Type                                                        |
|-----------|-------------------------------------------------------------------------------------------------------------------|
| sound     | [SimpleReference](/mods/contenttweaker/object/SimpleReference)&lt;[SoundEvent](/vanilla/api/sound/SoundEvent)&gt; |


:::

:::group{name=volume}

Return Type: [SoundTypeBuilder](/mods/contenttweaker/builder/vanilla/sound/SoundTypeBuilder)

```zenscript
SoundTypeBuilder.volume(volume as float) as SoundTypeBuilder
```

| Parameter | Type  |
|-----------|-------|
| volume    | float |


:::


