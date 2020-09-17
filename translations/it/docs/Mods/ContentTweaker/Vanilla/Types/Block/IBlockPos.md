# IBlockPos

Un oggetto IBlockPos rappresenta una posizione nel gioco.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.BlockPos;`

## ZenMethods senza parametri

| ZenMethod | ZenGetter | Tipo Di Reso | Descrizione                             |
| --------- | --------- | ------------ | --------------------------------------- |
| getX()    | x         | int          | Restituisce il valore X della posizione |
| getY()    | y         | int          | Restituisce il valore Y della posizione |
| getZ()    | z         | int          | Restituisce il valore Z della posizione |

## ZenMethods con parametri

### Ottieni Offset

Restituisce un nuovo IBlockPos che è `offset` blocchi nella direzione `directionName` o `rivolto verso`.

`IBlockPos getOffset(String directionName, int offset);`

`directionName` può prendere questi valori:

- "giù"
- "su"
- "nord"
- "sud"
- "est"
- "ovest"

`IBlockPos getOffset(Facing facing, int offset)` Parametri:

- [Di fronte](/Vanilla/World/IFacing/) di fronte → La direzione
- int offset → quanti blocchi in quella direzione?