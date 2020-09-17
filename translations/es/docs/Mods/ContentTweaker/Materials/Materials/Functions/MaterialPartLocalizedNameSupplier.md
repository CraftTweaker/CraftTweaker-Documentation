# Proveedor de un socio localizado

Usted puede crear un MaterialPartLocalizedNameSupplier formulario un objeto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) que se utilizará cada vez que se solicite.

## Importar la clase

Si necesitas importar la clase, aquí vas:

```zenscript
importar mods.contenttweaker.MaterialPartLocalizedNameSupplier;
```

## Métodos estáticos

Los métodos estáticos pueden ser invocados en el paquete, no en instancias de la clase.

```zenscript
//mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(IMaterialPart materialParte);
mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(myMaterialPart);
```