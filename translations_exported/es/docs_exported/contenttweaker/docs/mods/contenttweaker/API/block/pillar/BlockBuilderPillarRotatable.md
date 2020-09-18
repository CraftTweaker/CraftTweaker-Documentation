# BlockBuilderPillarRotable

Un Constructor de Bloques especial que te permite crear bloques que pueden ser girados de la misma manera que los registros. <p> Esto significa que tiene una textura para la parte superior e inferior y una textura para los lados. Por defecto las ubicaciones de estos lados son el nombre del bloque, seguido por y `_end` o `lados`. Como en la mayoría de las cosas aquí, las imágenes de ejemplo se generan para usted por defecto, sin embargo.

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable
```

## Interfaces implementadas
BlockBuilderPillarRotatable implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Métodos
### construir

Instruye CoT para construir lo que se supone que este constructor está construyendo.

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Parámetro            | Tipo   | Descripción                              |
| -------------------- | ------ | ---------------------------------------- |
| ubicacin del recurso | Cadena | La ruta de recursos para dar este bloque |


### sin textura final

Permite sobreescribir la ruta de la textura que deben usar los lados finales (arriba/abajo). Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Parámetro  | Tipo                                                                             | Descripción                                         |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------------------------- |
| endTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La textura que se utilizará para los lados finales. |



Permite sobreescribir la ruta de la textura que deben usar los lados finales (arriba/abajo). Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto. Usa una función que toma el nombre del bloque como entrada y devuelve la textura final para ella.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| Parámetro  | Tipo                                                                                                                                                                                                    | Descripción       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| endTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La función a usar |


### sin textura lateral

Le permite anular la ruta de la textura que los lados (todo menos arriba/abajo) deben utilizar. Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Parámetro    | Tipo                                                                             | Descripción                       |
| ------------ | -------------------------------------------------------------------------------- | --------------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La textura a usar para los lados. |



Le permite anular la ruta de la textura que los lados (todo menos arriba/abajo) deben utilizar. Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto. Usa una función que toma el nombre del bloque como entrada y devuelve la textura final para ella.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parámetro    | Tipo                                                                                                                                                                                                    | Descripción       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La función a usar |



