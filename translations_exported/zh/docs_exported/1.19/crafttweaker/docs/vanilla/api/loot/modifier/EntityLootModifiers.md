# Expansion for EntityType

Additional methods for easier modification of entity-related loot tables.

## 使用方式

:::group{name=addLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current entity.

```zenscript
EntityType.addLootModifier(name as string, modifier as ILootModifier)
```

| 参数       | 类型                                                        | 描述                                      |
| -------- | --------------------------------------------------------- | --------------------------------------- |
| name（名称） | string                                                    | The name of the loot modifier.          |
| modifier | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the entity. |


:::

:::group{name=addPlayerOnlyLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current entity that fires only if the entity was killed by a player.

```zenscript
EntityType.addPlayerOnlyLootModifier(name as string, modifier as ILootModifier)
```

| 参数       | 类型                                                        | 描述                                      |
| -------- | --------------------------------------------------------- | --------------------------------------- |
| name（名称） | string                                                    | The name of the loot modifier.          |
| modifier | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the entity. |


:::

:::group{name=addWeaponAndPlayerOnlyLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current entity that fires only if the entity was killed by a player with the given weapon.

 Additional parameters that further specify the weapon, such as NBT, count, or damage, are ignored.

```zenscript
EntityType.addWeaponAndPlayerOnlyLootModifier(name as string, weapon as IItemStack, modifier as ILootModifier)
```

| 参数       | 类型                                                        | 描述                                                   |
| -------- | --------------------------------------------------------- | ---------------------------------------------------- |
| name（名称） | string                                                    | The name of the loot modifier.                       |
| weapon   | [IItemstack](/vanilla/api/item/IItemStack)                | The weapon that needs to be used to kill the entity. |
| modifier | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the entity.              |


:::

:::group{name=addWeaponAndPlayerOnlyLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current entity that fires only if the entity was killed by a player with the given weapon, optionally considering its damage.

 Additional parameters that further specify the weapon, such as NBT, or count, are ignored.

```zenscript
EntityType.addWeaponAndPlayerOnlyLootModifier(name as string, weapon as IItemStack, matchDamage as boolean, modifier as ILootModifier)
```

| 参数          | 类型                                                        | 描述                                                             |
| ----------- | --------------------------------------------------------- | -------------------------------------------------------------- |
| name（名称）    | string                                                    | The name of the loot modifier.                                 |
| weapon      | [IItemstack](/vanilla/api/item/IItemStack)                | The weapon that needs to be used to kill the entity.           |
| matchDamage | 布尔值                                                       | Whether to consider damage or not when identifying the weapon. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the entity.                        |


:::

:::group{name=addWeaponAndPlayerOnlyLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current entity that fires only if the entity was killed by a player with the given weapon, optionally considering its damage and NBT data.

 Additional parameters that further specify the weapon, such as count, are ignored.

```zenscript
EntityType.addWeaponAndPlayerOnlyLootModifier(name as string, weapon as IItemStack, matchDamage as boolean, matchNbt as boolean, modifier as ILootModifier)
```

| 参数          | 类型                                                        | 描述                                                               |
| ----------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| name（名称）    | string                                                    | The name of the loot modifier.                                   |
| weapon      | [IItemstack](/vanilla/api/item/IItemStack)                | The weapon that needs to be used to kill the entity.             |
| matchDamage | 布尔值                                                       | Whether to consider damage or not when identifying the weapon.   |
| matchNbt    | 布尔值                                                       | Whether to consider NBT data or not when identifying the weapon. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the entity.                          |


:::

:::group{name=addWeaponOnlyLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current entity that fires only if the entity was killed with the given weapon.

 Additional parameters that further specify the weapon, such as NBT, count, or damage, are ignored.

```zenscript
EntityType.addWeaponOnlyLootModifier(name as string, weapon as IItemStack, modifier as ILootModifier)
```

| 参数       | 类型                                                        | 描述                                                   |
| -------- | --------------------------------------------------------- | ---------------------------------------------------- |
| name（名称） | string                                                    | The name of the loot modifier.                       |
| weapon   | [IItemstack](/vanilla/api/item/IItemStack)                | The weapon that needs to be used to kill the entity. |
| modifier | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the entity.              |


:::

:::group{name=addWeaponOnlyLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current entity that fires only if the entity was killed with the given weapon, optionally considering its damage.

 Additional parameters that further specify the weapon, such as NBT, or count, are ignored.

```zenscript
EntityType.addWeaponOnlyLootModifier(name as string, weapon as IItemStack, matchDamage as boolean, modifier as ILootModifier)
```

| 参数          | 类型                                                        | 描述                                                             |
| ----------- | --------------------------------------------------------- | -------------------------------------------------------------- |
| name（名称）    | string                                                    | The name of the loot modifier.                                 |
| weapon      | [IItemstack](/vanilla/api/item/IItemStack)                | The weapon that needs to be used to kill the entity.           |
| matchDamage | 布尔值                                                       | Whether to consider damage or not when identifying the weapon. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the entity.                        |


:::

:::group{name=addWeaponOnlyLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current entity that fires only if the entity was killed with the given weapon, optionally considering its damage and NBT data.

 Additional parameters that further specify the weapon, such as count, are ignored.

```zenscript
EntityType.addWeaponOnlyLootModifier(name as string, weapon as IItemStack, matchDamage as boolean, matchNbt as boolean, modifier as ILootModifier)
```

| 参数          | 类型                                                        | 描述                                                               |
| ----------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| name（名称）    | string                                                    | The name of the loot modifier.                                   |
| weapon      | [IItemstack](/vanilla/api/item/IItemStack)                | The weapon that needs to be used to kill the entity.             |
| matchDamage | 布尔值                                                       | Whether to consider damage or not when identifying the weapon.   |
| matchNbt    | 布尔值                                                       | Whether to consider NBT data or not when identifying the weapon. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the entity.                          |


:::


