# IBlockPos

Ein IBlockPos Objekt repräsentiert eine Position im Spiel.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren Sie craftweaker.world.IBlockPos;`

## ZenMethoden ohne Parameter

| ZenMethode   | ZenGetter/Caster | Rückgabetyp                               | Beschreibung                                    |
| ------------ | ---------------- | ----------------------------------------- | ----------------------------------------------- |
| getX()       | x                | int                                       | Gibt den X-Wert der Position zurück             |
| getY()       | y                | int                                       | Gibt den Y-Wert der Position zurück             |
| getZ()       | z                | int                                       | Gibt den Z-Wert der Position zurück             |
| asPosition3f | als IPosition3f  | [IPosition3f](/Vanilla/Utils/Position3f/) | Gibt die Position als Position3f Objekt zurück. |

## ZenMethoden mit Parametern

### Versatz holen

Gibt einen neuen IBlockPos zurück, der `Offset` Blöcke in die `Richtung` zurückgibt.

`IBlockPos getOffset(IFacing-Richtung, Int Offset);`

Alternativ können Sie die [IFacing](/Vanilla/World/IFacing/) Objekte direkt mit den dort angegebenen statischen Methoden erhalten.

- [IFacing](/Vanilla/World/IFacing/) Richtung → Richtung
- int offset → Wie viele Blöcke in diese Richtung?