# IWorld

Un oggetto IWorld rappresenta il mondo in cui si trova il giocatore.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.World;`

## ZenMetodi senza parametri e ZenGetters

| ZenMethod          | ZenGetter     | Tipo di ritorno                                                | Descrizione                                                                                                                                                                                                        |
| ------------------ | ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| isRemote()         | remoto        | boolean                                                        | Vero se il mondo è un cliente "schiavo"; i cambiamenti non saranno salvati o propagati da questo mondo. Ad esempio, i mondi del server hanno questo set a false, i mondi del client hanno questo impostato a true. |
| isRaining()        | pioggia       | boolean                                                        | Restituisce vero se sta piovendo                                                                                                                                                                                   |
| isThundering()     | tuono         | boolean                                                        | Restituisce vero se è attualmente tuoni                                                                                                                                                                            |
| getMoonPhase()     | moonPhase     | int                                                            | Restituisce la fase lunare corrente                                                                                                                                                                                |
| isDayTime()        | dayTime       | boolean                                                        | Controlla se è diurno                                                                                                                                                                                              |
| getWorldTime()     | tempo         | lungo                                                          | Restituisce il tempo del mondo                                                                                                                                                                                     |
| getDimension()     | dimensione    | int                                                            | Restituisce la dimensione del mondo                                                                                                                                                                                |
| isSurfaceWorld()   | surfaceWorld  | boolean                                                        | Restituisce se sei in un mondo di superficie o meno                                                                                                                                                                |
| getDimensionType() | dimensionType | Stringa                                                        | Restituisce il nome del tipo della dimensione                                                                                                                                                                      |
| getRandom()        | casuale       | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | Restituisce il generatore di numeri casuali del mondo                                                                                                                                                              |

## ZenMethods con parametri

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState, [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);