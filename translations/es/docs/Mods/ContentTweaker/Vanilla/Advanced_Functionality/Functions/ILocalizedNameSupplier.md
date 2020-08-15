# Proveedor de ILocalización

La función ILocalizedNameSupplier se utiliza para determinar programáticamente el nombre de un [elemento](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) para mostrar.

## importando la clase

Si quieres importar la clase de la función, aquí vas:

```zenscript
importar mods.contenttweaker.LocalizedNameSupplier;
```

## Configuración de la función

La función devuelve una cadena y toma un [ItemStack](/Vanilla/Items/IItemStack/) como parámetro de entrada simple.

```zenscript
item.setLocalizedNameSupplier(function(itemStack) {
    return "mySuperItem";
});
```