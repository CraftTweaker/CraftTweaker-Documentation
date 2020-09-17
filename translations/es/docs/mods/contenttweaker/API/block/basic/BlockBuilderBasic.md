# BlockBuilderBasic

Este constructor construye el tipo de bloque que se utiliza por defecto en [mods.contenttweaker.block.basic. lockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) Este constructor no ofrece propiedades especiales para establecer, sólo puede construirlo.

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Interfaces implementadas
BlockBuilderBasic implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Métodos
### construir

Instruye CoT para construir lo que se supone que este constructor está construyendo.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parámetro            | Tipo   | Descripción                              |
| -------------------- | ------ | ---------------------------------------- |
| ubicacin del recurso | Cadena | La ruta de recursos para dar este bloque |



