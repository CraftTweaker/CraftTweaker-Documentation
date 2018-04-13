# 烧炼

Crafttweaker允许你`添加`和`移除`烧炼配方，以及改变物品的燃料值。


## 配方

### 移除

一共有两种方法移除烧炼配方，分别是:

```java
furnace.remove(output)
```

和

```java
furnace.remove(output, input);
```

第一个方法对移除的配方要求较低，它会移除所有输出为传入的`output`的烧炼配方。 
第二个方法对移除的配方要求更严格，会移除所有输入为传入的`input`且输出为传入的`output`的烧炼配方。

这里还有第三种移除烧炼配方的方法，然而它会移除所有游戏中注册的烧炼配方。

```java
furnace.removeAll();
```

### 添加

添加烧炼配方一共有两个命令:

```java
furnace.addRecipe(output, input);
//output 输出
//input 输入
```

和

```java
furnace.addRecipe(output, input, xp);
//output 输出
//input 输入
//xp 经验数
```

第一个方法会添加一个不给予任何经验的烧炼配方。

第二个方法会添加一个给予`xp`数量经验的烧炼配方。


## 燃料

### 设置

设置燃料燃烧值的指令是:

```java
furnace.setFuel(input, burnTime);
```

它将会把`input（输入）`物品的燃烧值设为`burntime（燃烧时间）`。
 
将`burntime`设置为`0`会使`input`不能作为燃料。

### 获取

检索物品燃烧值的指令是:

```java
furnace.getFuel(item); 
//item 物品
```

将以整数形式返回燃烧值

## 例子

### 移除

这将移除所有输入为`<minecraft:glass>`的烧炼配方

```java
furnace.remove(<minecraft:glass>);
```

这将移除所有输入为`<minecraft:quartz_ore>`且输出为`<minecraft:quartz>`的烧炼配方。

```java
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### 添加

这会添加当`<minecraft:apple>`被熔炼后输出`<minecraft:golden_apple>`的熔炼配方。 

```java
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

这会添加当`<minecraft:melon>`被熔炼后输出`<minecraft:speckled_melon>`且给予1500点经验的烧炼配方。

```java
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### 燃料

这会将`<minecraft:rotten_flesh>`的燃料值设置为`100`.

```java
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```



## 其他功能
### 获取所有注册的烧炼配方
```
furnace.all;
```
返回一个[`<IFurnaceRecipe>列表`](IFurnaceRecipe)。
