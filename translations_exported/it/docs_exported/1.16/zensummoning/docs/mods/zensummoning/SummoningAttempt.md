# SummoningAttempt

This class was added by a mod with mod-id `zensummoning`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.SummoningAttempt;
```


## Proprietà

| Nome     | Tipo                                                  | Ha Getter | Ha Setter | Descrizione                                              |
| -------- | ----------------------------------------------------- | --------- | --------- | -------------------------------------------------------- |
| message  | string                                                | sì        | sì        | The [unlocalized] message to be displayed to the player. |
| pos      | [BlockPos](/vanilla/api/util/BlockPos)                | sì        | no        | Position of the altar.                                   |
| success  | boolean                                               | sì        | sì        | Whether or not the summoning will proceed.               |
| summoner | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | sì        | no        | Gets the person who activated the summoning              |
| world    | [MCWorld](/vanilla/api/world/MCWorld)                 | sì        | no        | World that the summoning is occurring in.                |

