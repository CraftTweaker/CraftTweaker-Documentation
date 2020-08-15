# IEventPositionable

This interface is extended by all events whose position matters.  
That means you can use the getters below to access the position details.

## クラスのインポート

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IEventPositionable;`

## ZenGetters

| 名前       | タイプ                                    |
| -------- | -------------------------------------- |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | int                                    |
| y        | int                                    |
| z        | int                                    |