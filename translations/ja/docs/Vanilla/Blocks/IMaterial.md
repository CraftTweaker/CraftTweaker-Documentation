# IMaterial

IMaterial オブジェクトは、ブロックで作られている材料を表します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.block.IMaterial;`

## パラメータのない ZenGetters/ZenMethods

| ZenGetter       | ZenMethod           | Return Type |
| --------------- | ------------------- | ----------- |
| blocksLight     | blocksLight()       | bool        |
| blocksMovement  | blocksMovement()    | bool        |
| canBurn         | getCanBurn()        | bool        |
| mobilityFlag    | getMobilityFlag()   | 文字列         |
| 液体|<unk>        | isLiquid()          | bool        |
| 不透明な            | isOpaque()          | bool        |
| 交換可能            | isReplaceable()     | bool        |
| solid           | isSolid()           | bool        |
| toolNotRequired | isToolNotRequired() | bool        |
|                 | setReplaceable()    | IMaterial   |

## パラメータ付きのZenMethods

### 2つのIMaterialsが一致するかどうかを確認します。

Uses an IMaterial.  
Returns a bool.

```zenscript
materialObj.matches(IMaterial other);
```

## バニラのマインクラフト素材の取得

これらの方法でバニラのMinecraft素材を手に入れることができます

```zenscript
crafttweaker.blocks.IMaterial.air();
crafttweaker.blocks.IMaterial.anvil();
crafttweaker.blocks.IMaterial.barrier();
crafttweaker.blocks.IMaterial.cactus();
crafttweaker.blocks.IMaterial.cake();
crafttweaker.blocks.IMaterial.carpet();
crafttweaker.blocks.IMaterial.circuits();
crafttweaker.blocks.IMaterial.clay();
crafttweaker.blocks.IMaterial.cloth();
crafttweaker.blocks.IMaterial.coral();
crafttweaker.blocks.IMaterial.craftedSnow();
crafttweaker.blocks.IMaterial.dragonEgg();
crafttweaker.blocks.IMaterial.fire();
crafttweaker.blocks.IMaterial.glass();
crafttweaker.blocks.IMaterial.gourd();
crafttweaker.blocks.IMaterial.grass();
crafttweaker.blocks.IMaterial.ground();
crafttweaker.blocks.IMaterial.ice();
crafttweaker.blocks.IMaterial.iron();
crafttweaker.blocks.IMaterial.lava();
crafttweaker.blocks.IMaterial.leaves();
crafttweaker.blocks.IMaterial.packedIce();
crafttweaker.blocks.IMaterial.piston();
crafttweaker.blocks.IMaterial.plants();
crafttweaker.blocks.IMaterial.portal();
crafttweaker.blocks.IMaterial.redstoneLight();
crafttweaker.blocks.IMaterial.rock();
crafttweaker.blocks.IMaterial.sand();
crafttweaker.blocks.IMaterial.snow();
crafttweaker.blocks.IMaterial.sponge();
crafttweaker.blocks.IMaterial.structureVoid();
crafttweaker.blocks.IMaterial.tnt();
crafttweaker.blocks.IMaterial.vine();
crafttweaker.blocks.IMaterial.water();
crafttweaker.blocks.IMaterial.web();
crafttweaker.blocks.IMaterial.wood();
```