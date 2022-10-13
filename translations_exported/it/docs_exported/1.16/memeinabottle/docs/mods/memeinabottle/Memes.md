# Memes

This class was added by a mod with mod-id `memeinabottle`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.memeinabottle.Memes;
```


## Static Methods

:::group{name=addItemMeme}

Return Type: void

```zenscript
Memes.addItemMeme(uniqueID as string, weight as int, stack as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| uniqueID  | string                                      | No Description Provided |
| weight    | int                                         | No Description Provided |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=addItemMessageMeme}

Return Type: void

```zenscript
Memes.addItemMessageMeme(uniqueID as string, weight as int, stack as IItemStack, message as string) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| uniqueID  | string                                      | No Description Provided |
| weight    | int                                         | No Description Provided |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| message   | string                                      | No Description Provided |


:::

:::group{name=addItemSoundAndMessageMeme}

Return Type: void

```zenscript
Memes.addItemSoundAndMessageMeme(uniqueID as string, weight as int, stack as IItemStack, sound as string, message as string) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| uniqueID  | string                                      | No Description Provided |
| weight    | int                                         | No Description Provided |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| sound     | string                                      | No Description Provided |
| message   | string                                      | No Description Provided |


:::

:::group{name=addItemSoundMeme}

Return Type: void

```zenscript
Memes.addItemSoundMeme(uniqueID as string, weight as int, stack as IItemStack, sound as string) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| uniqueID  | string                                      | No Description Provided |
| weight    | int                                         | No Description Provided |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| sound     | string                                      | No Description Provided |


:::

:::group{name=disableMeme}

Return Type: void

```zenscript
Memes.disableMeme(meme as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| meme      | string | No Description Provided |


:::

:::group{name=disableMeme}

Return Type: void

```zenscript
Memes.disableMeme(memes as string[]) as void
```

| Parametro | Tipo     | Descrizione             |
| --------- | -------- | ----------------------- |
| memes     | string[] | No Description Provided |


:::

:::group{name=enableMeme}

Return Type: void

```zenscript
Memes.enableMeme(meme as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| meme      | string | No Description Provided |


:::

:::group{name=enableMeme}

Return Type: void

```zenscript
Memes.enableMeme(memes as string[]) as void
```

| Parametro | Tipo     | Descrizione             |
| --------- | -------- | ----------------------- |
| memes     | string[] | No Description Provided |


:::

