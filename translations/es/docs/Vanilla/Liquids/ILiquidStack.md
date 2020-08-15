# ILiquidStack

Un LiquidStack consiste en una [Definición de líquido](/Vanilla/Liquids/ILiquidDefinition/) , así como una etiqueta opcional y un valor de cantidad opcional.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.liquid.ILiquidStack;`

## Creando un ILiquidStack

Un ILiquidStack se puede crear usando el [Láquido Manejador de Bracetes](/Vanilla/Brackets/Bracket_Liquid/)

```zenscript
//see The liquid bracket Handler for further information
val lava = <liquid:lava>;

//liquid. ithTag(Tag as IData)
val lavaWithTag = <liquid:lava>. ithTag(DATA);

//líquido * cantidad en millonarios (-> 1000 = 1 cubo)
val lavaWithAmount = <liquid:lava> * 1000;
```

## Obtener propiedades de fluido

Como un ILiquidStack representa un líquido, seguramente también debe haber una forma de recuperar las propiedades del fluido.  
Comprueba la tabla para ver lo que puedes recuperar del objeto ILiquidStack usando ZenGetters.

| Zengetter          | ¿Qué es esto?                                                | Tipo de devolución                                        | Ejemplo                                   |
| ------------------ | ------------------------------------------------------------ | --------------------------------------------------------- | ----------------------------------------- |
| nombre             | Esto devuelve el nombre del líquido no localizado            | cadena                                                    | `test = <liquid:lava>.name;`        |
| nombre de pantalla | Esto devuelve el nombre del líquido localizado               | cadena                                                    | `test = <liquid:lava>.displayName;` |
| monto              | Esto devuelve la cantidad del ILiquidObject                  | int                                                       | `test = <liquid:lava>.amount;`      |
| luminosidad        | Esto devuelve la luminosidad del líquido referido            | int                                                       | `test = <liquid:lava>.luminosidad;` |
| densidad           | Esto devuelve la densidad del líquido referido               | int                                                       | `prueba = <liquid:lava>.density;`   |
| temperatura        | Esto devuelve la temperatura del líquido referido            | int                                                       | `test = <liquid:lava>.temperature;` |
| viscosidad         | Esto devuelve la viscosidad del líquido referido             | int                                                       | `test = <liquid:lava>.viscosity;`   |
| gaseoso            | Esto devuelve si el líquido referido es gaseoso              | boolean                                                   | `test = <liquid:lava>.gaseoso;`     |
| etiqueta           | Esto devuelve la etiqueta de ILiquidObject                   | [IData](/Vanilla/Data/IData/)                             | `test = <liquid:lava>.tag;`         |
| definición         | Esto devuelve la definición del líquido referido (ver abajo) | [Definición ILiquid](/Vanilla/Liquids/ILiquidDefinition/) | `test = <liquid:lava>.definition;`  |

# Implementación de IIngrediente

Jargón Java: ILiquidStack implementa IIngredient. In other words, all methods that can be used in [IIngredients](/Vanilla/Variable_Types/IIngredient/) can also be used for ILiquidStacks Refer to the IIngredient entry for further information on this. Aquí hay algunos casos especiales, ya que los líquidos no son artículos

* No puedes marcar ILiquidStacks, y obtienes nulos de intentar recuperar una marca de ILiquidStack
* .items devuelve una lista vacía
* .itemArray devuelve un array vacío
* .líquidos devuelven este líquido como ILiquidStack (así, exactamente este objeto)
* LiquidStacks no puede tener transformadores y pedir transformadores siempre devuelve falso
* LiquidStacks no puede tener condiciones (.only no funciona)
* La coincidencia con objetos siempre devuelve falso