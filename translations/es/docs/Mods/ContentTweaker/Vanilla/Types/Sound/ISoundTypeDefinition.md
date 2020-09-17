# Definición de tipo de sonido

Un objeto ISoundTypeDefinition representa un sonido (tipo) en el juego. Un tipo de sonido está casi siempre vinculado a uno o varios bloques.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.SoundType;`

## Llamando a un objeto ISoundTypeDefinition

Puede obtener tal objeto usando el [Manejador de Bracket de Tipo de Sonido](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/):  
`<soundtype:wood>`

## ZenMethods sin parámetros

| Método          | Tipo de devolución                                                                      | Definición                                                              |
| --------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| getVolume()     | flotante                                                                                | Devuelve el volumen del tipo                                            |
| getPitch()      | flotante                                                                                | Devuelve el pitch del tipo                                              |
| getBreakSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Devuelve el sonido que ocurre cuando el bloque relacionado está roto    |
| getStepSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Devuelve el sonido que ocurre cuando se pisa el bloque relacionado      |
| getPlaceSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Devuelve el sonido que ocurre cuando se coloca el bloque relacionado    |
| getHitSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Devuelve el sonido que ocurre cuando se golpea el bloque relacionado    |
| getFallSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Devuelve el sonido que ocurre cuando el bloque relacionado está cayendo |