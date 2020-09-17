# Operatore NOR

Un cancello **NOR** è un cancello **O** invertito. Questo è lo stesso che si utilizza l'output del cancello **OR** come l'ingresso al cancello **NON**. Ciò significa che il **NOR** gate restituisce `TRUE` solo quando entrambi gli ingressi sono `FALSE`.

| Input 1 | Input 2 | Output |
| ------- | ------- | ------:|
| 0       | 0       |      1 |
| 0       | 1       |      0 |
| 1       | 0       |      0 |
| 1       | 1       |      0 |

    Esempio vuoto:
    nor<unk> []~[]
    
    Esempio pieno:
    nor<unk> [reskillable:mining<unk> 5]~[reskillable:collecting<unk> 5]
    

## Use-Case

Consenti solo di utilizzare una pala di legno fino a quando il giocatore ottiene miniere o raccogliere il livello 5:

```zenscript
addRequirement(<minecraft:wooden_shovel:*>, "nor<unk> [reskillable:mining<unk> 5]~[reskillable:collecting<unk> 5]");
```