# IMachineRegistry

IMachineRegistry を使用して、新しい [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) をゲームに登録したり、その後以前に登録されたマシンを取得したりします。

## パッケージのインポート

If you want to shorten method calls or encounter any issues you might need to [import](/AdvancedFunctions/Import) the package.  
You can do so using

```zenscript
import extraautilities2.Tweaker.IMachineRegistry;
```

## マシンを作成

2種類の機械があります:

- マシン
- ジェネレーター

機械はエネルギーを消費し発電機はエネルギーを放出します さもなければほとんど同じように動作します

```zenscript
extrautilities2.Tweaker.IMachineRegistry.createNewMachine(
    name, 
    energyBufferSize, 
    energyTransferLimit, 
    inputSlots, 
    outputSlots, 
    frontTexture, 
    frontTextureActive, 
    color
);


extrautilities2.Tweaker.IMachineRegistry.createNewGenerator(
    name,
    energyBufferSize,
    energyTransferLimit,
    inputSlots,
    outputSlots,
    frontTexture,
    frontTextureActive,
    color
);
```

ご覧のとおり、両方のメソッドは同じパラメータを受け入れます。唯一の違いはエネルギーを必要とするか生成するかどうかです。  
パラメータは以下の通りです:

| 名称                  | タイプ                                                                 |
| ------------------- | ------------------------------------------------------------------- |
| name                | 文字列                                                                 |
| energyBufferSize    | int                                                                 |
| energyTransferLimit | int                                                                 |
| inputSlots          | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots         | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture        | 文字列                                                                 |
| frontTextureActive  | 文字列                                                                 |
| color (任意)          | int (デフォルトは `0xffff` (black))                                       |

スロットは [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) のリストを受け付けます。 リストはスロットのまわりで [] を使用することで、配列と同じ方法で作成できます。 Both methods return an [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) object that represents the created machine.  
Keep this in mind, as you need that object to create recipes later on!

## 既存のマシンを取得する

### マシン名で取得

レジストリを使用して既に生成されたマシンを取得することもできます：

```zenscript
extraautilities2.Tweaker.IMachineRegistry.getMachine(String name);
```

このメソッドは指定された名前のマシンを [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) または `null` として返します。

### 登録されたすべてのマシンを取得する

これにより、登録されたすべてのマシンが [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) のリストとして返されます。

```zenscript
extraautilities2.Tweaker.IMachineRegistry.getRegisterdMachineNames();
```

### XU2マシンを入手

XU2 mod から [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) オブジェクトとして以下のようにマシンを取得することもできます。

    extrautilities2.Tweaker.IMachineRegistry.crusher;
    extrautilities2.Tweaker.IMachineRegistry.enchanter;
    extrautilities2.Tweaker.IMachineRegistry.generator_culinary;
    extrautilities2.Tweaker.IMachineRegistry.generator_death;
    extrautilities2.Tweaker.IMachineRegistry.generator_dragon;
    extrautilities2.Tweaker.IMachineRegistry.generator_enchant;
    extrautilities2.Tweaker.IMachineRegistry.generator_ender;
    extrautilities2.Tweaker.IMachineRegistry.generator_furnace;
    extrautilities2.Tweaker.IMachineRegistry.generator_ice;
    extrautilities2.Tweaker.IMachineRegistry.generator_lava;
    extrautilities2.Tweaker.IMachineRegistry.generator_netherstar;
    extrautilities2.Tweaker.IMachineRegistry.generator_overclock;
    extrautilities2.Tweaker.IMachineRegistry.generator_pink;
    extrautilities2.Tweaker.IMachineRegistry.generator_potion;
    extrautilities2.Tweaker.IMachineRegistry.generator_redstone;
    extrautilities2.Tweaker.IMachineRegistry.generator_slime;
    extrautilities2.Tweaker.IMachineRegistry.generator_survivalist;
    extrautilities2.Tweaker.IMachineRegistry.generator_tnt;