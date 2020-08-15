# ISoundType定义

一个 ISoundTypeDefinition 对象代表游戏中的声音 (类型)。 声音类型几乎总是绑定到一个或多个块。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweiner.SoundType；`

## 调用 ISoundTypeDefinition 对象

您可以使用 [声音类型处理器](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/)获取这样一个对象：  
`<soundtype:wood>`

## ZenMethods 没有参数

| ZenMethod（ZenMethod） | 退货类型                                                                                    | 定 义              |
| -------------------- | --------------------------------------------------------------------------------------- | ---------------- |
| getVolume()          | 浮点数据[float]                                                                             | 返回类型的音量          |
| getPitch()           | 浮点数                                                                                     | 返回类型的音调          |
| getBreakSound()      | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 返回当相关方块损坏时发生的声音  |
| getStepSound()       | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 返回当相关方块被跳过时出现的声音 |
| getPlaceSound()      | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 返回放置相关方块时发生的声音   |
| getHitSound()        | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 返回当相关方块被击中时出现的声音 |
| getFallSound()       | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 返回当相关方块降落时发生的声音  |