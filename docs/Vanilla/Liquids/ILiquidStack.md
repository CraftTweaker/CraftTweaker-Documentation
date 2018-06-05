# 流体堆（ILiquidStack）

流体堆，包含一个 [流体定义](ILiquidDefinition) ，一个可选的标签，一个可选的数量。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。 
`import crafttweaker.liquid.ILiquidStack;`

## 创建一个流体堆
流体堆的创建需要使用 [流体尖括号引用处理器](/Vanilla/Brackets/Bracket_Liquid)


```js
//查看流体尖括号引用处理器获取更多信息
val lava = <liquid:lava>;

//liquid.withTag(Tag as IData)
val lavaWithTag = <liquid:lava>.withTag(DATA);

//liquid * amount 单位为 mb (-> 1000mb = 1 桶)
val lavaWithAmount = <liquid:lava> * 1000;
```

## 获取流体属性
既然流体堆是流体的实例，那么必然能够获取对应流体的信息。  
查看下方表格。获取更多信息。

|  Zengetter  |             用处             |                返回类型                 |                示例                 |
| :---------: | :--------------------------: | :-------------------------------------: | :---------------------------------: |
|    name     |      返回流体非本地化名      |                 string                  |    `test = <liquid:lava>.name;`     |
| displayName |      返回流体本地化名称      |                 string                  | `test = <liquid:lava>.displayName;` |
|   amount    |       返回流体对象数量       |                   int                   |   `test = <liquid:lava>.amount;`    |
| luminosity  |         返回流体亮度         |                   int                   | `test = <liquid:lava>.luminosity;`  |
|   density   |       返回流体相对密度       |                   int                   |   `test = <liquid:lava>.density;`   |
| temperature |         返回流体温度         |                   int                   | `test = <liquid:lava>.temperature;` |
|  viscosity  |         返回流体粘度         |                   int                   |  `test = <liquid:lava>.viscosity;`  |
|   gaseous   |        流体是否为气态        |                 boolean                 |   `test = <liquid:lava>.gaseous;`   |
|     tag     |        流体对象的标签        |      [IData](/Vanilla/Data/IData)       |     `test = <liquid:lava>.tag;`     |
| definition  | 返回流体定义（后面篇章讲解） | [ILiquid Definition](ILiquidDefinition) | `test = <liquid:lava>.definition;`  |

# 材料接口实现
Java 术语：流体堆实现了材料接口。换句话说，流体堆可以使用 [材料](/Vanilla/Variable_Types/IIngredient) 接口的所有方法。  
通过阅读材料篇章获取更多信息，但有一些特殊情况需要注意，因为流体并非是物品。

* 你不能标记流体堆，否则你会获得 null 值。
* `.items` 将会返回空列表
* `.itemArray` 返回空数组
* `.liquids` 以流体堆形式返回流体（对，就是这对象）
* 流体堆没有转化器，调用转换器会永远返回 false
* 流体堆没有条件（`.only` 无法工作）
* 与物品对比永远返回 false