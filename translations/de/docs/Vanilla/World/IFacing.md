# IFacing

Mit dem IFacing Interface können Sie [IBlockPos](/Vanilla/World/IBlockPos/) mögliche Richtungen erhalten.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere craftweaker.world.IFacing;`

## Enumerations

Das Facing-Interface hat 6 statische Methoden, die die besagte Richtung zurückgeben.  
Es hat auch noch eines, das die Richtung als Zeichenketteneingabe nimmt (z.B. `"NORTH"`)

```zenscript
crafttweaker.world.IFacing.north()
crafttweaker.world.IFacing.east()
crafttweaker.world.IFacing.south()
crafttweaker.world.IFacing.west()
crafttweaker.world.IFacing.down()
crafttweaker.world.IFacing.up()


crafttweaker.world.IFacing.fromString(String Name);
```

## ZenGetters/ZenMethods without parameters

| ZenGetter       | ZenMethod  | Rückgabetyp |
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