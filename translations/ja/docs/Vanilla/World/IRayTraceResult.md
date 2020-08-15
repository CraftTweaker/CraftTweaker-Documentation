# IrayTraceResult

プレーヤーが何かを見ているかクリックしているとき、彼はそれがヒットする必要があるもの、またはミスにヒットするまで行く線を発生します。  
このようなヒットの結果は IrayTraceResult オブジェクトです。

## クラスのインポート

エラーを避けるには、クラスを [インポート](/AdvancedFunctions/Import/) する必要があります。  
`import crafttweaker.world.IRayTraceResult`

## ZenGetters

All you can do is retrieve information from these objects, here's which:  
Be careful though, since all getters that do not return a bool can return `null`!

| 名前       | タイプ                                    |
| -------- | -------------------------------------- |
| isMiss   | bool                                   |
| isEntity | bool                                   |
| isBlock  | bool                                   |
| エンティティ   | [IEntity](/Vanilla/Entities/IEntity/)  |
| blockPos | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit  | [IFing](/Vanilla/World/IFacing/)       |