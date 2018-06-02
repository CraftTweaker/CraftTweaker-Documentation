# 矿床

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明数组），最为安全、也是最为推荐的方式就是导入相关的包。 `import mods.immersiveengineering.MineralMix;`.

## 失败几率
在对象上使用[ZenSetter/Getter]以获取或设置矿床矿物失败概率

## 获取矿物

|是否必要   |类型                 |数据类型  |
|----------|---------------------|-----------|
|必要      |名称                 |字符串     |

```JAVA
//例:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```



## 添加矿物

|是否必要  |类型                 |数据类型  |
|----------|---------------------|-----------|
|必要      |Ore（矿物）          |字符串     |
|必要      |Chance（概率）        |双精度型     |

```
mineralMixObject.addOre("minecraft:iron_ore", 0.5);
```

## 移除矿物

|是否必要   |类型                 |数据类型  |
|----------|---------------------|-----------|
|必要      |Ore（矿物）           |字符串     |

```
mineralMixObject.removeOre("minecraft:iron_ore");
```

## 失败几率获取/设置

### 例子
```JAVA
//获取
mineralMixObject.failchance;

//设置
mineralMixObject.failchance = 0.5;
```



## 完整例子
```JAVA
//例:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Get The Mineral Mix
mods.immersiveengineering.Excavator.addMineral("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral("Iron_Ore");

Iron.addOre("oreIron", 0.5);

//输出最初的失败概率
print(Iron.failChance);

//将失败概率设为25%
Iron.failChance = 0.25;

//输出失败概率
print(Iron.failChance);

//将失败概率设为50%
Iron.failChance = 0.5;

//输出最后的失败概率
print(Iron.failChance);
```
