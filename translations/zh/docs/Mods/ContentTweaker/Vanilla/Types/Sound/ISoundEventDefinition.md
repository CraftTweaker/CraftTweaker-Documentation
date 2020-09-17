# ISoundEventDefinition

一个 ISoundEventDefine 对象代表游戏中的一个声音事件。 声音将在播放时触发。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.SoundEvent;`

## 调用 ISoundEventDefinition 对象

您可以使用 [声音事件处理器](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Event/)获取这样一个对象：  
`<soundevent:ambient.cave>`

## ZenMethods 没有参数

| ZenMethod（ZenMethod） | 退货类型        | 定 义       |
| -------------------- | ----------- | --------- |
| getSoundName()       | 字符串[string] | 返回事件声音的名称 |