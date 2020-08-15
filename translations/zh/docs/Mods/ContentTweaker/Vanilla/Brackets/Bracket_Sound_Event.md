# 声音事件栏处理器

声音事件处理程序让您可以访问游戏中的声音事件。  
查看 [这个](https://minecraft.gamepedia.com/Sounds.json) 以获取原版声音事件列表！

声音类型在这种方式的声音事件区块处理程序中被引用：

Vanilla

```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Mod已添加

```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

如果找到声音类型，这将返回一个 [ISoundEventDefine](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) 对象。