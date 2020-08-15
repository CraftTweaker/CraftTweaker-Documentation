# IEntityDrop

Un IEntityDrop si riferisce a una goccia da un'entità [](/Vanilla/Entities/IEntityDefinition/).

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityDrop;`

## ZenGetters

È possibile recuperare queste informazioni da loro.

| ZenGetter      | Che cosa fa                                                          | Tipo di ritorno                          | Utilizzo          |
| -------------- | -------------------------------------------------------------------- | ---------------------------------------- | ----------------- |
| possibilità    | Restituisce la possibilità della goccia.                             | galleggiante                             | `drop.chance`     |
| max            | Restituisce la quantità massima della goccia.                        | int                                      | `drop.max`        |
| min            | Restituisce la quantità minima della goccia.                         | int                                      | `drop.min`        |
| Solo Giocatore | Restituisce se la goccia è solo giocatore.                           | boolean                                  | `drop.playerOnly` |
| range          | Restituisce l'intervallo di quantità minima al massimo della goccia. | Intervallo                               | `drop.range`      |
| pila           | Restituisce l'oggetto rilasciato.                                    | [IItemStack](/Vanilla/Items/IItemStack/) | `drop.stack`      |