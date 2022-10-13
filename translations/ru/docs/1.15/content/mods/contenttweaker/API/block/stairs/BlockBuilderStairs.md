# BlockBuilderStairs

A special Block Builder that allows you to create stairs. <p> Stairs will have not one but three textures that you will need to supply: One for the top, one for the bottom and one for the sides. By default these textures will use your blockname as name, suffixed by `_top`, `_bottom` or `_sides`. As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.block.stairs.BlockBuilderStairs
```

## Implemented Interfaces
BlockBuilderStairs implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Методы
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Параметр         | Тип    | Описание                             |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | String | The resource path to give this block |


### withBottomTexture

Allows you to override the path of the texture that the bottom side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| Параметр      | Тип                                      | Описание                                   |
| ------------- | ---------------------------------------- | ------------------------------------------ |
| bottomTexture | crafttweaker.api.util.MCResourceLocation | The texture to be used for the bottom side |



Allows you to override the path of the texture that the bottom side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новый BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(нижняя Текстура как функция.Функция<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
новый BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as MCResourceLocation) => новый MCResourceLocation(blockName.namace, blockName.path + "_снизу"));
```

| Параметр      | Тип                                                                                                                     | Описание            |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |
| bottomTexture | function.Function&lt;crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation&gt; | The function to use |


### withSidesTexture

Allows you to override the path of the texture that the sides should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Параметр     | Тип                                      | Описание                             |
| ------------ | ---------------------------------------- | ------------------------------------ |
| sidesTexture | crafttweaker.api.util.MCResourceLocation | The texture to be used for the sides |



Allows you to override the path of the texture that the sides should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новый BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namace, blockName.path + "_sides"));
```

| Параметр     | Тип                                                                                                                     | Описание            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |
| sidesTexture | function.Function&lt;crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation&gt; | The function to use |


### withTopTexture

Allows you to override the path of the texture that the top side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Параметр   | Тип                                      | Описание                                |
| ---------- | ---------------------------------------- | --------------------------------------- |
| topTexture | crafttweaker.api.util.MCResourceLocation | The texture to be used for the top side |



Allows you to override the path of the texture that the top side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новый BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Параметр   | Тип                                                                                                                     | Описание            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |
| topTexture | function.Function&lt;crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation&gt; | The function to use |



