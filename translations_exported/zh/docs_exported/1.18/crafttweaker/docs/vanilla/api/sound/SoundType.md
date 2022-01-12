# SoundType

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sound.SoundType;
```


## 使用方式

:::group{name=getBreakSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// SoundType.getBreakSound() as SoundEvent

mySoundType.getBreakSound();
```

:::

:::group{name=getFallSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// SoundType.getFallSound() as SoundEvent

mySoundType.getFallSound();
```

:::

:::group{name=getHitSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// SoundType.getHitSound() as SoundEvent

mySoundType.getHitSound();
```

:::

:::group{name=getPitch}

Return Type: float

```zenscript
// SoundType.getPitch() as float

mySoundType.getPitch();
```

:::

:::group{name=getPlaceSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// SoundType.getPlaceSound() as SoundEvent

mySoundType.getPlaceSound();
```

:::

:::group{name=getStepSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// SoundType.getStepSound() as SoundEvent

mySoundType.getStepSound();
```

:::

:::group{name=getVolume}

Return Type: float

```zenscript
// SoundType.getVolume() as float

mySoundType.getVolume();
```

:::


## 参数

| 名称         | 类型                                          | 可获得  | 可设置   | 描述                      |
| ---------- | ------------------------------------------- | ---- | ----- | ----------------------- |
| breakSound | [SoundEvent](/vanilla/api/sound/SoundEvent) | true | false | No Description Provided |
| fallSound  | [SoundEvent](/vanilla/api/sound/SoundEvent) | true | false | No Description Provided |
| hitSound   | [SoundEvent](/vanilla/api/sound/SoundEvent) | true | false | No Description Provided |
| pitch      | 浮点数                                         | true | false | No Description Provided |
| placeSound | [SoundEvent](/vanilla/api/sound/SoundEvent) | true | false | No Description Provided |
| stepSound  | [SoundEvent](/vanilla/api/sound/SoundEvent) | true | false | No Description Provided |
| volume     | 浮点数                                         | true | false | No Description Provided |

