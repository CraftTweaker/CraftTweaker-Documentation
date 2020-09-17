# IBlockPos

Un oggetto IBlockPos rappresenta una posizione nel gioco.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.world.IBlockPos;`

## ZenMethods senza parametri

| ZenMethod    | ZenGetter/Caster | Tipo Di Reso                              | Descrizione                                      |
| ------------ | ---------------- | ----------------------------------------- | ------------------------------------------------ |
| getX()       | x                | int                                       | Restituisce il valore X della posizione          |
| getY()       | y                | int                                       | Restituisce il valore Y della posizione          |
| getZ()       | z                | int                                       | Restituisce il valore Z della posizione          |
| asPosition3f | come IPosition3f | [IPosition3f](/Vanilla/Utils/Position3f/) | Restituisce la posizione come Position3f Object. |

## ZenMethods con parametri

### Ottieni Offset

Restituisce un nuovo IBlockPos che è `offset` blocchi nella direzione ``.

`IBlockPos getOffset(direzione IFacing, int offset);`

In alternativa è possibile ottenere direttamente gli oggetti [IFacing](/Vanilla/World/IFacing/) utilizzando i metodi statici forniti lì.

- [IFacing](/Vanilla/World/IFacing/) direction → La direzione
- int offset → quanti blocchi in quella direzione?