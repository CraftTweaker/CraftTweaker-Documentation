# 함수 import하기

매번 함수의 풀네임을 작성하는 것보다는 import를 사용하는 것이 더 나을지도 모릅니다. 특히 모드 지원 함수를 사용할 때 유용합니다.

## 1.12 버전 이전에서 사용시 유의사항

With CraftTweaker 1.12, a lot of code has changed.  
Before, all internal functions were called using `minetweaker.package.function`. Now, `minetweaker` has been replaced by `crafttweaker`, so now it sais `crafttweaker.name.function`!

Should you ever experience any importing issues with scripts from this wiki, you may want to check if your MC version is below 1.12.

## Basic Import

Imports have to be declared at the top of a Script. You will have to declare imports for each scripts separately. Be careful not to import two functions with the same name, use the AS function for that

```zenscript
//This will import the hide function from JEI
import mods.jei.JEI.removeAndHide;

//And this will import the JEI package
import mods.jei.JEI;

//removeAndHide is a function, so we can just use it
removeAndHide(<minecraft:dirt>);

//JEI is a package, so we need to specify what function of it we want to use
JEI.hide(<minecraft:diamond>);
```

## Import as

Sometimes you want to import two functions with the same name or just want to keep your scripts look better by using custom names. When adding the AS statement at the end of the import, you can specify the name that the import should listen to.

```zenscript
//This will import the hide function from JEI and make it available under the name "h"
import mods.jei.JEI.hide as h;

//And this will import the removeAndHide function from JEI and make it available under the name "rh"
import mods.jei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```