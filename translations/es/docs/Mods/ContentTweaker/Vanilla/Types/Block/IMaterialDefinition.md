# Definición inmaterial

Un objeto IMaterialDefinition representa una definición de material en el juego. Se necesita una definición de material si quieres crear un nuevo bloque.

# Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.BlockMaterial;`

## Llamando a un objeto IMaterialDefinition

Puedes obtener tal objeto usando el [Manejador de bloques de bloques de soporte](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>`

## ZenGetters/ZenMethods sin parámetros

| ZenGetter                | Método                          | Tipo de devolución                                                      |
| ------------------------ | ------------------------------- | ----------------------------------------------------------------------- |
| blocksLight              | blocksLight()                   | pluma                                                                   |
| bloquesMovimiento        | blocksMovement()                | pluma                                                                   |
| canQuemar                | getCanBurn()                    | pluma                                                                   |
| mobilityFlag             | getMobilityFlag()               | [Reacción Push](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| líquido                  | isLiquid()                      | pluma                                                                   |
| opaco                    | isOpaque()                      | pluma                                                                   |
| reemplazable             | es reemplazable()               | pluma                                                                   |
| solid                    | isSolid()                       | pluma                                                                   |
| herramienta no requerida | no se requiere la herramienta() | pluma                                                                   |

## Compara dos BlockMateriales

Puedes usar el operador `==` para ver si dos Definiciones Materiales son iguales

```zenscript
if(materialA == materialB)
    impresión ("¡éxito!");
```