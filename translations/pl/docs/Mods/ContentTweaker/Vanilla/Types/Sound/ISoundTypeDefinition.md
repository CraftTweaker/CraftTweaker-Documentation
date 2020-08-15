# Definicja ISoundTypeDefinition

Obiekt ISoundTypeDefinition reprezentuje dźwięk (typ) w grze. Typ dźwięku jest prawie zawsze związany z jednym lub wieloma blokami.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.SoundType;`

## Wywołanie obiektu ISoundTypeDefinition

Możesz uzyskać taki obiekt za pomocą [Sound Type Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/):  
`<soundtype:wood>`

## Metody ZenMethods bez parametrów

| Metoda ZenMethod | Typ zwrotu                                                                              | Definicje                                                          |
| ---------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| getVolume()      | zmiennoprzecinkowe                                                                      | Zwraca głośność typu                                               |
| getPitch()       | zmiennoprzecinkowe                                                                      | Zwraca wysokość typu                                               |
| getBreakSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Zwraca dźwięk, który występuje, gdy powiązany blok jest uszkodzony |
| getStepSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Zwraca dźwięk, który występuje, gdy powiązany blok jest ukośny     |
| getPlaceSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Zwraca dźwięk, który występuje po umieszczeniu powiązanego bloku   |
| getHitSound()    | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Zwraca dźwięk, który występuje po uderzeniu powiązanego bloku      |
| getFallSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Zwraca dźwięk, który występuje, gdy powiązany blok spadnie         |