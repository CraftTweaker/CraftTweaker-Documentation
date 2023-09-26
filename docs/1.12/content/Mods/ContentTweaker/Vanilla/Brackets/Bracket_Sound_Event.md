# Sound Event Bracket Handler

The SoundEvent Bracket Handler gives you access to the SoundEvents in the game.  
Check [this](https://minecraft.wiki/w/Sounds.json) for a list of vanilla sound events!


SoundTypes are referenced in the Sound Event Bracket handler this way:

Vanilla
```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Mod Added
```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

If the soundType is found, this will return an [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) Object.  