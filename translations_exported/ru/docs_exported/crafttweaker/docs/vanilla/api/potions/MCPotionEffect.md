# MCPotionEffect

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotionEffect;
```


## Methods

### isReady

Return Type: boolean

```zenscript
MCPotionEffect.isReady(duration as int, amplifier as int) as boolean
```

| Параметр  | Тип | Description             |
| --------- | --- | ----------------------- |
| duration  | int | No Description Provided |
| amplifier | int | No Description Provided |


### newInstance

Return Type: [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
MCPotionEffect.newInstance(duration as int, amplifier as int) as MCPotionEffectInstance
```

| Параметр  | Тип | Description             | Optional | DefaultValue |
| --------- | --- | ----------------------- | -------- | ------------ |
| duration  | int | No Description Provided | false    |              |
| amplifier | int | No Description Provided | true     | 0            |


## Свойства

| Название      | Тип                                                                        | Имеет Getter | Имеет Setter |
| ------------- | -------------------------------------------------------------------------- | ------------ | ------------ |
| commandString | string                                                                     | true         | false        |
| curativeItems | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true         | false        |
| displayName   | string                                                                     | true         | false        |
| isBeneficial  | boolean                                                                    | true         | false        |
| isInstant     | boolean                                                                    | true         | false        |
| liquidColor   | int                                                                        | true         | false        |
| name          | string                                                                     | true         | false        |

