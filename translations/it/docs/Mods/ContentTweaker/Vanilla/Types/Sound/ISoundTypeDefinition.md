# ISoundTypeDefinition

Un oggetto ISoundTypeDefinition rappresenta un suono (tipo) nel gioco. Un tipo di suono è quasi sempre associato a uno o più blocchi.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.SoundType;`

## Chiamare un oggetto ISoundTypeDefinition

È possibile ottenere un tale oggetto utilizzando il [Sound Type Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/):  
`<soundtype:wood>`

## ZenMethods senza parametri

| ZenMethod       | Tipo di ritorno                                                                         | Definizione                                                                       |
| --------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| getVolume()     | galleggiante                                                                            | Restituisce il volume del tipo                                                    |
| getPitch()      | galleggiante                                                                            | Restituisce il passo del tipo                                                     |
| getBreakSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Restituisce il suono che si verifica quando il blocco correlato è rotto           |
| getStepSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Restituisce il suono che si verifica quando il blocco correlato viene spostato    |
| getPlaceSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Restituisce il suono che si verifica quando viene posizionato il blocco correlato |
| getHitSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Restituisce il suono che si verifica quando il blocco correlato viene colpito     |
| getFallSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Restituisce il suono che si verifica quando il blocco correlato sta cadendo       |