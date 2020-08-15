# Escaleras de BlockBuilder

Un Constructor de Bloques especial que te permite crear escaleras. <p> Las escaleras tendrán no una sino tres texturas que necesitarás ofrecer: Una para arriba, una para el fondo y otra para los lados. Por defecto, estas texturas usarán su nombre de bloque como nombre, sufijo por `_top`, `_bottom` o `_sides`. Como en la mayoría de las cosas aquí, las imágenes de ejemplo se generan para usted por defecto, sin embargo.

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.block.stairs.Escaleras de BlockBuilder
```

## Interfaces implementadas
BlockBuilderStairs implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Métodos
### construir

Instruye CoT para construir lo que se supone que este constructor está construyendo.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parámetro            | Tipo   | Descripción                              |
| -------------------- | ------ | ---------------------------------------- |
| ubicacin del recurso | Cadena | La ruta de recursos para dar este bloque |


### withBottomTexture

Le permite anular la ruta de la textura que debe utilizar la parte inferior. Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parámetro        | Tipo                                                                             | Descripción                            |
| ---------------- | -------------------------------------------------------------------------------- | -------------------------------------- |
| textura inferior | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La textura a usar en la parte inferior |



Le permite anular la ruta de la textura que debe utilizar la parte inferior. Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto. Usa una función que toma el nombre del bloque como entrada y devuelve la textura final para ella.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nuevo BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as function.Función<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parámetro        | Tipo                                                                                                                                                                                                  | Descripción       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| textura inferior | función.Función&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La función a usar |


### con la textura lateral

Le permite anular la trayectoria de la textura que los lados deben utilizar. Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nuevo BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parámetro    | Tipo                                                                             | Descripción                      |
| ------------ | -------------------------------------------------------------------------------- | -------------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La textura a usar para los lados |



Le permite anular la trayectoria de la textura que los lados deben utilizar. Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto. Usa una función que toma el nombre del bloque como entrada y devuelve la textura final para ella.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nuevo BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture como función.Función<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parámetro    | Tipo                                                                                                                                                                                                  | Descripción       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| sidesTexture | función.Función&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La función a usar |


### con TopTexture

Le permite anular la ruta de la textura que debe utilizar la parte superior. Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parámetro  | Tipo                                                                             | Descripción                            |
| ---------- | -------------------------------------------------------------------------------- | -------------------------------------- |
| topTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La textura a usar en la parte superior |



Le permite anular la ruta de la textura que debe utilizar la parte superior. Si ese espacio de nombres de la textura está en el espacio de nombres de CoT o cualquiera de sus complementos (que lo soportan), entonces la imagen se creará por defecto. Usa una función que toma el nombre del bloque como entrada y devuelve la textura final para ella.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nuevo BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Función<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Parámetro  | Tipo                                                                                                                                                                                                  | Descripción       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| topTexture | función.Función&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La función a usar |



