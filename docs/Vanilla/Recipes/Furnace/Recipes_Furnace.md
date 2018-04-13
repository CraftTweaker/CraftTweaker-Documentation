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


## Fuel

### Set

The command for setting fuel values is:

```java
furnace.setFuel(input, burnTime);
```

This will set the burn value of `input` to `burnTime`.
 
Setting the `burnTime` to `0` will stop the `input` from being a fuel item.

### Get

The command for retrieving an item's fuel value is:

```java
furnace.getFuel(item); 
```

This will return the burn value as an Integer

## Examples

### Removal

This will remove all Furnace recipes that outputs `<minecraft:glass>`.

```java
furnace.remove(<minecraft:glass>);
```

This will remove all Furnace recipes `<minecraft:quartz>` that use `<minecraft:quartz_ore>` as an input.

```java
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Addition

This will add a Furnace recipe that will output a `<minecraft:golden_apple>` when a `<minecraft:apple>` is smelted.

```java
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

This will add a Furnace recipe that will output a `<minecraft:speckled_melon>` when a `<minecraft:melon>` is smelted and will give the player 1500 xp points.

```java
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Fuel

This will set the Fuel value of `<minecraft:rotten_flesh>` to `100`.

```java
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```



## Other Functionality
### Getting all registered Furnace Recipes
```
furnace.all;
```
Returns a [`List<IFurnaceRecipe>`](IFurnaceRecipe).
