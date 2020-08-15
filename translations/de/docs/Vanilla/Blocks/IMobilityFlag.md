# IMobilityFlag

Mit der IMobilityFlag Schnittstelle können Sie [IBlockState's](/Vanilla/Blocks/IBlockState/) mögliche mobilityFlags erhalten.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren Sie craftweaker.block.IMobilityFlag;`

## ZenMethoden

#### Matches

Sie können überprüfen, ob zwei IMobilityFlag-Objekte gleich sind:  
Gibt einen Bool zurück.

```zenscript
flagOne.matches(andere);
```

## Aufzählungen

Die MobilityFlag-Schnittstelle hat 5 statische Methoden, jede gibt das angegebene IMobilityFlag Objekt zurück.

```zenscript
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```