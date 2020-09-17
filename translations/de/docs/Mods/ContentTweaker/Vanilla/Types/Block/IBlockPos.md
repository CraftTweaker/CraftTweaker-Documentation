# IBlockPos

Ein IBlockPos Objekt repräsentiert eine Position im Spiel.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.BlockPos;`

## ZenMethoden ohne Parameter

| ZenMethode | ZenGetter | Rückgabetyp | Beschreibung                        |
| ---------- | --------- | ----------- | ----------------------------------- |
| getX()     | x         | int         | Gibt den X-Wert der Position zurück |
| getY()     | y         | int         | Gibt den Y-Wert der Position zurück |
| getZ()     | z         | int         | Gibt den Z-Wert der Position zurück |

## ZenMethoden mit Parametern

### Versatz holen

Gibt einen neuen IBlockPos zurück, der `Offset` Blöcke in die `Richtung` oder `in Richtung` zurück.

`IBlockPos getOffset(String directionName, int offset);`

`directionName` kann folgende Werte einnehmen:

- "runter"
- "Up"
- "Nord"
- "Süd"
- "Osten"
- "Westen"

`IBlockPos getOffset(Facing facing, int offset)` Parameters:

- [Angesicht](/Vanilla/World/IFacing/) nach → Richtung
- int offset → Wie viele Blöcke in diese Richtung?