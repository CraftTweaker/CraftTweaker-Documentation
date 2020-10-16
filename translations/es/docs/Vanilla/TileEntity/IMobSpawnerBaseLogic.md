# IMobSpawnerBaseLogic

El objeto IMobSpawnerBaseLogic contiene todo tipo de información sobre cómo y dónde generar algo para los desovadores de criaturas.

## Importing the class

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters/ZenSetters

| ZenGetter          | ZenSetter          | Description                            | Type                                                      |
| ------------------ | ------------------ | -------------------------------------- | --------------------------------------------------------- |
| `Datos inmediatos` | `Datos inmediatos` | Datos NBT para el spawner. (Ver abajo) | [IData](/Vanilla/Data/IData/)                             |
| `entidad definida` | `entidad definida` | Definición de entidad a ser generada.  | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`            |                    | Mundo al que pertenece el spawner.     | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos`         |                    | La posición del bloque de spawner.     | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## ZenMethods

```zenscript
void updateSpawner(); // Actualiza el spawner para generar una entidad y marca el temporizador de spawn.

void setDelayToMin(); // Establece el retardo del spawner al retardo mínimo para el siguiente spawn.
```