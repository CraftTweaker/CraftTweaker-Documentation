# IExplosionEvent

This interface is extended by all explosion events. That means you can use the getters below to access the position details.

## クラスのインポート
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetters

| 名前 | タイプ                                    |
| -- | -------------------------------------- |
| 世界 | [IWorld](/Vanilla/World/IWorld/)       |
| 位置 | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x  | double                                 |
| y  | double                                 |
| z  | double                                 |
