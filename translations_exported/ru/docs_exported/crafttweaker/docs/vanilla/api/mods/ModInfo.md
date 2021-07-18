# Информация о моде

Задерживает информацию о загруженном моде

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.ModInfo;
```


## Свойства

| Название          | Тип                                                                               | Имеет Getter | Имеет Setter |
| ----------------- | --------------------------------------------------------------------------------- | ------------ | ------------ |
| blocks            | stdlib.List&lt;[MCBlock](/vanilla/api/blocks/MCBlock)&gt;             | true         | false        |
| displayName       | string                                                                            | true         | false        |
| типы сущностей    | stdlib.List&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true         | false        |
| fluids            | stdlib.List&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt;              | true         | false        |
| items             | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;        | true         | false        |
| modid             | string                                                                            | true         | false        |
| пространство имён | string                                                                            | true         | false        |
| version           | string                                                                            | true         | false        |

