# IEntityDrop

Una EntityDrop se refiere a una gota de una [Entidad](/Vanilla/Entities/IEntityDefinition/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.IEntityDrop;`

## ZenGetters

Usted puede recuperar esta información de ellos.

| ZenGetter    | ¿Qué hace                                                  | Tipo de devolución                       | Uso                  |
| ------------ | ---------------------------------------------------------- | ---------------------------------------- | -------------------- |
| oportunidad  | Devuelve la oportunidad de la gota.                        | flotante                                 | `soltar.oportunidad` |
| máx          | Devuelve la cantidad máxima de la gota.                    | int                                      | `drop.max`           |
| min          | Devuelve la cantidad mínima de la gota.                    | int                                      | `drop.min`           |
| solo jugador | Devuelve si la gota es sólo de jugador.                    | boolean                                  | `drop.playerOnly`    |
| range        | Devuelve el rango mínimo al máximo de cantidad de la gota. | Rango entero                             | `soltar.rango`       |
| pila         | Devuelve el elemento soltado.                              | [IItemStack](/Vanilla/Items/IItemStack/) | `soltar.stack`       |