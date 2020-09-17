# 热电器
热电包可以用来注册或取消区块的温度，以使它们能够为沉浸式工程热电发电机供电。 液体本来就有温度，所以不会也不能注册。 温度在克尔文岛。

## 调用包
你可以使用 `mods.immersiveengineering.Thermoway` 来调用热电包.

## 添加温度源

| 必填 | 类型     | 数据类型                                                    |
| -- | ------ | ------------------------------------------------------- |
| 必要 | 目标块    | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必要 | 温度 (K) | 整型                                                      |

### 例子
```zenscript
//示例：
mods.immersiveengineering.Thermoely.addTemperatureSource(IIngredient source,int temperaturesource);

mods.immersiveengineering.Thermoely.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## 删除温度源

| 必填 | 类型  | 数据类型                                                    |
| -- | --- | ------------------------------------------------------- |
| 必填 | 目标块 | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |

### 例子
```zenscript
//示例：
mods.immersiveengineering.Thermoely.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoely.removeTemperatureSource(<minecraft:obsidian>);
```
