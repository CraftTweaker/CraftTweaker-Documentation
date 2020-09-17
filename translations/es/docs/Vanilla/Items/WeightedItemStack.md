# Pila de objetos ponderada

Una pila de artículos ponderada es como una pila de artículos [normal](/Vanilla/Items/IItemStack/) pero tiene un porcentaje añadido a ella.  
Normalmente los utiliza cuando se trata de acciones basadas en porcentajes como gotas o salidas secundarias.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.item.WeightedItemStack;`

## Llamar a un pesadoItemStack

Puedes obtener una PesadItemStack de un [ItemStack](/Vanilla/Items/IItemStack/) usando el operador modulo o la función de peso en él.

```zenscript
val itemStack = <minecraft:dirt>;

//ambos crean un objeto weightedItemstack con una probabilidad de 20%
val wItemStack = itemStack % 20;
val wItemStack2 = itemStack. ocho(0.2);
```

## ZenGetters

| ZenGetter   | ¿Qué hace                                                               | Tipo de devolución                       |
| ----------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| pila        | Devuelve el itemStack asociado                                          | [IItemStack](/Vanilla/Items/IItemStack/) |
| oportunidad | Devuelve la oportunidad de la pila como decimal (por ejemplo, 0.2)      | flotante                                 |
| porcentaje  | Devuelve la probabilidad de la pila como porcentaje (por ejemplo, 20.0) | flotante                                 |