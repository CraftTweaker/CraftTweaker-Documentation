# Mano

Una Mano es una enumeración de las dos manos posibles del jugador: principal y apagado

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.Mand;`

## Enumeraciones

La mano puede ser de esos dos valores:

- principal
- apagado

```zenscript
import mods.contenttweaker.Hand;

Hand.off();
Hand.main();
Hand.fromString("off");
Hand.fromString("main");
```

## Usos

El uso principal de una mano está en una función de [ItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/).

## Comparando dos objetos de mano

Puedes comparar dos objetos de mano usando el getter `==`.

```zenscript
Man.main() == Man.main()
```