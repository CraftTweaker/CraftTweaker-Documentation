# IFacing

Mit dem IFacing Interface können Sie [IBlockPos](/Vanilla/World/IBlockPos/) mögliche Richtungen erhalten.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere craftweaker.world.IFacing;`

## Aufzählungen

Das Factory Interface hat 7 statische Methoden, jede gibt die besagte Richtung zurück.  
Die letzte Richtung nimmt die Richtung als Zeichenfolge ein (z.B. `"NORTH"`)

```zenscript
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.world.Facing.south()
crafttweaker.world.Facing.west()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.fromString(String name);
```

## ZenGetters/ZenMethoden ohne Parameter

| ZenGetter       | ZenMethode | Rückgabetyp |
| --------------- | ---------- | ----------- |
| name            | getName()  | string      |
| rotateY         | rotateY()  | IFacing     |
| entgegengesetzt | opposite() | IFacing     |

## Andere Methoden

### Vergleiche zwei Verkleidungen

Du kannst zwei Verkleidungen mit den Standartvergleichern `== vergleichen! < > <= >=`  
Alternativ können Sie die Funktion verwenden, obwohl die Funktion eine Inte zurückgibt, die 0 ist, wenn sie gleich sind.

```zenscript
//Gibt true oder false
facingOne == facingTwo;

//Gibt 0 zurück, wenn sie gleich
facingOne.compare(facingTwo);
```