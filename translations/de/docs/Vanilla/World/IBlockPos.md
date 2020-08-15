# IBlockPos

Ein IBlockPos Objekt repräsentiert eine Position im Spiel.

## Dieses Paket importieren

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IBlockPos;`

## ZenMethoden ohne Parameter

| ZenMethode   | ZenGetter/Caster | Rückgabetyp                               | Beschreibung                               |
| ------------ | ---------------- | ----------------------------------------- | ------------------------------------------ |
| getX()       | x                | int                                       | Gibt den X-Wert der Position zurück        |
| getY()       | y                | int                                       | Gibt den Y-Wert der Position zurück        |
| getZ()       | z                | int                                       | Gibt den Z-Wert der Position zurück        |
| asPosition3f | as IPosition3f   | [IPosition3f](/Vanilla/Utils/Position3f/) | Returns the position as Position3f Object. |

## ZenMethoden mit Parametern

### Versatz holen

Returns a new IBlockPos that is `offset` blocks into the `direction` direction.

`IBlockPos getOffset(IFacing direction, int offset);`

Alternatively you can directly get the [IFacing](/Vanilla/World/IFacing/) objects using the static methods provided there.

- [IFacing](/Vanilla/World/IFacing/) direction → The direction
- int offset → Wie viele Blöcke in diese Richtung?