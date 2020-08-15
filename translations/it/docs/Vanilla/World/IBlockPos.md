# IBlockPos

Un oggetto IBlockPos rappresenta una posizione nel gioco.

## Importazione del pacchetto

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IBlockPos;`

## ZenMethods senza parametri

| ZenMethod    | ZenGetter/Caster | Tipo Di Reso                              | Descrizione                                |
| ------------ | ---------------- | ----------------------------------------- | ------------------------------------------ |
| getX()       | x                | int                                       | Restituisce il valore X della posizione    |
| getY()       | y                | int                                       | Restituisce il valore Y della posizione    |
| getZ()       | z                | int                                       | Restituisce il valore Z della posizione    |
| asPosition3f | as IPosition3f   | [IPosition3f](/Vanilla/Utils/Position3f/) | Returns the position as Position3f Object. |

## ZenMethods con parametri

### Ottieni Offset

Returns a new IBlockPos that is `offset` blocks into the `direction` direction.

`IBlockPos getOffset(IFacing direction, int offset);`

Alternatively you can directly get the [IFacing](/Vanilla/World/IFacing/) objects using the static methods provided there.

- [IFacing](/Vanilla/World/IFacing/) direction → The direction
- int offset → quanti blocchi in quella direzione?