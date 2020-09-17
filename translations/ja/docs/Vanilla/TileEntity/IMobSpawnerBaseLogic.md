# IMobSpawnerBaseLogic

IMobSpawnerBaseLogicオブジェクトには、何かをどのように生成するか、どこで生成するかに関するあらゆる種類の情報が含まれています。

## クラスのインポート

エラーを回避するには、 [クラスをインポート](/AdvancedFunctions/Import/) する必要があります。  
`import crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters

| ZenGetter  | ZenSetter          |                                       |
| ---------- | ------------------ | ------------------------------------- |
| `nbtData`  | `nbtData`          | [IData](/Vanilla/Data/IData/)         |
|            | `entityDefinition` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `世界`       |                    | [IWorld](/Vanilla/World/IWorld)       |
| `blockPos` |                    | [IBlockPos](/Vanilla/World/IBlockPos) |

## ZenMethods

```zenscript
void updateSpawner();

void setDelayToMin();
```