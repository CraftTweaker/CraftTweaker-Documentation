# MCPotionEffect

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotionEffect;
```
## Obtention

You can get an Object of this type using the `<potion:` bracket expression parser. It is available through the dump commands.

## Metodi

:::group{name=isReady}

Return Type: boolean

```zenscript
MCPotionEffect.isReady(duration as int, amplifier as int) as boolean
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| duration  | int  | No Description Provided |
| amplifier | int  | No Description Provided |


:::

:::group{name=newInstance}

Return Type: [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
MCPotionEffect.newInstance(duration as int, amplifier as int) as MCPotionEffectInstance
```

| Parametro | Tipo | Descrizione             | Optional | DefaultValue |
| --------- | ---- | ----------------------- | -------- | ------------ |
| duration  | int  | No Description Provided | no       |              |
| amplifier | int  | No Description Provided | sì       | 0            |


:::


## Proprietà

| Nome          | Tipo                                                                       | Ha Getter | Ha Setter | Descrizione             |
| ------------- | -------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| commandString | string                                                                     | sì        | no        | No Description Provided |
| curativeItems | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | sì        | no        | No Description Provided |
| displayName   | string                                                                     | sì        | no        | No Description Provided |
| isBeneficial  | boolean                                                                    | sì        | no        | No Description Provided |
| isInstant     | boolean                                                                    | sì        | no        | No Description Provided |
| liquidColor   | int                                                                        | sì        | no        | No Description Provided |
| nome          | string                                                                     | sì        | no        | No Description Provided |

