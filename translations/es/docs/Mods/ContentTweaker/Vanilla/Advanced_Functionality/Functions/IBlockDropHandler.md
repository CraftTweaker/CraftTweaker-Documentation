# IBlockDropHandler

La función IBlockDropHandler se utiliza para permitir un manejo avanzado de soltar bloques para [Bloques](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) creados con la [Fábrica de Vanilla](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/).

## Importar la clase

¿Quieres importar la clase? Aquí te ves:

```zenscript
importar mods.contenttweaker.DropHandler;
```

## Estructura de la función

La función es una función vacía que toma los siguientes parámetros:

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) solta.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) mundo -> el mundo en el que nos encontramos, posible un [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/), puede que quieras instanciar y revertir
- [Posición IBlockPos](/Vanilla/World/IBlockPos/) -> la posición del bloque
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) estado -> el estado de bloqueo del bloque
- int fortune -> el nivel de fortuna de la herramienta usada

Como este método no devuelve nada, todos los drops necesitan ser añadidos a la lista de `drops` usando los métodos expuestos.  
Lea sobre ellos [aquí](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/).

## Ejemplo

```zenscript
block.setDropHandler(function(drops, world, position, state, fortune) {

    drops.add(<item:minecraft:bedrock>);
    drops.add(<item:minecraft:carrot> % 50);

    return;
});
```