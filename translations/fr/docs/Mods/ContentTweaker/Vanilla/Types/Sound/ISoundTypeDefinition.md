# ISoundTypeDefinition

An ISoundTypeDefinition object represents a sound (type) in the game. A sound type is almost always bound to one or multiple blocks.

## Importation du paquet

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.SoundType;`

## Calling an ISoundTypeDefinition object

You can get such an object using the [Sound Type Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/):  
`<soundtype:wood>`

## ZenMethods without parameters

| Méthode Zen     | Return type                                                                             | Definition                                                         |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| getVolume()     | flottant                                                                                | Returns the type's volume                                          |
| getPitch()      | flottant                                                                                | Returns the type's pitch                                           |
| getBreakSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Returns the sound that occurs when the related block is broken     |
| getStepSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Returns the sound that occurs when the related block is stepped on |
| getPlaceSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Returns the sound that occurs when the related block is placed     |
| getHitSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Returns the sound that occurs when the related block is hit        |
| getFallSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Returns the sound that occurs when the related block is falling    |