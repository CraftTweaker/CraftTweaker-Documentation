# Klangereignis-Klammerhandler

Der SoundEvent Bracket Handler gibt dir Zugriff auf die SoundEvents im Spiel.  
Überprüfen Sie [dieses](https://minecraft.gamepedia.com/Sounds.json) für eine Liste von Vanille-Sound-Ereignissen!

Soundtypen werden auf diese Weise im Sound Event Bracket Handler referenziert:

Vanilla

```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Mod hinzugefügt

```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

Wenn der SoundType gefunden wurde, wird ein [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) Objekt zurückgegeben.