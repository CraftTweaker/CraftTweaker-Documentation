# 貯水池:

## registerReservoir

| タイプ   | データタイプ                                       |
| ----- | -------------------------------------------- |
| 名前識別子 | 文字列型                                         |
| Fluid | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 最小サイズ | 整数                                           |
| 最大サイズ | 整数                                           |
| 補充率   | 整数                                           |
| 重量    | 整数                                           |

### 重量

重量は、特定の流体貯水池を含むチャンクの重量チャンスです。 重量は、合計でXとしてカウントされます。

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

それぞれのエントリには、以下の重み付きの可能性があります。

    5 in 34
    5 in 34
    6 in 34
    8 in 34
    10 in 34
    

### コード例:

```zenscript
mods.immersivepetroleum.Reservoir.registerReservoir(String name, ILiquidStack fluid, int minSize, int maxSize, int replenishRate, int weight);
mods.immursivetroleum.reservoir.registervoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```