# Proveedor de colaboradores

Puedes crear un MaterialPartColorSupplier de un objeto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) que se utilizará cada vez que se solicite.

## Importar la clase

Si necesitas importar la clase, aquí vas:

```zenscript
importar mods.contenttweaker.MaterialPartColorSupplier;
```

## Métodos estáticos

Los métodos estáticos pueden ser invocados en el paquete, no en instancias de la clase.

```zenscript
//mods.contenttweaker.MaterialPartColorSupplier.create(IMaterialPart materialParte);
mods.contenttweaker.MaterialPartColorSupplier.create(myMaterialPart);
```