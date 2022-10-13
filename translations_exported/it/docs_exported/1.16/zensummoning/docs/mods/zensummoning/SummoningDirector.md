# SummoningDirector



This class was added by a mod with mod-id `zensummoning`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.SummoningDirector;
```


## Static Methods

:::group{name=addSummonInfo}



Return Type: void

```zenscript
// SummoningDirector.addSummonInfo(info as SummoningInfo) as void

SummoningDirector.addSummonInfo(SummoningInfo.create()
         .setCatalyst(<item:minecraft:stick>)
         .setConsumeCatalyst(false)
         .setReagents([<item:minecraft:stone>, <item:minecraft:egg>*12])
         .addMob(MobInfo.create().setMob("minecraft:zombie")));
```

| Parametro | Tipo                                              | Descrizione      |
| --------- | ------------------------------------------------- | ---------------- |
| info      | [SummoningInfo](/mods/zensummoning/SummoningInfo) | Summoning to add |


:::

