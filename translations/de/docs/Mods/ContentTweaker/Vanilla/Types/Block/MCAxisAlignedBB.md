# MCAxisAlignedBB

Ein MineCraft-Achsenobjekt erlaubt es dir, die Begrenzungsrahmen eines [Blocks](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) zu einer gegebenen Cuboid Form zu ändern.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.AxisAlignedBB;`

## Aufruf eines MCAxisAlignedBB-Objekts

Sie können ein solches Objekt mit einem [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) `axisAusrichten BB` Eigenschaft erhalten.  
Alternativ können Sie dieses Paket verwenden, um ein neues MCAxisAlignedBB-Objekt zu erstellen:

```zenscript
AxisAlignedBB.create(double minX, double minY, double minZ, double maxX, double maxY, double maxZ);
```

Alle Parameter für diese Funktion sind Doppelpunkte zwischen 0 und 1!

## Zeneigenschaften

Sie können jede Eigenschaft mit `getProperty()` oder `object.property` abrufen und festlegen.

| ZenEigenschaft | Type   |
| -------------- | ------ |
| minX           | double |
| minY           | double |
| minZ           | double |
| maxX           | double |
| maxY           | double |
| maxZ           | double |