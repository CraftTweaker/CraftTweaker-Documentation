# Manejador de Bracket de Evento de Sonido

El SoundEvent Bracket Handler te da acceso a los SoundEvents en el juego.  
¡Mira [este](https://minecraft.gamepedia.com/Sounds.json) para ver una lista de eventos de sonido de vainilla!

Los tipos de sonido son referenciados en el manejador de Bracket de Eventos de Sonido de esta manera:

Vanilla

```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Mod añadido

```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

Si se encuentra el soundType devolverá un objeto [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/).