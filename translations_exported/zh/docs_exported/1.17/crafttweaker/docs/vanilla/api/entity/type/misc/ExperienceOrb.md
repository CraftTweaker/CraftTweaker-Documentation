# ExperienceOrb

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.misc.ExperienceOrb;
```


## Extending Entity

ExperienceOrb extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in ExperienceOrb

## 使用方式

:::group{name=getIcon}

Return Type: int

```zenscript
// ExperienceOrb.getIcon() as int

myExperienceOrb.getIcon();
```

:::

:::group{name=getValue}

Return Type: int

```zenscript
// ExperienceOrb.getValue() as int

myExperienceOrb.getValue();
```

:::


## 参数

| 名称    | 类型  | 可获得  | 可设置   | 描述                      |
| ----- | --- | ---- | ----- | ----------------------- |
| icon  | int | true | false | No Description Provided |
| value | int | true | false | No Description Provided |

