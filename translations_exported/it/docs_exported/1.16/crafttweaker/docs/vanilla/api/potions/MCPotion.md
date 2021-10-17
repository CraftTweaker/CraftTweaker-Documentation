# MCPotion

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotion;
```


## Metodi

:::group{name=getNamePrefixed}

Return Type: string

```zenscript
MCPotion.getNamePrefixed(name as string) as string
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::


## Proprietà

| Nome             | Tipo                                                                                                 | Ha Getter | Ha Setter | Descrizione             |
| ---------------- | ---------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| commandString    | string                                                                                               | sì        | no        | No Description Provided |
| effects          | stdlib.List&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt; | sì        | no        | No Description Provided |
| hasInstantEffect | boolean                                                                                              | sì        | no        | No Description Provided |

