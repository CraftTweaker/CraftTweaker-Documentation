# IMobSpawnerLogic

El objeto IMobSpawnerBaseLogic contiene todo tipo de información sobre cómo y dónde generar algo.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters

| ZenGetter          | Ajuste             |                                       |
| ------------------ | ------------------ | ------------------------------------- |
| `Datos inmediatos` | `Datos inmediatos` | [IData](/Vanilla/Data/IData/)         |
|                    | `entidad definida` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `mundo`            |                    | [IWorld](/Vanilla/World/IWorld)       |
| `bloquear Pos`     |                    | [IBlockPos](/Vanilla/World/IBlockPos) |

## Métodos

```zenscript
nulo updateSpawner();

void setDelayToMin();
```