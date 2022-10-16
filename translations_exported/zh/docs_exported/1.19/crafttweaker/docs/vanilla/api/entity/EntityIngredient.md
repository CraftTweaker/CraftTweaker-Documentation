# EntityIngredient

EntityIngredient that facilitates accepting either a single, or multiple [EntityType](/vanilla/api/entity/EntityType)&lt;T&gt;s, [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;T&gt;&gt;s or [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;T&gt;&gt;&gt;s.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityIngredient;
```


## 已实现的接口
EntityIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in EntityIngredient

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/bracket/CommandStringDisplayable)

## 运算符

:::group{name=OR}

```zenscript
myEntityIngredient | other as EntityIngredient
```

:::


