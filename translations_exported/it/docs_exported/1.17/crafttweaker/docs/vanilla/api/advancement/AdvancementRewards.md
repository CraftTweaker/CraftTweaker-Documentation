# AdvancementRewards

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.AdvancementRewards;
```


## Metodi

:::group{name=getRecipes}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)[]

```zenscript
// AdvancementRewards.getRecipes() as ResourceLocation[]

myAdvancementRewards.getRecipes();
```

:::

:::group{name=grant}

Return Type: void

```zenscript
AdvancementRewards.grant(player as invalid) as void
```

| Parametro | Tipo        | Descrizione             |
| --------- | ----------- | ----------------------- |
| player    | **invalid** | No Description Provided |


:::


## Proprietà

| Nome    | Tipo                                                         | Ha Getter | Ha Setter | Descrizione             |
| ------- | ------------------------------------------------------------ | --------- | --------- | ----------------------- |
| recipes | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | sì        | no        | No Description Provided |

