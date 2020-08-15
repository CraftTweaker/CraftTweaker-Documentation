# EntityLivingSpawnEvent

El evento EntityLivingSpawn se activa cada vez que una entidad intenta unirse o abandonar un mundo.  
Tiene una subclase, la EntityLivingExtendedSpawnEvent que también contiene una referencia [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic).

## Clase de evento

Tendrás que lanzar el evento en el encabezado de la función como esta clase:  
`más defensivo. vent.EntityLivingSpawnEvent`  
`Crafttweaker. vent.EntityLivingExtendedSpawnEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase anterior y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

EntityLivingSpawn Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter                    | Tipo                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| `mundo`                      | [IWorld](/Vanilla/World/IWorld/)                             |
| `x`                          | flotante                                                     |
| `y`                          | flotante                                                     |
| `z`                          | flotante                                                     |
|                              |                                                              |
| `generador` (Solo Extendido) | [IMobSpawnerLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## Funciones del evento

El evento de desaparición también ofrece tres funciones para cambiar el resultado del evento:

| Método     | Descripción                                                |
| ---------- | ---------------------------------------------------------- |
| `permitir` | Fuerza la entidad a (de)spawn                              |
| `negar`    | Obliga a la entidad a no aparecer (de)spawn                |
| `pasar`    | Establece el resultado del evento en el estado por defecto |