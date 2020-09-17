# IPlayer

La interfaz de IPlayer te permite ver cierta información sobre un jugador específico e interactuar con éste. Principalmente utilizado en las funciones de Manejadores de Eventos y Recetas.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.player.IPlayer;`

## Extendiendo IEntityLivingBase e IUser

IPlayer extiende [ItityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Esto significa que todas las funciones disponibles para [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) Objetos también están disponibles para Objetos IPlayer  
IPlayer también extiende [IUser](/Vanilla/Players/IUser/). Esto significa que todas las funciones disponibles para [IUser](/Vanilla/Players/IUser/) Objetos también están disponibles para Objetos IPlayer

## Zengetters

Los zengetters son para recuperar información. Normalmente se asigna a una variable o se usa en un método/función.

| Zengetter                    | ¿Qué hace                                                                                                                 | Tipo de devolución                         | Uso                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------- |
| id                           | devuelve el id del jugador                                                                                                | cadena                                     | `jugador.id`                           |
| nombre                       | devuelve el nombre del jugador                                                                                            | cadena                                     | `jugador.nombre`                       |
| datos                        | devuelve los datos del jugador                                                                                            | [IData](/Vanilla/Data/IData/)              | `jugador.datos`                        |
| xp                           | devuelve el nivel de experiencia del jugador. También se puede usar para establecer el nivel de experiencia de un jugador | int                                        | `jugador.xp`                           |
| tamaño de la barra de acceso | devuelve el tamaño de la barra de acceso                                                                                  | int                                        | `jugador.hotbarSize`                   |
| tamaño de inventario         | devuelve el tamaño del inventario del jugador                                                                             | int                                        | `tamaño del reproductor.inventorySize` |
| currentItem                  | devuelve el objeto que el jugador tiene actualmente                                                                       | [IItemStack](/Vanilla/Items/IItemStack/)   | `jugador.currentItem`                  |
| creativo                     | vuelve si el jugador está actualmente en modo creativo (modo de juego 1)                                                  | pluma                                      | `jugador.creativo`                     |
| aventura                     | vuelve si el jugador está actualmente en modo aventura (modo de juego 2)                                                  | pluma                                      | `jugador.aventura`                     |
| x                            | devuelve la posición X actual del jugador en el mundo                                                                     | doble                                      | `jugador.x`                            |
| y                            | devuelve la posición actual y del jugador en el mundo                                                                     | doble                                      | `jugador.y`                            |
| z                            | devuelve la posición z actual del jugador en el mundo                                                                     | doble                                      | `jugador.z`                            |
| posición                     | devuelve la posición actual del jugador. También se puede usar para establecer la posición de un jugador                  | [Posición 3f](/Vanilla/Utils/Position3f/)  | `posición del jugador`                 |
| foodStats                    | devuelve las estadísticas de la comida del jugador.                                                                       | [IFoodStats](/Vanilla/Players/IFoodStats/) | `player.foodStats`                     |

## Métodos

Zenmethods son para hacer cosas con otras cosas, en este caso con un jugador.

| Método                      | Tipo(s) de parámetro                      | ¿Qué hace                                                                        | Ejemplo                                      |
| --------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| remover XP (%)              | int                                       | Elimina los niveles de experiencia del jugador.                                  | `player.removeXP(1)`                         |
| actualizar(IData)           | [IData](/Vanilla/Data/IData/)             | Actualiza los datos del jugador a los IData proporcionados.                      |                                              |
| enviarChat(mensaje)         | string O IChatMessage                     | Envía al jugador un mensaje de chat.                                             | `player.sendChat("Hola mi viejo amigo")`     |
| getHotbarStack(índice)      | int                                       | Devuelve el elemento en el índice dado dentro de la barra de acceso del jugador. | `player.getHotbarStack(3)`                   |
| getInventario Pila (índice) | int                                       | Devuelve el elemento en el índice dado dentro del inventario del jugador.        | `player.getInventoryStack(3)`                |
| dar(elemento)               | [IItemStack](/Vanilla/Items/IItemStack/)  | Dale al jugador el objeto proporcionado. El objeto es un ItemStack.              | `jugador.give(<minecraft:gold_ingot>)` |
| teleport(posición)          | [Posición 3f](/Vanilla/Utils/Position3f/) | Teletransporta al jugador a la posición proporcionada en la misma dimensión      | `jugador.teleport(posición)`                 |
| executeCommand(raw)         | cadena                                    | Ejecuta el comando como el reproductor                                           | `player.executeCommand("kill")`              |