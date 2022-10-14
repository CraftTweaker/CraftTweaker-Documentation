# AdvancementRewards

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.AdvancementRewards;
```


## Методы

:::group{name=getRecipes}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)[]

```zenscript
// AdvancementRewards.getRecipes() as ResourceLocation[]

myAdvancementRewards.getRecipes();
```

:::

:::group{name=grant}

```zenscript
AdvancementRewards.grant(player as ServerPlayer)
```

| Параметр | Тип                                                          |
| -------- | ------------------------------------------------------------ |
| player   | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::


## Свойства

| Название | Тип                                                          | Имеет Getter | Имеет Setter |
| -------- | ------------------------------------------------------------ | ------------ | ------------ |
| recipes  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | true         | false        |

