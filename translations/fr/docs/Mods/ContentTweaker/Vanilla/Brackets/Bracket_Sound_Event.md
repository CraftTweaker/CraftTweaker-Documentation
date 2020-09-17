# Gestionnaire d'événements sonores

Le SoundEvent Bracket Handler vous donne accès aux SoundEvents du jeu.  
Vérifiez [ceci](https://minecraft.gamepedia.com/Sounds.json) pour une liste d'événements sonores vanilla !

Les SoundTypes sont référencés de cette façon dans le gestionnaire de supports d'événement sonore:

Vanilla

```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Mod ajouté

```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

Si le soundType est trouvé, cela retournera un objet [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/).