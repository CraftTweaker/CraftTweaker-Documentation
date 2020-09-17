# Pila líquida ponderada

Una pila de líquido ponderada es como una normal [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) pero tiene un porcentaje añadido a ella.  
Normalmente los utiliza cuando se trata de acciones basadas en porcentajes como gotas o salidas secundarias.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.item.WeightedLiquidStack;`

## Llamar a una pila de peso

Puede derivar un weightedLiquidStack de un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) usando el operador modulo o la función de peso en él.

```zenscript
val liquidStack = <liquid:lava>;

//ambos crean un objeto pesadoLiquidstack con una probabilidad de 20%
val wLiquidStack = liquidStack % 20;
val wLiquidStack2 = liquidStack. ocho(0.2);
```

## ZenGetters

| ZenGetter   | ¿Qué hace                                                               | Tipo de devolución                             |
| ----------- | ----------------------------------------------------------------------- | ---------------------------------------------- |
| pila        | Devuelve el LiquidStack asociado                                        | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| oportunidad | Devuelve la oportunidad de la pila como decimal (por ejemplo, 0.2)      | flotante                                       |
| porcentaje  | Devuelve la probabilidad de la pila como porcentaje (por ejemplo, 20.0) | flotante                                       |