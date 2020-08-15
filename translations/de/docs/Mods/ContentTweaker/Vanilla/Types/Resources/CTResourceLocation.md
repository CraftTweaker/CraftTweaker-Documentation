# CTResource-Standort

Ein Ressourcen-Ortungsobjekt wird verwendet, um Minecraft zu sagen, wo etwas zu finden ist. Es besteht aus einer Domäne und einem Pfad.

## Paket anrufen/importieren

If you don't want to type out the package's whole name every time you use a static method or if you are encountering any issues with the class in general it might be required for you to [import](/AdvancedFunctions/Import/) the class:  
`import mods.contenttweaker.ResourceLocation`

## ZenMethoden

### Statische Methoden: Erstellen

Statische Methoden sind diejenigen, die auf das Paket selbst aufgerufen werden, nicht auf irgendeinen speziellen Gegenstand dieser Instanz.  
Sie können diese Methode verwenden, um eine neue CTResourceLocation-Instanz zu erstellen:

```zenscript
var instance = mods.contenttweaker.ResourceLocation.create("contenttweaker:item/myItem");
```

### ZenGetter

ZenGetters werden auf ein Objekt aufgerufen und nicht auf das Paket selbst

```zenscript
print(myLocation.domain);
```

| ZenGetter | Type   |
| --------- | ------ |
| domain    | string |
| pfad      | string |