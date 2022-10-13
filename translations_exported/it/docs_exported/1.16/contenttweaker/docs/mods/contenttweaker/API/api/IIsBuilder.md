# IIsBuilder

Denota tutto ciò che è un costruttore. Che ti aspettavi?

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.api.IIsBuilder;
```


## Metodi

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// IIsBuilder.build(resourceLocation as string) as void

myIIsBuilder.build("my_awesome_block");
```

| Parametro        | Tipo   | Descrizione                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::


