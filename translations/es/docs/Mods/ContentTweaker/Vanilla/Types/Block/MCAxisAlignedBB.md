# MCAxisAlignedBB

Un objeto de caja límite alineada del eje de minería le permite cambiar los bordes del límite de un [bloque](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) a una forma de cuboide determinada.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.AxisAlignedBB;`

## Llamar a un objeto MCAxisAlignedBB

You can get such an object using a [Block's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) `axisAlignedBB` Property.  
Alternatively, you can use this package to create a new MCAxisAlignedBB object:

```zenscript
AxisAlignedBB.create(double minX, double minY, double minZ, double maxX, double maxY, double maxZ);
```

¡Todos los parámetros para esta función son dobles entre 0 y 1!

## Propiedades de Zeng

Puede obtener y configurar cada propiedad usando `getProperty()` o `object.property`.

| Propiedad zenica | Tipo  |
| ---------------- | ----- |
| minX             | doble |
| minY             | doble |
| minZ             | doble |
| maxX             | doble |
| maxY             | doble |
| maxZ             | doble |