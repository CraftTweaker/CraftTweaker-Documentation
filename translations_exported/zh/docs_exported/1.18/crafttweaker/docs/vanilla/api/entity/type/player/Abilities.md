# Abilities

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Abilities;
```


## 使用方式

:::group{name=getFlyingSpeed}

Return Type: float

```zenscript
// Abilities.getFlyingSpeed() as float

myAbilities.getFlyingSpeed();
```

:::

:::group{name=getWalkingSpeed}

Return Type: float

```zenscript
// Abilities.getWalkingSpeed() as float

myAbilities.getWalkingSpeed();
```

:::

:::group{name=setFlyingSpeed}

```zenscript
Abilities.setFlyingSpeed(param0 as float)
```

| 参数     | 类型    |
| ------ | ----- |
| param0 | float |


:::

:::group{name=setWalkingSpeed}

```zenscript
Abilities.setWalkingSpeed(param0 as float)
```

| 参数     | 类型    |
| ------ | ----- |
| param0 | float |


:::


## 参数

| 名称           | 类型    | 可获得  | 可设置  |
| ------------ | ----- | ---- | ---- |
| flyingSpeed  | float | true | true |
| walkingSpeed | float | true | true |

