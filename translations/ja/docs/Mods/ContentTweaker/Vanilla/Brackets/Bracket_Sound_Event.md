# サウンドイベントブラケットハンドラー

The SoundEvent Bracket Handler gives you access to the SoundEvents in the game.  
Check [this](https://minecraft.gamepedia.com/Sounds.json) for a list of vanilla sound events!

SoundTypesは、以下の方法でSound Event Bracket ハンドラで参照されます。

Vanilla

```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Modが追加されました

```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

soundType が見つかった場合、これは [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) Object を返します。