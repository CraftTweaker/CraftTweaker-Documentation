# AbstractVillager

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.villager.AbstractVillager;
```


## 已实现的接口
AbstractVillager implements the following interfaces. That means all methods defined in these interfaces are also available in AbstractVillager

- [Merchant](/vanilla/api/entity/type/villager/Merchant)

## 使用方式

:::group{name=getUnhappyCounter}

Return Type: int

```zenscript
// AbstractVillager.getUnhappyCounter() as int

myAbstractVillager.getUnhappyCounter();
```

:::

:::group{name=isTrading}

Return Type: boolean

```zenscript
// AbstractVillager.isTrading() as boolean

myAbstractVillager.isTrading();
```

:::

:::group{name=playCelebrateSound}

```zenscript
// AbstractVillager.playCelebrateSound()

myAbstractVillager.playCelebrateSound();
```

:::

:::group{name=setUnhappyCounter}

```zenscript
AbstractVillager.setUnhappyCounter(unhappyCounter as int)
```

| 参数             | 类型  |
| -------------- | --- |
| unhappyCounter | int |


:::


## 参数

| 名称             | 类型  | 可获得  | 可设置   |
| -------------- | --- | ---- | ----- |
| isTrading      | 布尔值 | true | false |
| unhappyCounter | int | true | true  |

