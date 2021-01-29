# MCPotion

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotion;
```


## Methods

### getNamePrefixed

Return Type: string

```zenscript
MCPotion.getNamePrefixed(name as string) as string
```
| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


## Свойства

| Название         | Тип                                                                                                  | Имеет Getter | Имеет Setter |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| commandString    | string                                                                                               | true         | false        |
| effects          | stdlib.List&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt; | true         | false        |
| hasInstantEffect | boolean                                                                                              | true         | false        |

