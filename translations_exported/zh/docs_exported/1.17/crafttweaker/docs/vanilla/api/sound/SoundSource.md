# SoundSource

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sound.SoundSource;
```


## Enum Constants

SoundSource is an enum. It has 10 enum constants. They are accessible using the code below.

```zenscript
SoundSource.MASTER
SoundSource.MUSIC
SoundSource.RECORDS
SoundSource.WEATHER
SoundSource.BLOCKS
SoundSource.HOSTILE
SoundSource.NEUTRAL
SoundSource.PLAYERS
SoundSource.AMBIENT
SoundSource.VOICE
```
## 使用方式

:::group{name=getName}

Return Type: string

```zenscript
// SoundSource.getName() as string

mySoundSource.getName();
```

:::


## 参数

| 名称       | 类型     | 可获得  | 可设置   | 描述                      |
| -------- | ------ | ---- | ----- | ----------------------- |
| name（名称） | string | true | false | No Description Provided |

