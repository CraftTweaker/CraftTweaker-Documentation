# ISoundEventDefinition

An ISoundEventDefinition object represents a sound event in the game. A sound event is triggered when a sound is about to be played.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.SoundEvent;` 

## Calling an ISoundEventDefinition object
You can get such an object using the [Sound Event Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Event/):  
`<soundevent:ambient.cave>`

## ZenMethods without parameters
|ZenMethod      |Return type                                    |Definition                       |
|---------------|-----------------------------------------------|---------------------------------|
|getSoundName() |String                                         |Returns the event's sound's name |