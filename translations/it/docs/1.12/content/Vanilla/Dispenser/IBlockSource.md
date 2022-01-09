# IBlockSource

The IBlockSource interface contains some information when a dispenser is activated.

## Importare la Classe

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.

`import crafttweaker.dispenser.IBlockSource;`

## ZenGetters

| ZenGetters | Tipo                                       | Descrizione                        |
| ---------- | ------------------------------------------ | ---------------------------------- |
| x          | double                                     | The x coordinate of the dispenser. |
| y          | double                                     | The y coordinate of the dispenser. |
| z          | double                                     | The z coordinate of the dispenser. |
| world      | [IWorld](/Vanilla/World/IWorld)            | The world of the dispenser.        |
| blockState | [IBlockState](/Vanilla/Blocks/IBlockState) | The block state of the dispenser.  |
| pos        | [IBlockPos](/Vanilla/World/IBlockPos)      | The position of the dispenser.     |
| facing     | [IFacing](/Vanilla/World/IFacing)          | The facing of the dispenser.       |
