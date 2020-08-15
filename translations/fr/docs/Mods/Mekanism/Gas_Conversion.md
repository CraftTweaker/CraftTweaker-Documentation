# Conversion de l'élément en gaz

Depuis le Mekanism 9.7.5, il est désormais possible de réaliser des conversions de gaz sur mesure dans différentes machines.

Si vous voulez modifier l'une des valeurs des conversions intégrées, il est recommandé de supprimer d'abord la conversion, puis de la rajouter au lieu de l'écraser. Cela garantit qu'il supprime correctement toutes les données comme en 9.7. il n'a pas de sortie ou de gestion spécifiée de ce qui se passe lorsqu'un élément est listé deux fois.

## Ajouter

```zenscript
mods.mekanism.GasConversion.register(IIngrédient, IGasStack gas);

mods.mekanism.GasConversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

## Retirer

```zenscript
mods.mekanism.GasConversion.unregister(IIngrédient, IGasStack gas);

mods.mekanism.GasConversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```

## Suppression de toutes les conversions

```zenscript
mods.mekanism.GasConversion.unregisterAll();
```