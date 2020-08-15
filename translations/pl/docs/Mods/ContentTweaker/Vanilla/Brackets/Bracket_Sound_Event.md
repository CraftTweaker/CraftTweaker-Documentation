# Obsługa nawiasów zdarzeń dźwiękowych

SoundEvent Handler daje Ci dostęp do SoundEvent w grze.  
Sprawdź [to](https://minecraft.gamepedia.com/Sounds.json) aby wyświetlić listę wydarzeń dźwiękowych wanili!

Typy dźwięków są przywoływane w uchwycie nawiasów zdarzeń dźwiękowych w ten sposób:

Vanilla

```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Modyfikacja dodana

```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

Jeśli znaleziony zostanie typ dźwięku, zwróci to obiekt [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/).