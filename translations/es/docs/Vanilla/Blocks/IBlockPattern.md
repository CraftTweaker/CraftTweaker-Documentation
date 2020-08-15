# Patrón de IBlock

Un IBlockPattern es una interfaz que permite combinar varios bloques en un solo objeto.  
Es comparable a lo que es la interfaz [IIngredient](/Vanilla/Variable_Types/IIngredient/) a [ItemStacks](/Vanilla/Items/IItemStack/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.block.IBlockPattern;`

## Llamando a un objeto IBlockPattern

Técnicamente, cada vez que llamas un objeto [IBlock](/Vanilla/Blocks/IBlock/) , llamas a un objeto IBlockPattern.  
Pero hay casos en los que se obtiene explícitamente un objeto IBlockPattern como devolución.

* O dos [IBlocks](/Vanilla/Blocks/IBlock/)

## ZenGetters

| ZenGetter          | ¿Qué hace                                                 | Tipo de devolución                        |
| ------------------ | --------------------------------------------------------- | ----------------------------------------- |
| bloques            | Enumera todos los bloques posibles para este objeto       | Lista <[IBlock](/Vanilla/Blocks/IBlock/)> |
| nombre de pantalla | Devuelve los nombres de pantalla de los bloques de ajuste | cadena                                    |

## O

Puede O dos objetos IBlockPattern usando el Operador `|`

## Emparejando

Puedes comprobar si un IBlockPatternObject contiene otro usando la palabra clave `in` .  
Por ejemplo, podría comprobar si un bloque está en un IBlockPattern.