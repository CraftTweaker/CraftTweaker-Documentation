# Sources de chauffage

## Paquet
```zenscirpt
`mods.exnihilocreatio.Heat`
```

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) entrée** Le bloc qui fournit de la chaleur.
- **Int chaleur** chaleur par instance.

## Ajouter

```zenscript
mods.exnihilocreatio.Heat.addRecipe(IItemStack, Int);

mods.exnihilocreatio.Heat.addRecipe(<minecraft:log>, 20);
```

## Retirer

```zenscript
mods.exnihilocreatio.Heat.removeAll();
```