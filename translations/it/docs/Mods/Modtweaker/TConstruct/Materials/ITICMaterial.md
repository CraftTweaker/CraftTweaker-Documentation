# ITICMaterial

Un Tinkers' Construct IMaterial (non da confondere con [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)) è che cosa può essere fatto uno strumento di costruzione di un Tinker.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import modtweaker.tconstruct.ITICMaterial;`

## Recupero di un tale oggetto

È possibile recuperare un oggetto ITICMaterial utilizzando il [ITICMaterial Bracket Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/):

```zenscript
val stone = <ticmat:stone>;
```

## Campi

È possibile ottenere/impostare i seguenti campi:

| ZenGetter           | ZenSetter           | Tipo Restituisci/Setter                                                               | Descrizione                                                                   |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| getName             |                     | stringa                                                                               | Il Nome Del Materiale                                                         |
| definizione         |                     | [IMaterialDefinizione](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | La Definizione Del Materiale                                                  |
| durabilitàTesta     | durabilitàTesta     | int                                                                                   | Un Toolhead fatto da questo materiale ha questa durata                        |
| miningSpeedHead     | miningSpeedHead     | galleggiante                                                                          | Un Toolhead fatto da questo materiale ha questa velocità di estrazione        |
| attacco Testa       | attacco Testa       | galleggiante                                                                          | Una Testa d'Attrezzo fatta da questo materiale ha questo Danno d'Attacco      |
| harvestLevelHead    | harvestLevelHead    | int                                                                                   | Un Toolhead fatto da questo materiale ha questo livello di raccolta           |
| durabilitàManiglia  | durabilitàManiglia  | int                                                                                   | Una Maniglia degli Strumenti fatta da questo materiale ha questa durata       |
| modificatorHandle   | modificatorHandle   | galleggiante                                                                          | Un Toolhandle fatto da questo materiale ha questo modificatore di durata      |
| durabilityExtra     | durabilityExtra     | int                                                                                   | Le parti utensili extra fatte da questo materiale hanno questa durata di base |
| arrowModifier       | arrowModifier       | galleggiante                                                                          | Le frecce fatte da questo materiale hanno questo modificatore di durata       |
| arrowBonusAmmo      | arrowBonusAmmo      | int                                                                                   | Freccia fatta da questo materiale hanno questa ammonizione addiotional        |
| fletchingModifier   | fletchingModifier   | galleggiante                                                                          | Fletchungs fatto da questo materiale hanno questo modificatore di durata      |
| fletchingPrecisione | fletchingPrecisione | galleggiante                                                                          | Fletchungs realizzati con questo materiale forniscono questa precisione       |

## Metodi

- partite booleane (ITICMaterial other); → restituisce se il materiale dato è uguale a `altro`