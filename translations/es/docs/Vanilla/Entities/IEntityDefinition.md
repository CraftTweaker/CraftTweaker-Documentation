# Definición de la entidad

Esto suena aterrador, así que ¿qué significa? Básicamente, es una referencia a una entidad registrada en el juego, así que es una referencia a, digamos un mob en el juego.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.IEntityDefinition;`

## Llamando a un objeto IEntityDefinition

```zenscript
//Estos devuelven un objeto IEntityDefinition
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("oveja");

```

## Funciones

So, this is where it gets interesting: What can we do with it, now that we created that thing?

### id

Devuelve el ID como cadena

```zenscript
//devuelve "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### nombre

Devuelve el nombre como cadena

```zenscript
//returns "Sheep"
<entity:minecraft:sheep>.name;
```

### crear entidad

El primer método sólo crea una entidad en la ubicación dada.  
El segundo también la genera.

```zenscript
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(world, blockPos);
```

`mundo` es un objeto [IWorld](/Vanilla/World/IWorld/) .  
`blockPos` es un objeto [IBlockPos](/Vanilla/World/IBlockPos/).

## Gotas

Incluso podemos añadir y/o quitar gotas de ratones, ¿no es tan grande?

### Añadir soltar normal

Esto añade una gota normal, una gota que puede ocurrir cuando el mob es asesinado por cualquier medio.

```zenscript
val entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,chance);
entity.addDrop(<minecraft:apple>);

//addDrop(weightedItem, min, max);
entity.addDrop(<minecraft:stone> % 20);
```

`elemento` es el elemento a añadir como soltar y un [ItemStack](/Vanilla/Items/IItemStack/) o un [WeightedItemStack](/Vanilla/Items/WeightedItemStack/).  
`min` es la cantidad mínima que se cae y un entero. Esto es opcional.  
`max` es la cantidad máxima que se cae y un entero. Esto es opcional.  
`oportunidad` es la oportunidad de soltar. Esto es opcional. No es necesario si usas una [weightedItemStack](/Vanilla/Items/WeightedItemStack/) en lugar de `elemento`

### Añadir soltar jugador

Igual que las gotas normales, pero sólo si la entidad fue asesinada por un jugador.

```zenscript
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### Añadir función de soltar

Una función drop es llamada cada vez que la entidad asociada es asesinada. Puedes usar esto si necesitas comprobar los requisitos para antes de soltar algo, como soltar en un cierto bioma y cosas.  
Necesitarás una [IEntityDropFunction](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10;
});
```

### Eliminar

Esto elimina una gota.

```zenscript
val entity = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`ítem` es el elemento a eliminar de ser un soltado y un [ItemStack](/Vanilla/Items/IItemStack/).

### Borrar gotas

Esto elimina todas las gotas.

```zenscript
val entity = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### Obtener

Esto devuelve todos los gotas que se añadieron a través de CT como lista de objetos de [IEntityDrop](/Vanilla/Entities/IEntityDrop/).

```zenscript
val entity = <entity:minecraft:sheep>;

//drops;
val dropList = entity.drops;
```