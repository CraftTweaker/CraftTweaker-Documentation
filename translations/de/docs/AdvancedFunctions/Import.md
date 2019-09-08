# Import-Funktion

Bevor man einen kompletten Funktionsnamen immer und immer wieder eintippen muss, kann man diese Funktion einfach importieren. Das ist praktisch, wenn man Funktionen von Mods nutzt.

## Hinweis bei Importen vor Version 1.12

Seit CraftTweaker 1.12 hat sich vieles verändert.  
Früher wurden alle internen Funktionen mittels `minetweaker.paket.funktion` aufgerufen. Nun wurde `minetweaker` durch `crafttweaker` ersetzt, weswegen man Funktionen mit `crafttweaker.name.funktion` aufruft!

Falls du also bei Skripten aus diesem Wiki Probleme haben solltest, solltest du nachschauen, ob deine Minecraft-Version eventuell älter als 1.12 ist.

## Standard-Import

Imports werden immer ganz oben im Skript deklariert. Deklarierte Imports gelten aber nur für dieses eine Skript. Pass aber auf, dass du keine zwei Funktionen mit dem gleichen Namen importierst, nutze dazu am besten die AS-Funktion.

```zenscript
//Dies importiert die "hide"-Funktion von JEI
import mods.jei.JEI.removeAndHide;

//Und dies importiert das ganze JEI-Paket
import mods.jei.JEI;

//removeAndHide ist eine Funktion, welche wir nutzen können
removeAndHide(<minecraft:dirt>);

//JEI ist ein Paket, also müssen wir angeben, welche Funktion genau wir davon nutzen wollen
JEI.hide(<minecraft:diamond>);
```

## Import as (Importieren als)

Manchmal will man zwei Funktionen mit dem gleichen Namen importieren oder das Skript einfach schöner halten, in dem man seinen Imports eigene Namen gibt. Mit dem AS-Statement hinter dem Import kannst du diesem Import einen eigenen Namen geben.

```zenscript
//Dies importiert die "hide"-Funktion von JEI und gibt ihr den Namen "h"
import mods.jei.JEI.hide as h;

//Dies importiert die "removeAndHide"-Funktion von JEI und gibt ihr den Namen "rh"
import mods.jei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```