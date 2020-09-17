
### 所属类名

```zenscript
导入 mods.roots.summonCreatheres;
```

#### 可用方法

```zenscript
无效加权(
  IEntityDefinition entity, // 被召唤的实体
  IIngredient[成分] / / 一个用于召唤的成分列表
)；
```


---


```zenscript
无效 removeEntity(
  IEntityDefinition entity // 实体将通过配方
 从召唤中移除；
```


---


```zenscript
无效移除生命值(
  IEntityDefinition entity // 实体可移除
的生命实质)；
```


---


```zenscript
无效的 addLifeEssence(
  IEntityDefinition entity // 实体为
 添加生命实质的实体)；
```


---


```zenscript
缺少清除寿命();
```


---


### 例子

```zenscript
导入 mods.roots.summonCreatheres；

// 清除由
// 动物采集地图
SummonCreaty添加的所有自动生成的生命值。 学习生命();

// 添加一个配方，用3个项目召唤一个鸡肉
SummonCreat。 ddEntity(<entity:minecraft:chicken>, [<minecraft:wheat_seeds>, <minecraft:wheat>, <ore:ingotIron>]);

// 从生命基础列表中删除动物捕获示例中添加的末影人
// (假定它尚未被清除)
SummonCreat。 EmoveLifeEssence(<entity:minecraft:enderman>);

// 手动为末影龙
SummonCreath. dLifeEssence(<entity:minecraft:ender_dragon>);

// 移除奶牛的默认配方
SummonCreatures.removeEntity(<entity:minecraft:cow>);
```
