# ISoundTypeDefinition

An ISoundTypeDefinition object represents a sound (type) in the game. A sound type is almost always bound to one or multiple blocks.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.SoundType;` 

## Calling an ISoundTypeDefinition object
You can get such an object using the [Sound Type Bracket Handler](/Mods/Contenttweaker/Vanilla/Brackets/Bracket_Sound_Type):  
`<soundtype:wood>`

##ZenMethods without parameters
|ZenMethod       |Return type                                    |Definition                                                         |
|----------------|-----------------------------------------------|-------------------------------------------------------------------|
|getVolume()     |float                                          |Returns the type's volume                                          |
|getPitch()      |float                                          |Returns the type's pitch                                           |
|getBreakSound() |[ISoundEventDefinition](ISoundEventDefinition) |Returns the sound that occurs when the related block is broken     |
|getStepSound()  |[ISoundEventDefinition](ISoundEventDefinition) |Returns the sound that occurs when the related block is stepped on |
|getPlaceSound() |[ISoundEventDefinition](ISoundEventDefinition) |Returns the sound that occurs when the related block is placed     |
|getHitSound()   |[ISoundEventDefinition](ISoundEventDefinition) |Returns the sound that occurs when the related block is hit        |
|getFallSound()  |[ISoundEventDefinition](ISoundEventDefinition) |Returns the sound that occurs when the related block is falling    |

