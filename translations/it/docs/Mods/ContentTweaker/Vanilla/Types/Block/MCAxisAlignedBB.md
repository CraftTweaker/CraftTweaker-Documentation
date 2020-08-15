# MCAxisAlignedBB

Un oggetto MineCraft Axis Alligned Boundary Box permette di cambiare i bordi di un [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) in una data forma di cuboid.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.AxisAlignedBB;`

## Chiamare un oggetto MCAxisAlignedBB

È possibile ottenere un tale oggetto utilizzando un [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) `axisAlignedBB` Property.  
In alternativa, è possibile utilizzare questo pacchetto per creare un nuovo oggetto MCAxisAlignedBB:

```zenscript
AxisAlignedBB.create(doppia minX, doppia minY, doppia minZ, doppia maxX, doppia maxY, doppia maxZ);
```

Tutti i parametri per questa funzione sono doppi tra 0 e 1!

## ZenProperties

È possibile ottenere e impostare ogni proprietà utilizzando `getProperty()` o `object.property`.

| ZenProperty | Tipo   |
| ----------- | ------ |
| minX        | doppia |
| minY        | doppia |
| minZ        | doppia |
| maxX        | doppia |
| maxY        | doppia |
| maxZ        | doppia |