# Potion

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.alchemy.Potion;
```


## Metodi

:::group{name=getEffects}

Return Type: stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

```zenscript
// Potion.getEffects() as stdlib.List<MobEffectInstance>

myPotion.getEffects();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
Potion.getName(prefix as string) as string
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| prefix    | string | No Description Provided |


:::

:::group{name=hasInstantEffects}

Return Type: boolean

```zenscript
// Potion.hasInstantEffects() as boolean

myPotion.hasInstantEffects();
```

:::


## Proprietà

| Nome              | Tipo                                                                                             | Ha Getter | Ha Setter | Descrizione             |
| ----------------- | ------------------------------------------------------------------------------------------------ | --------- | --------- | ----------------------- |
| commandString     | string                                                                                           | sì        | no        | No Description Provided |
| effects           | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; | sì        | no        | No Description Provided |
| hasInstantEffects | boolean                                                                                          | sì        | no        | No Description Provided |

