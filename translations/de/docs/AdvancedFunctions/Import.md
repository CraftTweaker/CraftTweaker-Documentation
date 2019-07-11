# Import-Funktion

Bevor man einen kompletten Funktionsnamen immer und immer wieder eintippen muss, kann man diese Funktion einfach importieren. Das ist praktisch, wenn man Funktionen von Mods nutzt.

## Hinweis bei Importen vor Version 1.12

Seit CraftTweaker 1.12 hat sich vieles verändert.  
Früher wurden alle internen Funktionen mittels `minetweaker.paket.funktion` aufgerufen. Nun wurde `minetweaker` durch `crafttweaker` ersetzt, weswegen man Funktionen mit `crafttweaker.name.funktion` aufruft!

Falls du also bei Skripten aus diesem Wiki Probleme haben solltest, solltest du nachschauen, ob deine Minecraft-Version eventuell älter als 1.12 ist.

## Standard-Import

Imports werden immer ganz oben im Skript deklariert. Deklarierte Imports gelten aber nur für dieses eine Skript. Pass aber auf, dass du keine zwei Funktionen mit dem gleichen Namen importierst, nutze dazu am besten die AS-Funktion.

    //Dies importiert die "hide"-Funktion von JEI
    import mods.jei.JEI.removeAndHide;
    
    //Und dies importiert das ganze JEI-Paket
    import mods.jei.JEI;
    
    //removeAndHide ist eine Funktion, welche wir nutzen können
    removeAndHide(<minecraft:dirt>);
    
    //JEI ist ein Paket, also müssen wir angeben, welche Funktion genau wir davon nutzen wollen
    JEI.hide(<minecraft:diamond>);
    

## Import as (Importieren als)

Sometimes you want to import two functions with the same name or just want to keep your scripts look better by using custom names. When adding the AS statement at the end of the import, you can specify the name that the import should listen to.

    //This will import the hide function from JEI and make it available under the name "h"
    import mods.jei.JEI.hide as h;
    
    //And this will import the removeAndHide function from JEI and make it available under the name "rh"
    import mods.jei.JEI.removeAndHide as rh;
    
    h(<minecraft:dirt>);
    rh(<minecraft:diamond>);