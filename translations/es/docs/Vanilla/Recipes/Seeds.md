# Semillas

Las semillas son cosas que se obtienen al golpear hierba alta.

## Imprimir todas las semillas en el registro

Este comando imprimirá todas las semillas registradas en el registro.

Necesita ser ejecutado por un jugador o consola, no puede ser escrito en un archivo zs.

    1.12
    /ct seeds
    
    pre-1.12
    /mt seeds
    

## Añadir una semilla

Añade `ítem` como gota de semilla.  
**Los pesos son relativos a la semilla de hierba, ¡que tiene un peso de 10 (10%)!**

```zenscript
vanilla.seeds.addSeed(item);
```

`elemento` es un [weightedItemStack](/Vanilla/Items/WeightedItemStack/). ¿Qué significa esto? Significa simplemente que tienes que darle un porcentaje como este:

```zenscript
//añade zanahorias con un peso de 1
vanilla.seeds.addSeed(<minecraft:carrot> % 1);
```

## Eliminar una semilla

Detiene `elemento` de ser una gota de semilla.

```zenscript
vanilla.seeds.removeSeed(item);
```

`elemento` es un [IIngrediente](/Vanilla/Variable_Types/IIngredient/).

## Recuperar todas las semillas registradas

Devuelve todos los elementos como una lista de [weightedItemStack](/Vanilla/Items/WeightedItemStack/).

```zenscript
val seedList = vanilla.seeds.seeds.seeds;

para artículo en seedList {
    print("Item: " ~ item. tack.displayName ~ " || Probabilidad: " ~ item.percent ~ "%");
}
```